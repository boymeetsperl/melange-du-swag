# simple program that outputs the first 10 cubes
square = (x) -> x * x
cube = (x) -> x * square(x)

math =
    root: Math.sqrt
    square: square
    cube: cube

# list comprehension in coffeescript
cubes = (math.cube num for num in [1..10])
console.log cubes