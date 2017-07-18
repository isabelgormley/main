# Object Oriented Programming

<a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/">Online Resource!</a>

### Learning Objectives
- Strengthen our grasp on objects & functions
- Describe OOP
- Exercise basic OOP design

### Why This Is Important
1. More reps will strengthen our command of JS
2. OOP is a huge topic and introducing it in small increments will really help start to understand the design principle.

### How We Will Learn This
- A very light intro to OOP
- Reps and reps and reps

### Object Orient Programming
```
There is no 1 right way of doing things...just a million wrong ways.

- Andrew attempting to explain his career choices...
```

Part of this field that is simply beautifully frustrating and brilliant is the duality between adhering to sound, technical, absolute logical truths and balancing the opposite trait that there is certainly an art to how we compose these cold hard logical instructions.

As programs become complex, we make numerous decisions and exercise all sorts of opinions, preferences, etc. Some out of habit, some out of experience, some out of paranoia, performance, readability, scaleability, etc.

Each decision brings us towards unique creations that make collaboration and maintanence even tougher. Design patterns are disciplines towards how programmers can structure the overall design and strategies to creating applications in a more uniform, consistent method.

Like all tools, I fundamentally believe there are tools that are better suited for different tasks, but rarely are there tools that best for everything and everyone in every situation.

OOP is a design pattern that fundamentally addresses how to write logic based on what objects we want to manipulate rather than the logic required to manipulate them.

Sounds kinda abstract off the bat but let's work into this slowly.

### Data Modeling

I want to make an app that manages car rental businesses. What type of info does my app need to support? Let's go indepth into this scenario.

- locations
- cars
- renters
- etc...

##### Data Organization
The moment we start to look at problems in a data oriented fashion, it's easy to be overloaded with data. 

renter's first name, car's model, location's address, location's cars on hand, renter's address, renter's last name, color of car, car's make, car's model, renter's dob, renter's CC, location's hours of operation, etc...

Imagine trying to store this into arrays. What problems do we come across?

array1 = [renter's first name, renter's last name, renters date of birth]
array2 = [car's model, car's make, car's year, car's color]

What if we need multiple renters, multiple cars. What if we have 50 car arrays then one car gets destroyed, we also buy 5 new cars. How can we keep dealing with all these sets of data without constantly repeating ourselves and dealing with issues of scale?

Let's start by organizing data based on logical context.

- cars
	- make
	- model
	- year
	- miles
	- color

- renters
	- firstname
	- lastname
	- dob
	- address
	- cc number

```javascript
const car1 = {
    make: 'Honda',
    model: 'Civic',
    year: '2016',
    color: 'blue'
}

console.log(car1);
```

##### Exercise 1
- Make a variable called car2 and fill it with any dummy data you want and console log the object.
- Make a variable called renter1 and fill it in with k/v pairs for the attributes listed above, console log it.

Now that we see the value in storing data as objects, how can we use functions to enhance actual program design?

#### Exercise 2
Let's build a simple game together using objects and functions.

##### Create Andrew
```javascript
const andrew = {
	heath: 100,
	attack_damage: 9001,
	alive: true
}
```

##### Create Monster
```javascript
const monster = {
	name: "Monster McMonsterface",
	health: 100,
	attack_damage: 10,
	alive: true
}
```

##### Adding functions
Let's start by adding a function purely for testing purposes...

Add a function called attack to the andrew object that will console log him attacking and state the amount of damage he will do.

```javascript
const andrew = {
	health: 100,
	attackDamage: 9001,
	alive: true,
	attack: function() {
		console.log("Andrew is attacking and does " + this.attackDamage + " damage!");
	}
}

andrew.attack();
```

Notice I have to use the keyword `this` when referencing attackDamage. Why is that? Well there's something called Scope which we'll cover later, but basically functions are first class objects in JavaScript.

This means that each function create's it's own level of scope. More on this later. But for now, the keyword `this` helps us identify that I'm refering to the andrew object.

The function itself is set as a value to the `attack` key, but there is no global variable for `attackDamage`.

However, the keyword `this` let's JavaScript know that I'm not trying to access a variable called `attackDamage` in global scope, I'm looking for a variable called `attackDamage` inside the current andrew object. 

Once I can properly access the `attackDamage` variable, I concatenate that integer to my strings, add some white spaces for proper grammer, and now my `attack` function works.

##### Alternative
The keyword `this` is confusing, is it the only way to make this work? No, but introducing `this` is really important. It can make your life much easier next week.

But as promised, there's always another way...

```javascript
const andrew = {
	health: 100,
	attackDamage: 9001,
	alive: true,
	attack: function(damage) {
		console.log("Andrew is attacking and does " + damage + " damage!");
	}
}

andrew.attack(andrew.attackDamage);
```

##### Attacking the monster

```javascript
const monster = {
	name: "Monster McMonsterface",
	health: 100,
	attack_damage: 10,
	alive: true
}

const andrew = {
	health: 100,
	attackDamage: 9001,
	alive: true,
	attack: function(enemy) {
		enemy.health = enemy.health - this.attackDamage;
		console.log("Andrew is attacking " + enemy.name);
		console.log(enemy.name + " now has " + enemy.health)
	}
}

andrew.attack(monster);
```

##### Your turn
- Write a function inside the monster object that will check if the monster's health is less than 0, if so, change the monster's `alive` to false.
- Hint: Use the keyword `this`


### Recap
This was actually quite a lot to take in. That's why we'll be making multiple passes on these concepts.

Let's work on the following...

##### Exercise Set 1
- Create 5 blank objects.
- Set each object to a variable named after an animal
	ex: `var chicken, var dog, etc`
- Add a name k/v pair to each object (feel free to use any names you want)
- Each animal should have a function that console.log's a noise they make (ex: dog's bark)
- Invoke each object's noise function

##### Exercise Set 2
Refer back to our car and renters example and let's preview the idea of relations.
- Add a k/v pair to a renter with the key `assignedCar` set to the value `null`
- Access the renter and set `assignedCar` to any car object you've created.
- Console log the renter.assignedCar


### Resources
[OOP in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
