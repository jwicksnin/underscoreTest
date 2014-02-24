'use strict';
var _ = require('underscore');
/* Underscore Functional Programming Library - make your life easier!  Introductions and code by Jessica Wicksnin.
This program allows you to play with underscore via Node. */

/* MAP */
/* _.map allows you to iterate through a list (an array or an object) and perfom the same function on each item in the list. If
/* this list is an array, the iterative function needs two arguments, while an array just needs one.  Map returns a value for
each item individually */
function mapper () {
  var toMap = _.map({one: 1, three: 3, five: 5}, function(num, key){
    return(num * 3);
  });
  return toMap;
// => 3 9 15
};

/* REDUCE */
/* Similar to map, reduce iterates through a list of values (again, an array or object), but instead of returning a value for each
item, reduce returns one value based on memo, which has a starting point ('hello' in this case), and changes values to be the return
value after each iteration */
function reducer () {
var sentence = _.reduce(["hello ", "there ", "hi"], function(memo, word){
  return memo + word;
}, "hola ");
return sentence;
// => hola hello there hi
};


/* UNION */
/* Simple and elegant, union takes any number of arrays and puts them into one array, in the same order, while eliminating any
redundant values */
function unionizer () {
  var together = _.union([1, 1, 4, 4], [3, 3, 4, 4], [9, 9, 3], [8, 6, 5]);
  return together;
  // => 1,4,3,9,8,6,5
};

/* ZIP */
/* A bit more complex than union, zip also takes any number of arrays. Zip, however, returns a number of arrays equal to the length of
the longest array you passed, with the values combined based on index. For example, the first new array will contain the
values at [0] of the original arrays, in the order the original arrays are passed to zip */
function zipper () {
  var zipped = _.zip([3, 4, 5], ["all", "nothing", "some", "maybe"], [true, false, false]);
  return zipped;
  // => [3,all,true],[4,nothing,false],[5,some,false[,[ ,maybe, ]};
};

/* EXTEND */
/* Extend is an enjoyable function that allows you to extend one object using multiple other objects. Redundant keys are
replaced by the occurence of the key in the final source.*/
function extendor () {
  var longer = _.extend({3 : "three",  9 : "nine", 5 : "five"}, {3 : "three", 6 : "six", 8 : "eight"}, {3 : "threee", 4 : "four", 10 : "ten"});
  return JSON.stringify(longer);
  // => {"3":"threee","4":"four","5":"five","6":"six","8":"eight","9":"nine","10":"ten"}
};

/* PICK */
/* Pick allows you to select (indeed, "pick"), specific keys to display. */
function picker () {
  var picked = _.pick({dog : "Annie", breed : "terrier", age : 5, plays : true}, "plays", "age");
  return JSON.stringify(picked);
  // => {"plays":true,"age":5}
}

/* INVERT */
/* Given an object with at least one key-value pair, reverses the key-value relationships so that keys are values,
and values are keys! */
function inverter () {
  var inverted = _.invert({dog : "Annie", breed : "terrier", age : 5, plays : true});
  return JSON.stringify(inverted);
  // => {"5":"age","Annie":"dog","terrier":"breed","true":"plays"}
}

/* PLUCK */
/* Takes an array of objects and returns the values of the specified common key among the objects */
function plucker () {
  var toPluck = [{dog : "Annie", breed : "terrier", age : 5, plays : true}, {dog : "Lewis", breed : "lab", age : 3, plays : true}];
  var plucked = _.pluck(toPluck, "dog");
  return JSON.stringify(plucked);
  // => ["Annie","Lewis"]
}
// pluck



console.log('Hello world');
console.log("Map :" + mapper());
console.log("Reduce: " + reducer());
console.log("Union: " + unionizer());
console.log("Zip: " + zipper());
console.log("Extend: " + extendor());
console.log("Pick: " + picker());
console.log("Invert: " + inverter());
console.log("Pluck: " + plucker());

