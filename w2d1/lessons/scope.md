# Scope

### Learning Objectives
- Explain what scope is
- Discuss global and local scope
- Discuss the difference between public and private scope

### Why This is Important
- JavaScript has a number of unique characteristics regarding scope that can often times lead to frustration or confusion without a proper understanding.
	- If you can master scope, you can master JavaScript
- Understanding scope is essential to understanding and dictating how variables interact with the rest of your code.
- Can't stay DRY (Don't Repeat Yourself) without functions. Functions are first class objects in JS aka, they create scope.

### How We Will Learn This
- Discuss scope and diagram examples
- See scope first hand with our code

### Scope
Scope refers to the context of your code. They can be global or local.

Functions are first class objects in JavaScript. Each function creates its own scope!

Diagram scope using global circle. Inside can access outside, but outside can't access inside.

##### Global Scope
- Think of global scope as the all encompassing environment in which the instance of JavaScript is running.
- Variables that get declared outside a function have Global Scope.

##### Local Scope / Function scope
- Local scope refers to any scope that is defined right past the global one. If you define a function, this function will have its own scope inside the body of the function. Any function defined inside another function has a also a local scope and can refer to the parent scope, but this logic doesn't work the other way around.

Recap:
- Variables declared inside a function are local to that scope. They can only be accessed inside the function.
- JavaScript only creates new scopes with functions. Loops & conditionals for instance do not create new scope.


```javascript
const sayMessage = function() {
    const message = "Goodbye";
    return message;
}

message;
```

Note that referring to `message` brings up an undefined error. The variable `message`...
1. Was never set in global scope, so it doesn't exist in global scope.
2. Was created inside the `sayMessage` function. So you can refer to it inside that function/local scope.
3. Inside can read outside but outside cannot read inside.

```javascript
const superFunction = function() {
  const name = "Andrew";
  var makeMeCool = function() {
   return name + " is cool!";
  }

  console.log(makeMeCool());
}
```

##### Another Demo
```javascript
// Global Scope
const a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
  return a + " " + name;
}

sayHello("Wassup");
```

