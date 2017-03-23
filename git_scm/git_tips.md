# Git Tips

## 1. Setup Username and Email
Ensure that Git is setup to use your email address in the ~/.gitconfig file. You can do this from the command line:

```sh
git config --global user.name "Your Name"
git config --global user.email "your_email@mail.com”

# Optionally configure Git on OS X to properly handle line endings
git config --global core.autocrlf input
```

Likewise, in your GitHub account email settings, add your email. This step ensures that Git commits you make directly on GitHub.com (such as quick documentation fixes) and merges made via the ‘big green button’ have proper authorship metadata.

## 2. Bash Prompt and Auto-completion (optional)
Run the following to create `~/.git-completion.bash` and `~/.git-prompt.sh`:

```sh
curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash > ~/.git-completion.bash
curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh > ~/.git-prompt.sh
```

Then add the following to your `~/.bashrc` or `~/.bash_profile` after `PATH`:

```sh
# Set the base PS1
export PS1="\t: \W$ "

# Source the git bash completion file
if [ -f ~/.git-completion.bash ]; then
    source ~/.git-completion.bash
    source ~/.git-prompt.sh
    PS1='[\u@\h \W$(__git_ps1 " (%s)")]\$ '
fi

export PS1
```

This will display the branch name next to the folder name in the bash prompt.

## 3. Git Branch Managment
### 3.1. Checkout a Remote Branch
We create a branch in GitHub first thus it's necessary to checkout the remote branch. 

```sh
git fetch
git checkout feature-branch
```

If there are more than one remotes, use the following commands to checkout a branch from `origin`. For other remote, replace the `origin` with a remote name. 
```sh
git fetch origin
git checkout feature-branch origin/feature-branch
```

To sync with remote branches, use `git fetch -p`. It happens when someone deletes a branch thus you don't delete it again. 

