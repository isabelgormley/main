# Objects

### Learning Objectives
- Compare JS objects vs arrays
- Explain the difference between object properties and methods
- Create empty objects and objects with multiple properties and methods using object literal syntax
- Add and retrieve object properties using dot and bracket notations
- Iterate over the keys of an object to return and manipulate values


### Why This Is Important
- Understanding objects in JavaScript is a huge fundamental building block writing organized, powerful, and clean code.
	- Objects allow us to deal with complexity in programs
	- Objects allow us to be DRYer 
		- Reminder: DRY = Don't Repeat Yourself!  

### How We Will Learn This
- Review and rep JS objects
- Practice scoping problem domains with pseudo code and JS objects
- Intro discussion to Object Oriented Programming

### JavaScript Objects
Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages...
	- JS: Objects
	- Ruby: Hashes
	- Python: Dictionaries
	- Prework: Associative arrays

In essence, what we're talking about are key/value pairs.
- Objects are a type of key-value store, or a way to group many pairs of keys and values together.
- Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than indices to order and access those pieces of data
- Objects consist of keys and values
	- Keys are unique
	- Values can be common

```javascript
const sample1 = {
	name: "Andrew",
	age: 26,
	cool: true
};
```

```
const sample2 = {
	name: "Andrew",
	name: "McAndrewFace",
	age: 26,
	cool: true
};
```

Note how sample2.name is no longer "Andrew", it's "McAndrewFace". Object keys must be unique! The first line to set `name: "Andrew"` and then we're mutating that value (updating the existing variable, not creating a new one), to `name: "McAndrewFace"`


##### Objects vs Arrays
Objects store data in key / value pairs and can hold multiple k/v pairs. Arrays contain a list of objects in consecutive order.


### Accessing Object Properties
Objects in JS always have properties associated with them.

You can think of a property on a JS object as a type of variable that contains a value. The properties of an onkect can be accessed using "dot notation".

##### Dot Notation
```javascript
var theCoolestInstructor = {
	name: "Andrew Lee"
}
```

console.log(theCoolestInstructor.name);


You can also re-assign or define a property be assigning a value using `=` as you would a normal variable.

```javascript
theCoolestInstructor.age = 26;
console.log(theCoolestInstructor.age);
```

```javascript
theCoolestInstructor.name = "Andrew McAndrewFace";
console.log(theCoolestInstructor.name);
```

##### Exercise
- Create a variable "me" and set it equal to an object with the following...
- firstName: Your first name
- lastName: Your last name
- age: Your age
- console.log the entire me object
- add another attribute...
	- favoriteFood: Your favorite food.

Notice you can add more and more attributes to an object.

##### Bracket Notation
You can accomplish the same by using bracket notation...

```javascript
console.log(theCoolestInstructor["name"]);
```

*Note: First, dot notation seems a bit more common in my experience in JS. But remember, convention. If you're team uses one style, follow it.

*Note: Notice that we are accessing bracket notation properties as "strings"

##### DELETE
This won't be used as often in class but you can absolutely `delete` an attribute from a JS object.

```javascript
delete theCoolestInstructor.name;
```

```javascript
console.log(theCoolestInstructor);
```


### Creating New Objects
There are four types of ways to create new objects...

##### Object Constructor
Ok...so basically, JS uses something called prototypal inheritance. Refresh a browser without any JS and run the following...

```
console.log(Object);
console.log(Array);
```

Notice 2 things...
- The capitalization
- We didn't create anything but these objects exist.

What gives?
JS comes with the bare minimum of data structures defined within the language itself. Ever notice we never have to define what an array is or what a string is. 

That's because JS comes with these "free" data structures out the box.

Cool. So when we create an array or when we create a string, what JS is actually doing is taking the base Classes of data types, and making a copy of it. The terms Model/Classes and constructors are basically refering to blueprints.

Blueprints aren't buildings. They are an actual tangible thing that tells you the details on how to build a building.

How does this info relate to object constructors?

```javascript
const sampleObject = new Object()
```

I just used the Class for `Object` (the initial Object that came free out the box) and used the keyword `new` to replicate a new version of the class. Therefore, we got a new object.

If this is confusing, it's cool. We'll pass this again and often.

##### Object Literal Syntax AKA Object Initializer

```javascript
const myDog = {};
```

I've just created a brand new blank object using object literal notation and set it to a variable called myDog.

*Remember, use `const` when creating a new varaible for the first time. This is SUPER important to prevent polluting global scope and taming the javascript beast!

-----
BONUS CONTENT

##### Constructor Function
Constructors are SUPER Important and we'll most likely have to cover this topic again.

- The constructor function is used in conjunction with the keyword `new` to instantiate new objects of a specified type.
	- Think of it as a blueprint.
	- You can use the keyword `new` to instantiate (create an instance, kinda like how in Star trek they materialize new food out of thin air) of the specified constructor.
- The constructor is a function
- The name of the constructor function should always be Capital

```
function Dog(name, breed) {
	this.name = name,
	this.breed = breed
};

const andrewsDog = new Dog("Sammi", "Maltese");
console.log(andrewsDog);
```

RECAP:
- The constructor is a blueprint. You use it create instances of new objects of that blueprint.
- `this` this is a keyword that we will teach again. It basically refers to the current scope and context of where that code is being executed in runtime.
- `new` this is a keyword used along with constructor functions to create new instances modelled off the blueprint.

-----

##### Object.create
You can also call the create function off the base Class of Object.

```javascript
const Car = {
	model: "Juke",
	year: 2012
}

const myCar = Object.create(Car);
```

### Objects Methods
As we've said before, the value of a property can be anything in JavaScript, means we can also attach functions to objects properties. When a function is attached to a property, this function becomes a method. Methods are defined the exact same way as a function, except that they have to be defined as the property of an object.

```javascript
const myCar = {
	model: "A4",
	make: "Audi",
	color: "Very Black",
	vroom: function() {
		console.log('VROOM VROOM!');
	}
};

console.log(myCar);
myCar.vroom();
```

### Iterating over keys of an object
Let's create a function that can iterate over an object's keys.

Let's start by creating an object with a bunch of attributes...
```javascript
const andrewsDog = {
	name: "Sammi",
	nickname1: "Betch",
	nickname2: "Doge",
	favoriteFood: "Salmon",
	favoriteToys: "Hand puppets",
	breed: "Maltese",
	age: 13
};
```

```javascript
const showMeKeys = function(object) {
	for(let i in object) {
		console.log(i);
	}
}

showMeKeys(andrewsDog);
```

##### Exercise
- Create a function called "showMeValues" that takes an object as a parameter.
- It should iterate through all the attributes in the object and console.log all the values.
- Invoke your showMeValues with andrewsDog to test that it works!

### Resources:
[MDN JS Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)