```javascript
const a = 1;

function getScore () {
  const b = 2,
  c = 3;

  function add() {
  	return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

##### Exercise
```javascript
const name = "Andrew";
const scope1 = function() {
  const age = 7;
  const scope2 = function() {
    // Something something something
    const scope3 = function() {
      // Other stuff
    }
  }
}
```

- Can I access age in scope1?
- Can I access name in scope2?
- Can scope3 access age?
- Can I access age in global scope?
- Diagram the scope for the following...

```javascript
const brand = "Chevy";
const car = function() {
  console.log("Car");
  const color = "Green";
  const suv = function() {
    console.log("SUV");
  };
  const sedan = function() {
    console.log("Sedan");
  };
}
```


### Don't Pollute Global Scope
- Gives users access to hack your browser
- Makes collaborative coding liable to break as others can accidentally manipulate external logic


##### const/let
Reminder: use const by default, use let if the variable will be redefined later in the JS.
const/let are keywords to instantiate a variable only in that scope.
- using const/let in global scope makes the variable accessible everywhere
- not using the keyword const/let: if the variable doesn't exit, it will create it.
	- if the variable already exists anywhere in the accessible scope (inside can access outside) it will use the outside one instead of creating a new one.
	- This is very bad as it can allow yourself or others to manipulate code outside it's intended functionality!


-----

### [BONUS] Additional Reading
Today's lecture covers a practical approach to scope. However, there's a lot more at play. To learn more about the nature of JavaScript at a lower level, feel free to read up on the following.


#### Compilation

The code that you write *must* first be translated into a form that the computer can understand.

Your source code should be _human readable_. However, this source code must then be translated into a set of 1's and 0's that a computer's CPU can understand.

The CPU is a chip on the computer that does all the processing. It's called the _Central Processing Unit_, or CPU.

`Source Code`  ==>  `1's and 0's`

Alternatively, the source code may be translated into a another type of language called _byte code_, which can be understood by a Virtual Machine(VM).

`Source Code` ==> `byte code`

#### Compiled Languages

Some languages are *explicitly* compiled. In other words, the programmer must run particular commands to invoke compilation.

For example, the **C** and **C++** languages are explicitly compiled. The programmer must run a command like:

`gcc -o hello_world -c hello_world.c`

This is done to translate the C code in the hello_world.c file into an *executable* or *binary* file that contains the 1's and 0's understood by the CPU.

*gcc* is a **C** compiler.

So here's what happens:

`Source Code`  ==>  `1's and 0's`

`hello_world.c`  ==>  `hello_world`

#### Interpreted Languages
Some languages don't require the programmer to explicitly run a compiler. **JavaScript**, **Java**, **Ruby** are a couple of these _interpreted languages_.

There is still compilation being done, but it's done automatically.

`Source Code` ==> `byte code`

#### From Source to Running Code.
There are two basic phases to go through when going from code in a file to a program running.

- **Compile Time** - a phase when the source code is translated to another form. For example, when we run a javascript program we will compile javascript to an intermediate language/byte code that the JavaScript Virtual Machine(VM) understands.

- **Runtime** - a phase when the computer actually runs each statement in the program.  For example, this is when the computer runs the javascript program byte code.

#### Variable Scope

The variable scope describes where in a program a variable can be seen. In other words, where it can be used. We'll see more later, but you've seen that variables declared within a function cannot be seen or used in the Global Scope.

#### Lexical Analysis

Part of the Compilation phase is _Lexical Analysis_. In general, Lexical Analysis scans through the source code, one character at a time, looking for language constructs like variables, functions, built-in keywords, etc.

It's during this time that the compiler builds variable scope and **declares** variables inside a variable scope.

Here's a quick summary of what your computer does when you're looking to run your JavaScript file:

	1. Read the Source Code in a JavaScript file into memory
	2. Compile the source code
		a. Lexical Analysis
		b. Build Scope
		c. Turn source code into a form understood by VM, byte code
	3. Execute byte code

## Building Scope

Scope is built during the Lexical Analysis part of the Compilation phase. When scope is built during this phase it's called **Lexical Scope**. This is very common in many programming languages.

Let's see how it works. Here's the code we'll work with:


```javascript
const firstName = 'John'; // 1
const lastName = 'Dowd'; // 2
const age = 19; // 3

function displayPerson(fname, lname){ //4, 5
  const prefix = 'Mr'; // 6
  const fullName = null; // 6

  function getFullName(){ // 7
    const suffix = "Esq.";  // Everybody's a lawyer, eh.
    return  fullName = prefix + " " + fname + " " + lname + " " + suffix;
  };

  return getFullName();
};

function removeYears(){ // 8
  const minusYears = 10, age = 49;
  return age - minusYears;
};

console.log(displayPerson(firstName, lastName));
console.log(removeYears());

```

We pass the source code on to it's Javascript VM. Then, the VM will run do a Lexical Analysis of this source and build Variable Scope as described in the following steps:

1. Found 'const firstName' variable declaration.  
Put firstName variable in Global Scope.  
2. Found 'const lastName' variable declaration.  
Put lastName in Global Scope.  
3. Found 'const age' variable declaration.  
Put age in Global Scope.  
4. Found 'const displayPerson' declaration.  
Put age in displayPerson in Global Scope.

  - Notice that displayPerson's value is a function. So, create a inner scope and process this function.

5. Found the firstName and lastName declarations.

   > Note: functions arguments behave just like local variables.  Put them in the displayPerson function scope.  

6. Found prefix, fullName variable declarations.  
Put them in the displayPerson function scope.  
7. Found getFullName declaration.  
Put getFullName in the displayPerson function scope.

 - Notice that getFullName is a function. So, create an inner scope and  process this function.
 - All done with getFullName function, no more variable declarations.
 - All done with displayPerson function, no more variable declarations.

![Scope](https://i.imgur.com/Ex9a0qB.png)

8. Found removeYears variable declaration.
Put removeYears in Global scope.  

**Notice that removeYears value is a function. So, create a inner scope and process this function.**

9. Found age and minusYears variable declarations.  
Put these in the function's scope.

![](https://i.imgur.com/cA6kaw5.png)