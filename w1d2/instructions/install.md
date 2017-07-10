### The Basics
- Sublime 3 Text Editor. You can also use Atom but you will be responsible for updating, installing, configuring packages on atom on your own. 
	- [https://www.sublimetext.com/3](https://www.sublimetext.com/3)
	- OX X 10.7 or later
	- Open the dmg
	- Be sure to drag the icon into your Application folder. 
	- Eject the sublime text icon that is on your desktop.


### Basic Sublime Set Up
- Drag sublime (from the Application Folder) into your toolbar, right click and lock it into your dock.
- Open sublime -> View -> Show sidebar
	This feature alone will save you hundreds of hours if not thousands throughout your engineering career. No joke.

### Symlink Sublime
Let's set up a symbolic link to sublime so we can access it through a quick command in terminal.

There's a few ways to do this based on each students' individual laptop user/admin privilege settings. 

Try running these instructions first with me. If they don't work it's ok, we can run the next set together afterwards. If that doesn't work I will gladly work with you personally to get it set up.

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
	- if you get a message saying command 'git' is unknown, you are missing GIT and did not do your pre-work.

### Setting sublime as the global core editor for GIT
- inside terminal, run the following...
```git config --global core.editor subl```

### GitHub - Fork your repo on remote
• Make sure you are logged into your github account.
• Open this link, also make sure you bookmark it, you'll be checking it daily.
[https://github.com/ga-students/WDI_NYC_OMEGA_SUPREME](https://github.com/ga-students/WDI_NYC_OMEGA_SUPREME)
• On the top right, click `fork` button.
• You know you did it correctly if you're page is refreshed to YOUR github account's fork. It should look something like this...

ex: `Joe21/WDI_NYC_OMEGA_SUPREME` under it, it will also say `forked from ga-students/WDI_NYC_OMEGA_SUPREME`


### GitHub - Clone your forked repo into your local
• From your fork, right click and copy the highlighted text next to your SSH
  ![SSH](ssh.png)
• Open up Terminal
• Make sure you are in your root/home directory (the folder you named your computer)
  - Type `cd` and hit `enter`
• Type the following into terminal when you are in your home directory, do not hit enter yet!
  - `git clone ` _paste your ssh_  Make sure there is a space between `clone` and the ssh you are pasting
	- ex: `git clone git@github.com:Joe21/WDI_NYC_OMEGA_SUPREME.git`
• You should now see the Omega Supreme folder on your computer.


### GitHub - Set Up Your Upstream Remote
- CD into your main folder
- Confirm you are in the right place
	- `ls -la`
	- It should return back the contents of the Omega Supreme folder
- `git remote add upstream git@github.com:gc-swim/main.git`
- Confirm everything is good...
	- `git remote`
	- You should see both `origin` and `upstream`
