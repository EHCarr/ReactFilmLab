## LAB

### Team Leader
1. Create an empty GitHub repo
1. Locally, `mkdir project_folder_name` then `cd` && `git init` 
1. Locally, `git remote add origin <git url>`. 
1. Confirm this with `git remote -v`
1. Create file(s) and `git add -A` then `git commit -m '<relevant message>'`
1. `git push origin master` push to repo master branch
1. `git checkout -b yourname-dev` to create dev branch and checkout to dev branch
1. Create a new file and `git add -A` then `git commit -m '<relevant message>'` 
1. `git push origin yourname-dev`
1. If you have a pull request pending, view the request and merge if and only if the code is perfect
1. `git checkout master` then `git merge dev` (as a last step if you want to merge all the code with your master branch locally)

<br>

### Teammates
1. Fork and clone team leader's repo i.e. `git clone <your forked git repo url>`. This will be your `origin`
3. run `git remote add upstream <team leader git url>`
2. run `git checkout -b yourname-dev` to create a dev branch
4. Create a new file (e.g.- `name.html`) and `git add -A` then `git commit -m '<relevant message>'` 
4. Run `git push origin yourname-dev`
5. Send a pull request to team leader
6. The team leader merges the code to dev branch.
7. Run `git pull upstream dev` to get current version from team leader locally. Your local dev branch should now be up to date with the upstream dev.
