### The Basics
- Sublime 3 Text Editor. You can also use Atom but you will be responsible for updating, installing, configuring packages on atom on your own. 


### Basic Sublime Set Up
- Drag sublime (from the Application Folder) into your toolbar, right click and lock it into your dock.
- Open sublime -> View -> Show sidebar
	This feature alone will save you hundreds of hours if not thousands throughout your journey. No joke.

### Symlink Sublime
Let's set up a symbolic link to sublime so we can access it through a quick command in terminal.

There's a few ways to do this based on each students' individual laptop user/admin privilege settings. 

First Command
- Close sublime.
- Open terminal
- type `cd` and hit enter, this will take you to your laptops root directory
- copy paste the following...DO NOT HIT ENTER YET
	`ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl`
- Check that the copy paste is correct, then hit enter
- type in `subl .` into terminal and hit enter. If that opens sublime, you're good to go.
- if that didn't work, try typing `sublime` to open it through terminal. If that works, always remember you need to type it as 'sublime' in your case, and not 'subl'

2nd Command
`ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime`

### Git
- confirm git is installed by typing `git` into terminal.

### Setting sublime as the global core editor for GIT
- inside terminal, run the following...
```git config --global core.editor subl```

### GitHub - Fork your repo on remote
• Make sure you are logged into your github account.
• Open this link, also make sure you bookmark it, you'll be checking it daily.
[https://github.com/gc-swim/main](https://github.com/gc-swim/main)
• On the top right, click `fork` button.
• You know you did it correctly if you're page is refreshed to YOUR github account's fork. It should look something like this...

ex: `alee90/gc-swim` under it, it will also say `forked from gc-swim/main`


### GitHub - Clone your forked repo into your local
• From your fork, right click and copy the highlighted text next to your SSH
  ![SSH](ssh.png)
• Open up Terminal
• Make sure you are in your root/home directory (the folder you named your computer)
  - Type `cd` and hit `enter`
• Type the following into terminal when you are in your home directory, do not hit enter yet!
  - `git clone ` _paste your ssh_  Make sure there is a space between `clone` and the ssh you are pasting
	- ex: `git clone git@github.com:alee90/main.git`
• You should now see the main folder on your computer.


### GitHub - Set Up Your Upstream Remote
- CD into your main folder
- Confirm you are in the right place
	- `ls -la`
	- It should return back the contents of the Omega Supreme folder
- `git remote add upstream git@github.com:gc-swim/main.git`
- Confirm everything is good...
	- `git remote`
	- You should see both `origin` and `upstream`
