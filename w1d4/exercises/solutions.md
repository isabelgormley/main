1. solution

const numKids  = 5;
const partner  = 'David Beckham';
const geoLocation = 'Costa Rica';
const jobTitle = 'web developer';

const future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
console.log(future);

2. solution

const birthYear = 1984;
const futureYear  = 2012;
const age  = futureYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

3. solution

const age = 28;
const maxAge = 100;
const numPerDay = 2;
const totalNeeded = (numPerDay * 365) * (maxAge - age);
const message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
console.log(message);

4. solution

const radius = 3;
const circumference = Math.PI * 2*radius;
console.log('The circumference is ' + circumference);
const area = Math.PI * radius*radius;
console.log('The area is ' + area);

5. solution

const celsius = 30;
const celsiusInF = (celsius * 9) / 5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
const fahrenheit = 20;
const fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');