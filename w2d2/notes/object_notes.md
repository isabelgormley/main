# Object Notes

## Dot Notation

```
var me = {
	name: "Andrew Lee"
}
```
## Reassign properties

```
me.age = 26;
console.log(me.age);
```

```
me.name = "Andrew McAndrewFace";
console.log(me.name);
```

## Delete

```
delete theCoolestInstructor.name;
console.log(theCoolestInstructor);
```

## Two Objects' Relationship (r.e. attacking monster, for instance)

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