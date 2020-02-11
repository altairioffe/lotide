# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @altairioffe/lotide`

**Require it:**

`const _ = require('@altairioffe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes an array, returns the first element of that array.
* `tail(array)`: takes an array, returns the array without the first element
* `eqArrays(array1, array2)`: takes in two arrays, returns true or false, based on a perfect match.
* `assertArraysEqual(array1, array2)`: takes two arrays, logs message to console asserting their equality.
* `middle(array)`: takes an array, returns the middle-most element(s) of the array.
* `without(array1, array2)`: takes two arrays, returns a copy of array1 with any elements from array2 filtered out from it.
* `flatten(array)`: takes an array of arrays, returns flattened array.
* `countOnly(array, object)`: takes an array and an objects, returns an object listing counts of each array item specified in object.
* `countLetters(string)`: takes a string and return a count of each letter in that string.
* `letterPositions(array)`: takes a string, returns indeces for each letter in the string.
* `findKeyByValue(object, vale)`: takes an object and a value, returns the first object key containing the value.
* `eqObjects(object1, object2)`: takes two objects, returns true or false according to match.
* `assertObjectsEqual(object1, object2)`: takes two object, logs message to console according to match.
* `map(array, function)`: takes an array and a function, passes each element through the function and returns the resulting array.
* `takeUntil(array, function)`: takes an array and a function, calls the function on each array element and returns a subset of the array from the first element, until such element that the function returns true.
* `findKey(object, function)`: takes an object and a function, returns the first key on which the function returns true.