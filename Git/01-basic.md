# Installing
## Download
<https://git-scm.com/downloads>

## Start git-bash from Powershell
Edit the system environment variables, add the folder where Git is installed into PATH

# Commands
## help
`git -h`
`git help <command name>`

## init
Create a new Git repository or re initialize an existing one
`git init`

## add
Add content into the index
`git add *`
`git add <file path>`

## commit
Commit current content in the index into repository
`git commit -m "commit message"`

## log
Show commit log
`git log --pretty=oneline`

## diff
1. Compare the index and the files on the filesystem
`git diff`
2. Compare the index and the local repository
`git diff --cached`
3. Compare the files on the filesystem and the local repository
`git diff HEAD`
4. Compare two commits
`git diff <commit id 1> <commit id 2>`

## restore
### Restore the files on the filesystem
1. If the index and the local repos are same
`git restore *`
2. If the index and the local repos are differ
`git restore --source=HEAD --staged --worktree *`
or
`git checkout <main> *`
### Restore the index
`git restore --staged *`

## reset
Check current branch
`git branch`
Reset current branch to a commit
`git reset <a commit id>`


## branch
1. List all branches
`git branch`
2. Create a new branch
`git branch <new branch name>`
3. Delete a branch
`git branch -D <branch name>`
4. Switch to a branch
`git switch <branch name>`
or
`git checkout <branch name>`

## merge
Merge a branch into the current branch
`git switch <target branch>`
`git merge <source branch>`