## CSS - An Introduction

### Learning Objectives

Students will be able to...

- Install css onto html files
- Traverse the DOM and verify CSS
- Explain specificity
- Add basic css properties and attributes

### Pre-DO NOW

[https://packagecontrol.io/packages/View%20In%20Browser](https://packagecontrol.io/packages/View%20In%20Browser)

Go to this site and follow the directions r.e. opening your html files to chrome

### DO NOW
If you don't know the syntax for how to use one of these tags, what should you first do?  Hint: interweb
- h1 header with content "Welcome to Me!"
- h6 with your full name as the content
- p tag which includes 3 sentences each about a food you like.
	- insert br's to break each sentence up into separate lines within the lone p tag
- store the entire p tag in a div
- create an a tag to `www.nfl.com`
- create an img tag with src set to something from google images (pic files end as .jpg/.jpeg/.png)
- create a link to `www.giants.com` where the link is actually an image from above. Hint. [http://www.echoecho.com/htmllinks06.htm](http://www.echoecho.com/htmllinks06.htm)

### DOM
Document Object Model. The DOM is a nice way of viewing and manipulating HTML dynamically. You don't have to know what that means. We'll talk much more in depth about DOM very soon but today let's get a sneak peak at how to look at the HTML of every webpage.

- Go to www.nytimes.com
- Right click (double-tap) on the page
- Inspect an element
- view page source


### How to add CSS link tag to HTML file
External Style Sheet: Include the link tag using a relative path (a file path)

```
<head>
	<link rel="stylesheet" type="text/css" href="where the file is located">
</head>
```
Internal Style Sheet: Put styling directly in head tag

```
<head>
	<style>
		p {
			color: blue;
      font-size: 20px;
      }
  </style>
</head>
```

Inline Style Sheet:   

```<p style="color:green;font-size:40px">This is a paragraph</p>``` 

### Specificity 

The reason CSS refers to a "cascade" is because styles have a specific order they're applied in - different levels of Specificity.  Where we define the styles and the selectors we use determine how the styling is applied to the DOM.

#### Hierarchy / level of importance goes from
1. Inline 
2. ID
3. Class
4. Element 

### Selection in CSS
- Multiple selectors ```h1, h2```
- Ancestors/Descendants ```footer li```
- ids
- classes 

- To target elements with an id use "#"
- To target one or more elements with the same class use "."
- To target any element that is a specific tag just type the tag name.

### Properties or CSS Attributes
1. color (name/values)- can be determined using Hex code / rgb / rgba
1. background (color/image)
1. font-size
1. font-family: 
	- "Times New Roman", Georgia, Serif
1. text-align


=========================================

### IDs vs Classes

#### ID's
========

Let's say, you have something like this.

```
<body>
	<p>Hello</p>
	<p>I like Kit Kats</p>
</body>
```

What if I want the FIRST paragraph to be RED, and the SECOND paragraph to be BLUE.

I can't just go to my CSS and do...

```
p {
	color: red;
}
```

We could just inline style, but what if we want more paragraphs to be blue, and red?

What we do here is declare ID and class.

ex.
---
```
<body>
	<p id="red">Hello</p>
	<p id="blue">I like Kit Kats</p>
</body>
```

Inside our CSS page, we declare ID with a # before it.  

So..

```
#red{
	color: red;
}

#blue{
	color: blue;
}
```

REMEMBER: id's are realistically used to only name ONE element in a page.  Naming conventions are VERY IMPORTANT AS WELL.  Make sure your spelling is correct when you're trying to use id's.

#### CLASSES
=========
```
<body>
	<p class="red">Hello</p>
	<p class="blue">I like Kit Kats</p>
</body>
```

```
.red{
	color: red;
}

.blue{
	color: blue;
}
```

When we name CLASS in our CSS, know that it's with a period.  The difference between ID and CLASS right now is small.  For now, I want you to get used to the idea of using ID first.  If you have to reuse the name for some reason, change it to class.  You can use either/or throughout your page, it doesn't really matter too much.


### Combining tag name, id, and class in CSS selectors

Tag with Class Name ```article.important```

Similarly Id with Class ```#special-section.important```

Multiple Classes ```.important.active```

This is redunant code because there is only one id on the page.  
```div#special-section{...}```


### Examples

Create a new folder.  Open Sublime and save an HTML and CSS file in that folder.  Show me when you'd need to use id/class, or if I want to adjust the whole entire tag as a whole.  Use your brains and think about what I'm asking for.

1. I want to see 3 paragraphs.  They should ALL have a size of 14px. 

2. Give each of these paragraphs different text colors.

3. The body should have a background color of papayawhip (it's a color!).

4. The MIDDLE paragraph should have a border of 1px solid black.  

5. Add two different h1 to the top of your page.  Fill in the text with whatever you'd like.

6. The FIRST h1 should have the SAME TEXT COLOR that your FIRST PARAGRAPH has.  Show me an efficient way of achieving this task.

7. The SECOND h1 should have the SAME TEXT COLOR that your THIRD PARAGRAPH has.

BONUS. (USE GOOGLE IF YOU NEED HELP)
-------------

8. Find a picture from the internet and link it to your page.  Write an ID that sets the HEIGHT to 300px, and the WIDTH to 300px.

9. Add a hyperlink to the page.  On HOVER, the link should change colors to ORANGE.

10. Look up how to add a GOOGLE FONT to your page.  Change the font family of your entire page to your chosen font.
	
