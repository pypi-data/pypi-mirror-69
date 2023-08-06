# Mensuration package

This package provides tools to find Area and Volume
of different shapes

========================================================================================================================

# Files

The Area_2D.py file contains the tools to find the area of a 2-Dimensional shape.
The possible shape you can access are, Square, Circle, Rectangle, Triangle, Parallelogram,
Trapezium, and Ellipse.

The Volume.py file contains the tools to find the volume of the shape.
The possible shape you can access are, Cube, Sphere, Cylinder, Cone, Cuboid,
Ellipsoid, Pyramid, and Torus.

It is also possible to convert degrees to radians and vice-versa.

========================================================================================================================

# How to use
# Area

Create an object and pass arguments in their respective parameters.
radius, length, base, height, width are the only measurements that can be passed then call the appropriate 
function to get the area of the shape.

Example:
>>> obj = Area(length = 5) 
>>> obj.Square()
25
    
In case of Trapezium and Ellipse, pass appropriate arguments during the instantiation and function call

Example:
>>> obj = Area(height = 10)
>>> obj.Trapezium(length_of_parallel_sides = [1,1])
10

------------------------------------------------------------------------------------------------------------------------

# Volume

Create an object and pass arguments in their respective parameters.
radius, length, height, width are the only measurements that can be passed then call the appropriate 
function to get the volume of the shape.

Example:
>>> obj = Area(length = 3, height = 10, width = 10) 
>>> obj.Cuboid()
300
    
In case of Pyramid, Ellipsoid and Torus pass, appropriate arguments during the function call and
object instantiation

Example:
>>> obj = Volume()
>>> obj.Ellipsoid(radius1 = 2, radius2 = 2 ,radius3 = 2)
33.51

------------------------------------------------------------------------------------------------------------------------
# Degrees to Radians

The theta value must be integer or a float. You can call 'to_radians' function in both area class
and volume class.

Example:
>>> obj = Area()
>>> obj.to_radians(theta = 50)
0.8726646259971648

------------------------------------------------------------------------------------------------------------------------

# Radians to Degrees

The theta value must be a str. You can call 'to_degrees' function in both area class
and volume class. The format to right is "5_pi".

Example:
>>> obj = Area()
>>> obj.to_degrees(theta = '5_pi')
900

========================================================================================================================