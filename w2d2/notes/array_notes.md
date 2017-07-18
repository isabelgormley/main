# Array Methods

## .sort()

The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

```
const fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

const scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

const things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
```

## .push()

The push() method adds one or more elements to the end of an array and returns the new length of the array.

```
const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

numbers.push(5, 6, 7);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
```

## .pop()

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```
const arr = [1, 2, 3];
arr.pop();

console.log(arr); // [1, 2]
```

## .find()

The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```

## .slice()

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

```
const arr = ['zero', 'one', 'two', 'three'];
const sliced = arr.slice(1, 3);

console.log(arr);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
```

## .forEach()

The forEach() method executes a provided function once for each array element.

```
const arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
```

## .splice()

The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
```
Syntax: 
```
array.splice(start);
array.splice(start, deleteCount);
array.splice(start, deleteCount, item1, item2, ...)
```

