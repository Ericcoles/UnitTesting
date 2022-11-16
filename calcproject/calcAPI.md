# Calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Parameters: a and b are numbers
Returns: the sum of given numbers

- if parameter is missing,throws an exception: `'parameter missing'`
  -if both parameters are given but parameters not numbers, throws an exception `'only numbers allowed'`

### Test cases

#### 1. Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(12,100) return 112
  [2, -4, -2],
  [-4, 2, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0, -3, -3],
  [-3, 0, -3]

#### 2. Floats

sum(10, 11.5) return 21.5
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2,5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 0, -2.5],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### 3. Missing Parameter

- sum() throw an exception `'parameter missing'`
- sum(1) throw an exception `'parameter missing'`
- sum('a') throw an exception `'parameter missing'`
- sum('') throw an exception `'parameter missing'`

#### 4. Parameters are not numbers

- sum('1','2') throw an exception `'only numbers allowed'`
- sum('a',1) throw an exception `'only numbers allowed'`
- sum(1,'a') throw an exception `'only numbers allowed'`
- sum('a','b') throw an exception `'only numbers allowed'`
- sum('','') throw an exception `'only numbers allowed'`
- sum(null,1) throw an exception `'only numbers allowed'`
- sum(undefined,1) throw an exception `'only numbers allowed'`

['1','2'],
['a',1],
[1,'a'],
['a','b'],
['',''],
[null,1],
[undefined,1]

## **subtract(a,b)**

Function returns the difference of a-b of two numbers. Nyubers are passed to the fuction as parameters

Parameters: a and b are numbers
Returns: the differences a-b of given numbers

- if parameter is missing,throws an exception: `'parameter missing'`
  -if both parameters are given but parameters not numbers, throws an exception `'only numbers allowed'`

### Test cases

#### Integers

[1,1,0],
[2,3,-1],
[-2,-4,2],
[0,0,0],
[3,0,3],
[0,3,-3]
...

#### Floats

[10,11.5,-1.5],
[-2.5,3,-5.5],
[2.5,2.5,0],
[2.4,-2.5,4.9]

## division

function divide(a,b) return a/b

problems:
0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity

Infinity/Infinity => NaN
-Infinity/Infinity => NaN
Infinity/-Infinity => NaN
-Infinity/-Infinity => NaN

TestValues:

[0, 0, Number.NaN],
[2, 0, Number.POSITIVE_INFINITY],
[-2, 0, Number.POSITIVE_INFINITY],
[Number.Positive_Infinity, ]
