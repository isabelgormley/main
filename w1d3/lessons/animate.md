## Animation

Lesson Objectives
- Discuss transition, both conceptually and practically
- Implement basic hover + transition into our CSS
- Implement and review different types of transform.


### TRANSITION IN GENERAL

Okay, so, can anyone give me a simple explanation regarding what a transition is?


Simply, a transition is the time it takes to get to point A to point B.  We're travelling some distance over time.


Using transitions in our CSS, we are now able to dynamically change parts of our page.  No longer are things going to just "be there"... we can make things move in all sorts of directions!  Cool, right?  This is the first step towards ANIMATING our page. This kind of stuff requires a lot of research on your own, as I don't know all the different ways you can style your page.

Remember, a lot of the styling of your page RELIES IN YOU!  This is YOUR CHANCE TO BE CREATIVE.  You get to express yourselves now... are you boring, or do you have flair?  We've learned so many different ways of styling at this point - it's up to you to deliver a page that looks good.


### Hover
The key way we introduce CSS transitions is via HOVER.  

Who can tell me what hover does?

Okay, let's add some code now.

```
<body>
  <div id="box"></div>
</body>
```

```
#box{
  height: 300px;
  width: 300px;
  background-color: blue;
}
```

Right, so we just have a box that's blue, right?  

What if, on HOVER, we want the box to change its color to red?

This is how we do it.

```
#box{
  height: 300px;
  width: 300px;
  background-color: blue;
}

#box:hover{
  background-color: red;
}
```

Putting a :hover after the tag/id you're trying to change allows you to control what happens to that element after you physically hover over it.  So, we've changed the background color, right?  What about changing the height and width?

```
#box:hover{
  background-color: red;
  height: 450px;
  width: 450px;
}
```

Notice that when we do it like this, the height and width immediately changes after we hover over it, right?  What if we want a SMOOTHER TRANSITION?  

Try adding this one line to our existing code.

```
#box:hover{
  background-color: red;
  height: 450px;
  width: 450px;
  transition-duration: 3s;
}
```

Notice how there's a 3 second "transition" from point A (original box properties) to point B (box with :hover properties).

### Transform

An element can be moved around the page with ease, kind of like using positioning

An element's appearance can be changed and warped

Try to attempt these on your own!

#### Scale()

```
transform: scale(4,2);
```

This transforms the width to be 4 times its original size and the height to be 2 times its original size

#### Translate()

```
transform: translate(25px,50px);
```

This moves an element 25 pixels from the left and 50 pixels from the top.

If we have something like

```
transform: translate(a,b,x,y);
```
a = left
b = top
x = right
y = right

#### Rotate()

```
transform: rotate(30deg);
```
This rotates an element 30 degrees.

```
transform: rotate(-30deg);
```
This rotates an element -30 degrees (+330 degrees).

#### SkewX() and SkewY()

```
transform: skewX(60deg) skewY(40deg);
```
This turns the element 60 degrees on the x axis and 40 degrees around the y axis.

#### 3D Transforms

```
transform: rotateX(120deg);
```
This rotates an element 120 degrees along X axis

```
transform: rotateY(160deg);
```
This rotates an element 160 degrees along Y axis

#### Exercise

Create boxes using divs, then use these boxes to illustrate scale, translate, rotate, skew, rotateX, and rotateY CSS transforms

### Transitions

A transition changes one or many attributes of an element’s style gradually.
```
transition: width 10s;
```
The above will define the time of a transition if the width property changes, for instance if the element has a different width on :hover

Transitions can also be broken out into their component properties:
```
transition-property: background-color;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;
```

#### Transition-property

Defines the CSS property that a transition is applied to.
```
transition-property: width;
transition-property: background-color;

transition: <property> <duration> <timing-function> <delay>;
```
#### Transition-delay

Specifies how long until the transition starts
```
transition-delay: 2s;

transition: <property> <duration> <timing-function> <delay>;
```

#### Transition-duration
Specifies how long the transition will last
```
transition-duration: 2s;

transition: <property> <duration> <timing-function> <delay>;
```

#### Transition-timing-function

Specifies which “timing function” or “easing” will be used for the transition.
Possible values include ease, linear, ease-in, ease-out, ease-in-out, and cubic-bezier to define custom functions.

