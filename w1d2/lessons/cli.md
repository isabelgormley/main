# Terminal Basics & Navigating the File System

===== LAPTOPS CLOSED =====

### Learning Objectives
- Open apps and navigate your cpu through terminal
- Summarize basic file system structure
- Explain the difference between relative and absolute pathing
- Open files using our text editor

##### Why this is important
Most users are accustomed to interacting with computers using GUI's (Graphical User Interfaces), however all computer interactions can be accessed through the command line/terminal. 

Many devs utilize the command line everyday to interact with applications efficiently and directly so it's essential to master the very basic terminal commands along with a sound grasp on basic file system.

##### How we will learn this
- Practice with CLI (Command Line Interface) commands
- Discuss pathing

### What is a shell?
shell is simply a type of command line program, which contains a very simple, text-based user interface enabling us to access all of an operating system's services. It is, very simply, a program that accepts text as input and translates that text into the appropriate functions that you want your computer to run

===== Open Laptops =====


### Terminal
- Launch the command prompt off terminal.
	- ⌘ (Command) + Space
	- "*Terminal"
	- `Enter`

- Since we'll be using terminal often, I strongly suggest you keep it locked in your dock.
	- Right click on the icon, highlight options, ensure the "Keep in Dock" is checked.

- When terminal launches, it will innately start off your computer's root directory (whatever you named your computer).

### CLI Commands
- Check where you are on your command line
`pwd` : print working directory

- Let's open another tab inside our terminal
`⌘-T`

- Close current tab
`⌘-W`

- Let's execute a process from our terminal. Let's use the ping utility for example sake...

`ping 127.0.0.1`

```
Q: What is ping?
```
Break into groups of 2 (3 if you're cool and don't like the idea of people being left out).

Research the following together and describe to another what ping is a practical sense. Be prepared to explain it to the class.
[What is ping?](https://en.wikipedia.org/wiki/Ping_(networking_utility))

-----

- Note that ping continues to run, we can stop the execution of a process off our current tab...
`Ctrl-C`

- Let's quit terminal
`⌘-Q`

##### Exercise 10 mins
- Work in pairs. If someone does not have a partner, please feel free to work in a small group of 3!
- Using just terminal and the command line, do the following.
- If you don't recall all of the prework or see unfamiliar commands feel free to use the following reference and/or Google!

[CLI Cheatsheet](http://www.git-tower.com/blog/command-line-cheat-sheet/)

- Open Terminal
- PWD to confirm you're in your root
- If you're not in your root, `cd` to get there.
- Change directory to `/Desktop`
- Make a new directory on your desktop called `sample_directory`
- Change into that directory
- Make a new file called sample_text using the following command `touch sample_text.txt`
- Make another directory called `inside_folder`
- CD into the newly created `inside_folder`
- CD out of this folder up one level using `cd ../`
- CD up another level by using `cd ../` again
- Which directory are you now in? Confirm using `pwd`

##### Best Friends
• pwd
• cd
• ls (list contents of directory)
• ls -la (detailed list of contents)
• mkdir
• touch

### Pathing
Pathing refers to method in which files/folders are recognized within a file system structure.

### Absolute Pathing
An absolute path is defined as the specific location of a file or folder from the root directory. 

The absolute path for my `music` directory would be `cd /Users/josephjung/music`

- Think of absolute pathing as the EXACT "address" for a file/folder.
- One advantage is that it can be accessed from anywhere since I am explicitly stating the exact location of the file/folder.

### Relative Pathing
A relative path is a reference to a file or folder **relative** to the current position, or the present working directory (pwd).

It's like giving directions to Central Park without mentioning a specific address. Once you go outside the building take a left and go up 10 blocks.

ex: 
My iTunes folder is located inside my music folder. If I am currently in my music folder, I can simply just reference the relative path by using `cd iTunes`.

- Advantage: Much less verbose (this is often a good thing as it means less chance of typo's but we'll talk about that again later).

- Advantage: Scaleable/flexible. If I were to use relative pathing to locate files/folders, they might still be able to work outside of just my local laptop.

ex: Let's say I write some code that uses a relative path to access the iTunes folder. That code can still work on someone else's computer/file system as long as their structure matches mine.

In other words, using an absolute path of `cd /Users/josephjung/music/iTunes' would never work on someone else's computer unless their root directory was named josephjung.

However, if I used relative path and my code made reference from within the music folder to just `cd iTunes`, that simple snippet of code could still work in a different environment as long as the folder structure matched mine. 

### $PATH aka Shell Path
You won't often deal with $PATH on a day to day basis but it's good to introduce the concept now. 

You’ll hear about _shell path_ (or $PATH) when working with the command line. The _shell path_ in OS X (or Linux) refers to a list of folders in the file system that contains files or executables that will be used by certain applications and programs.

The $PATH is useful in a way that you will not need to type to absolute path of a command if the folder where this command is contained is already in the path.