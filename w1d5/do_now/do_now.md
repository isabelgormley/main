# JS in Sublime

NOTE for this exercise, and in many docs on the web:   
When you see a $ in relation to command-line syntax, that just means to type the following command in your terminal.  Don't write the $!


#### 1. In terminal, you can tab through items in a directory. Navigate to the class 'main' repo for today using $ cd 

#### 2. In your repo:  
  
In `do_now' in w1d5, we're going to make and access a folder called startup:  
 
1.  ```mkdir startup```
2. `$ cd startup`  
  
  
#### 3. Create the files you will use:  

1. `$ touch index.html app.js`  
Creates two files at once  
  
2. `$ ls`  
To check that the two files have been made  
  
  
#### 4. While you are in the directory, type   
1. `sublime .` 
    
#### 5. Open your HTML file 

Use the shortcut to create the skeleton.
  
Write a title between title tags.
  

#### 6. Add a script between body tags   
1. `script [TAB]`

Will give you:  
`<script type="text/javascript"></script>`

2. Give the script tag a src attribute 'app.js':  
`<script type="text/javascript" src="app.js"></script>`


#### 7. Console.log a message to show that app.js has loaded:  

IN APP.JS  
1. `console.log('we are locked and loaded');`  
  
  
#### 8. Load your index.html in the browser:  
  
1. In Sublime, right click (control+click) on index.html and open in browser  
OR  
2. `$ open -a "Google Chrome" index.html` from terminal
OR
3. Use the command (ctrl-alt-c) if you had to install the package while clicked in index.html
  
  
#### 9. Open Javascript console in Chrome:  
  
1. Option + Command + J   
OR  
2. View -> Developer -> Javascript Console  
  
Verify that 'app.js locked and loaded', or whatever is in the `console.log` is on the console. Congrats! You now have a place to test javascript. You can write javascript in your app.js file and refresh your browser window to execute and monitor that javascript. 

You can also just write Javascript straight into the console. Shift+Enter will go to a new line.  Type a `console.log('wat')` directly in the console.

  
#### 10. ADDING MULTIPLE JS FILES  
  
- In the same directory, create a new file called `app2.js` 
- Add a new script tag to the bottom of your body in your index.html and reference `app2.js`  
- Add a console.log to `app2.js` that is different to the one in `app.js` 
- Refresh `index.html` and make sure both console.logs appear.
- Go into your index.html and flip the order of your script tags.  What happens? 


#### 11. ON YOUR OWN

- See how fast you can setup a folder called `bootup` with an index.html and app.js with a title and a log to the console.


#### 12. COMMIT THIS STUFF 

1. `$ git status` to see your files
2. `$ git add .`
3. `$ git commit -m "init commit"`
4. `$ git push origin master`



#### 13. Write me a function

Write a function that will take three numbers and multiply them all together, then returns the total amount, stores it in a separate variable.  I want this value to 'alert' at you... (hint hint!).  

Invoke, or execute the function from Chrome's console menu.