```
transition-timing-function: cubic-bezier(0,0,0.58, 1);
transition: <property> <duration> <timing-function> <delay>;
```

### EASINGS.NET

Check out easings.net for more examples of easing functions

### Examples

In your HTML, all you need is...

```
<body>
  <div id="box">
    <p>Hello!</p>
  </div>
</body>
```

#### ELEMENT WIDTH

```
#box{
  background-color: orange;
  width: 200px;
  height: 100px;
}
#box:hover{
  width: 400px;
  height: 100px;
}
#box{
  transition: 10s width;
}
```

#### BACKGROUND COLOR AND LINEAR EASING
```
#box{
  background-color: #CCCC33;
  width: 200px;
  height: 100px;
}
#box:hover{
  width: 400px;
  height: 100px;
  background-color: #0E0EFF;
}
#box{
  transition: background-color 4s linear;
}
```

#### BACKGROUND COLOR + WIDTH (notice how we can set multiple properties to transition, but we need to separate them via commas)

```
#box{
  background-color: #CCCC33;
  width: 200px;
  height: 100px;
}
#box:hover{
  width: 400px;
  height: 100px;
  background-color: #0E0EFF;
}
#box{
  transition: background-color 4s linear, width 4s;
}
```
The above will set up transitions for the width property and the background-color property. linear is the type of easing, or “timing function” that will be used.

#### EXERCISE
Try building different CSS transitions on 3 different elements. Try animating the following properties:

```
background
width
padding
margin
color
```

### CSS-3 Animations

Remember when the web was covered in Macromedia Flash videos and games?
A similar effect can now be achieved with straight CSS using CSS3 animations.
These allow the use of keyframes to define the breakpoints of an animation

#### Keyframes

A keyframe is a moment that defines the starting and ending points of a smooth transition
For instance, if an object was moving to the right and to the bottom of the screen in an animation, you’d might have the following keyframes:

<img src="keyframes.jpg">

The way CSS-3 animations work: you define an animation by defining keyframes based on percentages
For instance, if your animation has a keyframe at 50% and is 6 seconds long, the animation will reach that keyframe at the 3 second mark
For animations, you may want to use a vendor prefix (-webkit-)

```
@keyframes some-keyframe {
  0% {margin-left: 0px; margin-top: 0px;}
  25% {margin-left: 50px; margin-top: 50px;}
  50% {margin-left: 50px; margin-top: 150px;}
  100% {margin-left: 200px; margin-top: 200px;}
}
```

#### Calling the animation

Now that you’ve defined keyframes for your animation, you have to call the animation on an element and define a few more options for the animation itself

#### Animation properties
```
#box{
  /*The name of your defined animation (after @keyframes)*/
  -webkit-animation-name: some-keyframe;
  /*How long the animation will run*/
  -webkit-animation-duration: 5s;
  /*Which easing/timing function to use */
  -webkit-animation-timing-function: linear;
  /*How long to wait before starting the animation*/
  -webkit-animation-delay: 2s;
  /*how many times to run it (can be infinite)*/
  -webkit-animation-iteration-count: 2;
  /*should animation play in reverse on alternate runs */
  -webkit-animation-direction: alternate;
  /*should the animation start of running or paused */
  -webkit-animation-play-state: running;
}
```

#### Example!

```
#box{
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: teal;
  border: 10px double yellow;
}

#box{
  -webkit-animation-name: roll;
  -webkit-animation-duration: 7s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
}

@keyframes roll {
  0% {
    margin-left: 0px;
    margin-top: 0px;
  }
  100% {
    margin-left: 200px; 
    margin-top: 150px;
  }
}
```

#### Exercise
Try constructing the animation illustrated on the Keyframes slide! Your element doesn’t necessarily have to be circular, but it should travel to the right and then the bottom of the screen.

<img src="keyframes.jpg">

#### YOU CAN DO SOME PRETTY CRAZY COOL THINGS WITH CSS3 ANIMATIONS.

CSS Solar System: 
http://codepen.io/juliangarnier/pen/idhuG <br>

CSS Spy Drone: 
http://codepen.io/bertanyaman/pen/YWGLJK <br>

Original Hover Effects: 
http://tympanus.net/Tutorials/OriginalHoverEffects/

