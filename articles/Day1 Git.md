# Day 1

## **Git**
### Github, init, add, commit, push, pull, merge.

Today you must have your team with you. This tool named git will help you share your codebase between your teammates. 

[x] install git in your computer from git-scm.com
[ ] read about git basics
	- Deep: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
	- Cool: http://rogerdudler.github.io/git-guide/
[ ] all that I have given below in a better way : 
	- https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

so, as team lead (only one person in team should do this) go to a new folder in your computer and 
- create a git repo.
	```
	git init
	``` 
- add some files to it for test and also a file with name ```.gitignore```
- add the changes to stage 
	```
	git status
	git add . 
	git status
	```
- commit the changes
	```
	git commit -m "first commit"
	```
- login to your github account and create a new repository
- get the URL for your new repo
- run this in your local repo's root folder 
	```
	git remote add origin URL_HERE
	git push origin master
	```

**Other people in the team do the following**

- get the team lead to add u as contributor in the repo by asking them to open their repo on github> repo> settings> contributors> add you by your username
- you get the URL of the repo after accepting their invite to be a contributor
- go to a your workspace and run
	```
	git clone URL_HERE
	```
- make a simple change in the file or create a new file
- add the changes to stage 
	```
	git status
	git add . 
	git status
	```
- commit the changes
	```
	git commit -m "first commit"
	git push origin master
	```

Push will fail for the people who have made some changes but there are changes on the Remote repo

what you have to do then is : 

- First pull the remote changes to make your codebase updated with all new changes by the team,(imagine someone has made changes and pushed to the remote)
	```
	git pull origin master	
	```
- You will see conflicts if you and the team has changed the same files and git is unable to determine which changes to keep while merging. 
- In this case , see git status and go to files which have conflicts and merge them manually , Means settle the sonflicts , Decide what to keep and stage that file to commit and commit. 
 (I recomment using Sourcetree to manage your Git repositories it is very easy to intuite)
- after conflicts (if any) are resolved you should be able to push the code.  