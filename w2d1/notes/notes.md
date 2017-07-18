## Notes

### OPERATORS:

USEFUL OPERATORS: ===, !

Use triple equals to check for equality

3 === 3
	--> true
"3" === 3
	--> false

Whereas with == we get weirder results:
"3" == 3
	--> true

For good visualization of this weirdness, see
<a href="https://dorey.github.io/JavaScript-Equality-Table/">THIS</a>


! negates:
!true
	--> false
!false
	--> true
!!true
	--> true
etc

### Conditionals:

#### IF

```
const x = 5;

if (x<0){
	alert('I am a big number');
} else if (x>0 && x <=5){
	alert('I am the right number');
} else {
	alert ('What is going on');
}
```