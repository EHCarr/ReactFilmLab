## LAB

### Team Leader
1. Create an empty GitHub repo
1. Locally, `mkdir project_folder_name` then `cd` && `git init` 
1. Locally, `git remote add <git url>`. 
1. Confirm this with `git remote -v`
1. Create file(s) and `git add -A` then `git commit -m '<relevant message>'`
1. `git push origin master` push to repo master branch
1. `git checkout -b yourname-dev` to create dev branch and checkout to dev branch
1. Create a new file and `git add -A` then `git commit -m '<relevant message>'` 
1. `git push origin yourname-dev`
1. If you have a pull request pending, view the request and merge if and only if the code is perfect
1. `git checkout master` then `git merge dev`

<br>

### Teammates
1. Fork and clone team leader's repo i.e. `git clone <your forked git repo url>`. This will be your `origin`
3. run `git remote add upstream <team leader git url>`
2. run `git checkout -b yourname-dev` to create a dev branch
4. Create a new file (e.g.- `name.html`) and `git add -A` then `git commit -m '<relevant message>'` 
4. Run `git push origin yourname-dev`
5. Send a pull request to team leader
6. The team leader merges the code to master.
7. Switch back to your master branch.
8. Run `git pull upstream master` to get current version from team leader locally. Your local master branch should now be up to date with the upstream master.
9. `git checkout yourname-dev`
10. `git merge master` will merge the latest version of the code to your dev branch.
