"""Standalone functionality

Does NOT depend on any other module.

"""

import re

from maya import cmds


def unique(name):
    assert isinstance(name, basestring), "`name` must be string"

    while cmds.objExists(name):
        matches = re.findall(r"\d+$", name)

        if matches:
            match = matches[-1]
            name = name.rstrip(match)
            number = int(match) + 1
        else:
            number = 1

        name = name + str(number)

    return name


def uv_from_element(element):
    """Return the UV coordinate of given 'element'

    Supports components, meshes, nurbs.

    """

    supported = ["mesh", "nurbsSurface"]

    uv = [0.5, 0.5]

    if "." not in element:
        type = cmds.nodeType(element)
        if type == "transform":
            geometry_shape = cmds.listRelatives(element, shapes=True)

            if len(geometry_shape) >= 1:
                geometry_shape = geometry_shape[0]
            else:
                return

        elif type in supported:
            geometry_shape = element

        else:
            cmds.error("Could not do what you wanted..")
            return
    else:
        # If it is indeed a component - get the current Mesh
        try:
            parent = element.split(".", 1)[0]

            # Maya is funny in that when the transform of the shape
            # of the component elemen has children, the name returned
            # by that elementection is the shape. Otherwise, it is
            # the transform. So lets see what type we're dealing with here.
            if cmds.nodeType(parent) in supported:
                geometry_shape = parent
            else:
                geometry_shape = cmds.listRelatives(parent, shapes=1)[0]

            if not geometry_shape:
                cmds.error("Skipping %s: Could not find shape." % element)
                return

            if len(cmds.ls(geometry_shape)) > 1:
                cmds.warning("Multiple shapes with identical "
                             "names found. This might not work")

        except TypeError as e:
            cmds.warning("Skipping %s: Didn't find a shape "
                         "for component elementection. %s" % (element, e))
            return

        try:
            type = cmds.nodeType(geometry_shape)

            if type == "nurbsSurface":
                # If a surfacePoint is elementected on a nurbs surface
                root, u, v = element.rsplit("[", 2)
                uv = [float(u[:-1]), float(v[:-1])]

            if type == "mesh":
                # -----------
                # Average the U and V values
                # ===========
                uvs = cmds.polyListComponentConversion(element, toUV=1)
                if not uvs:
                    cmds.warning("Couldn't derive any UV's from "
                                 "component, reverting to default U and V")
                    raise TypeError

                # Flatten list of Uv's as sometimes it returns
                # neighbors like this [2:3] instead of [2], [3]
                flattened = []

                for uv in uvs:
                    flattened.extend(cmds.ls(uv, flatten=True))

                uvs = flattened

                sumU = 0
                sumV = 0
                for uv in uvs:
                    try:
                        u, v = cmds.polyEditUV(uv, query=True)
                    except:
                        cmds.warning("Couldn't find any UV coordinated, "
                                     "reverting to default U and V")
                        raise TypeError

                    sumU += u
                    sumV += v

                averagedU = sumU / len(uvs)
                averagedV = sumV / len(uvs)

                uv = [averagedU, averagedV]
        except TypeError:
            pass

    return uv


def shape_from_element(element):
    """Return shape of given 'element'

    Supports components, meshes, and surfaces

    """

    try:
        # Get either shape or transform, based on element-type
        node = cmds.ls(element, objectsOnly=True)[0]
    except:
        cmds.warning("Could not find node in %s" % element)
        return None

    if cmds.nodeType(node) == 'transform':
        try:
            return cmds.listRelatives(node, shapes=True)[0]
        except:
            cmds.warning("Could not find shape in %s" % element)
            return None

    else:
        return node
