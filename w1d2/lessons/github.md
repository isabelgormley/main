# Git, Github & VCS

===== Laptops Closed =====

### Learning Objectives
- Distinguish Git & Github (local vs remote)
- Use basic git commands like init, add, commit, push, and clone
- Create, copy, & delete repo's both locally and remote
- Describe difference btwn fork and cloning a remote repo


##### Why this is important
- Working alone vs working in a team
- Working in a disfunctional team vs working in a cohesive team
- We will be using real world tools and concepts for collaborative work. The tools and concepts covered today are not only vital to your everyday learnign experience, but they will also be heavily utilized practically every engineering job (and if they aren't it means you should leave that job asap!)

Git, Github, and Version Control Systems are vital to collaborative development, in other words teamwork. Imagine if engineers could only work by themselves. We would never have bridges, tunnels, highways, skyscrapers, etc.


##### How we will learn this
- Discuss VCS, git, & github
- Perform basic git workflow
- Perform basic github workflow


### What is a Version Control System?
A system that allows collaborative, coordinated development.

- Imagine all of us working on a google doc
	- Remove all run on sentences
	- Remove all passive voice sentences
	- Fix all spelling errors in first 1/2 of doc
	- Fix all spelling errors in 2nd 1/2 of doc
	- Replace all instances of Roger to Rodger
	- etc..


###### For the next 5 minutes, work in pairs...
What controls or features would we need to make sure we don't want to kill each other?


### What is Git?
- A type of Version Control System (subversion, mercurial, etc)
- Local (your laptop)
- You can use git alone. You can use git on your computer without github


##### How to use Git Overview

1. Initialize git : Wake git up
2. Add changes : Add changes to a commit
3. Stage commits to the repo
4. Check Status
5. Useful git commands


##### Why 2 stage process to commit__
- Ability to split work into separate commits
- Don't break the build
- Commits should be context based: adding x functionality, removing y, updating z, etc.
- The 2 stage process of adding changes to commits helps you manage it before actually commiting.

#### Let's do this together

##### git init
Initializes git. You don't want git keeping track of every change everywhere. That's madness and way too much work. So when you install git, he's sleeping. Git init wakes him up.

- open terminal
- let's mess around on our desktop
	- `cd ~/Desktop` Note that the `~` is a shortcut referencing your home path.
- mkdir testing_directory
- cd testing_directory
- `git init`
- `git status` : If we didn't init git, git status would return back an error message.

##### Make changes
- Let's add a file `touch sample.txt'

##### Add changes
- `git add sample.txt`
- `git status`

##### git commit
- git commit -m "adding touch.txt"

Note that commit messages are very important. You want to be concise but these messages are collected in logs that are accessed to troubleshoot issues.

Some Devs are very snobby about the "proper" way to use commit messages. The technical standard is present tense. "Adding x, removing y, etc". I won't be strict about this in class but it doesn't hurt to follow this loose convention.

### Useful Git Commands
- `git status` shows changes that have not been committed
- `git log` shows commit history
- `git diff` show changes between commits, commit and working tree, etc
- `git config --global user.name "John Doe"` sets a name that will be attached to commits
- `git config --global user.email johndoe@example.com` sets an email that will be attached to commits
- `git add .` stages all changes (including files and folders added and removed)

[Link to Git Documentation](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

### Exercise
- Create a directory titled cookbook on your desktop
- Create 3 files within that directory (appetizers.txt, entrees.txt, desserts.txt)
- Initialize git
- Add all these files to commit
- Stage your commit to the repo
- Remove desserts.txt
- Add the change to a new commit
- Stage the new commit
- git log when complete

-----

### What is Github?
Github is a remote web service that allows you to host git repo's. This is awesome so you're codebase can be stored in a safe, 3rd party location, to be distributed across the web as needed.

### How To Use GitHub Overview
1. Make a repo on github
2. Connect it to your local
3. Get down process flow

##### How to Create a Repo
- Go to your github page `http://github.com/YOUR USER NAME`

- Click "New Repo"

![new_repo_button](https://github-images.s3.amazonaws.com/help/bootcamp/bootcamp_2_newrepo.jpg)

- Fill out the information on this page. When you're done, click "Create Repository."

  ![create_repo_page](https://github-images.s3.amazonaws.com/help/bootcamp/bootcamp_2_repoinfo.png)

- Congratulations! You have successfully created a repository!

- As of this moment, you have created a remote repo. It is not linked to your local repo on your laptop. To link them together...

- Link up your local git to the remote within your command line `git remote add origin git@github.com:YOUR USER NAME/YOUR REPO NAME.git`

##### Syntax Recap
`git remote add origin git@github.com:github-name/repository name.git`

We're telling git to add a remote named "origin" that will point to the following destination using the ssh credentials we established during installfest!

### Git & GitHub Overview
- Push changes to the remote
`git push origin master`


- Pull updates from your remote to your local
`git pull origin master`


##### Practice
Local
- create a local directory called 'super-cool-folder'
- cd into `super-cool-folder`
- touch `index.html`
- git init
- git add -A
- git commit -m "init commit"

Remote
- Create remote repo
- Add remote to your command line `git remote add origin YOUR REPO SSH"

Now that they are sync'ed up, let's push your local commits to your remote!

- `git push origin master`

### Basic Workflow Recap

**Step 1:** Create a new directory `mkdir new_directory`

**Step 2:** Move into your new directory `cd new_directory`

**Step 3:** Initialize a new repository `git init`

**Step 4:** Let's add this newly created directory to staging `git add .`

**Step 5:** Initial commit `git commit -m "init commit"`

**Step 6:** Confirm via `git status` or `git log`

**Step 7:** Write some code and add changes to staging `git add .`

**Step 8:** Commit changes to repo `git commit -m "Adding my changes"`

**Step 9:** Create a repo on Github

**Step 10:** Connect your Github Repo to your local repo `git remote add origin git@github.com:YOUR USER NAME/YOUR REPO NAME.git`

**Step 11:** Push your local repo to Github `git push origin master`

**Step 12:** Continue to add, commit, and push changes
- `git add .`
- `git commit -m "new message"`
- `git push origin master`


### Other Workflows:

##### You don't need to know branching just yet...
- Branching
	Creating individual branch of work 
	`git checkout -b branchname`
	`git checkout branchname` to switch to that branch
	`git branch` list all branches

- Pushing
	Updating to a repo
	`git push origin master` note that master is the branch name and origin is the remote name

- Pulling
	Updating from a repo
	`git pull origin master` note that master is the branch name and origin is the more name

- Forking
	Creating a remote github version of repo

- Cloning
	Copying an existing repo on github to local

-----
### RECAP FOR CLASS

• Pulling new updates that the instructors make from /gc-swim/main
	- git pull upstream master

• Pushing your new work to YOUR forked repo
	- git push origin master

