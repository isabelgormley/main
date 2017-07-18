/*const x = 7;

let y = 7;
y = 8;

let z = 9;
const a = z;

console.log(x);
console.log(y);
console.log(a);*/

/*let firstVariable = "Hello World";
firstVariable = 9;
let secondVariable = firstVariable;
secondVariable = "fuck coding";
console.log(firstVariable);*/

/*const yourName = 'Isabel';
console.log("Hello, my name is " + yourName);*/

/*var bump = true;
var grind = true;
bump = grind;
true = bump && true = grind;
bump !== false;
bump == grind;
true = bump OR true = grind;
bump !== true;*/

/*function multiplication(x,y){
	const final = x * y;
	return final;
}
const answer = multiplication(5,4);
alert(answer);*/

/*let x = 0;
while (x < 5){
	console.log(x);
	x = x + 1;
}*/

/*for (let current = 100; current < 200; current++){
	console.log('Testing '+current);
	if (current % 7 == 0) {
		console.log('Found it!' + current);
		break;
	}
}*/

/*for (let current = 0; current < 21; current ++){
	console.log('Testing '+current);
	if (current % 2 == 0) {
		console.log(current + ' is even');
	}
	else {
		console.log(current + ' is odd');
	}
}*/

/*for (let current = 0; current < 11; current ++){
	const answer = current * 9;
	console.log(current + '* 9 = '+ answer);
}*/

/*for (let x = 0; x <= 10; x ++){
	let multiplier = x;
	for(let i = 0; i <=10; i++){
	const result = multiplier * i;
	console.log(multiplier + " * " + i + " = " + result);
}
}*/

/*function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}
for (let x = 66; x <= 100; x ++){
	const answer = assignGrade(x);
	console.log("For "+ x + ", you get an "+ answer);
}*/

/*const sadThings = ['swimming', 'coding (right now)', 'dead puppies', 'school'];
for (let i = 0; i < sadThings.length; i ++){
	console.log(sadThings[i]);
}*/

const faveFoods = ['black beans', 'pizza','cupcakes','brownies','broccoli' ];
for (let i = 0; i <faveFoods.length; i ++){
	console.log('My ' + (i+1) +'st favorite food is ' + faveFoods[i]);
}