# Do Now!

## Pre-Do Now

When you come in... 

```
git add .
git commit -m "push for today 7/19""
git push origin master
```

then

```
git pull upstream master
```

## JS: Functions

1. Define a function `reverseString` that returns the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj". Hint: there is a `.reverse()` method but it only works on arrays. You can `.split('')` a string to turn it into an array, and `.join('')` it back together again into a string.

[Mozilla Developer Network Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

2. Write a function that takes an array as a parameter. The function should return the median number in an array.

Example:
Given the following array:

```
  [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
```
Use some kind of *sort*ing method to put the values in order first, then somehow access the median element, somehow using the length of the array...somehow.
...

### Functions within Objects

Using the following object:

```
var heart = {
  bpm : 140
}
```
-  Write a new function called increaseBpm that takes an Object and a Number as arguments and will increase the bpm of that object by a value of the user's choosing.  

-  Write a new function called decreaseBpm that takes an Object and a Number as arguments and will decrease the bpm of that object by a value of the user's choosing.  

- Assign a new key in heart object called 'color', and set the value to "red".  Do not delete the original assignment above. Notice the differences. 

```
heart = {
	bpm: 140,
	color: "red"
}
```
-  Wrte a new function called changeColor that changes the heart object's color.  The function should take an Object and a String as arguments.

-  Write a new function called patientStable that takes in the heart object and prints whether or not the patient is stable.
	-  If the heart object has a bpm > 0 console.log "Patient is stable" to console
	-  If the heart object has a bpm <= 0 console.log "Patient is not stable" to console

-  Invoke the functions by placing the following code at the bottom of your JS file and run all of the javascript in your browser.  Basically keep all of your JavaScript functions for this exercise uncommented.

```
increaseBpm(heart, 140);
decreaseBpm(heart, 10);
patientStable(heart);
changeColor(heart, "Gold");
console.log(heart);
``` 

## Concise Object Methods & Properties Exercise

### Exercise 1

Create 5 empty objects.

Set each object to a variable named after an animal ex: const chicken, const dog, etc

Add a name k/v pair to each object (feel free to use any names you want)

Each animal should have a function that console.log's a noise they make (ex: dog's bark)

Invoke each object's noise function