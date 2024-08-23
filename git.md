// check all files
.git/

// list of hel cmd
git help / git help init (helpine for differnt cmd)

git remote add

git init -y

// check which file has been modified (not being track by git)
git status

// history of commited files
git log -n 3 --oneline

git rm --cached <filename> ( remove file from staging)
git restore --staged <filename> (remove modified files from staging)

git add .

git commit -m "message here"
git commit -a ( express commit faster without add)

git push

git branch (list of branch)
git branch <nameOfBranch> (create branch)
git branch -d <nameOfBranch> (delete)

git switch / git checkout <commitID || branchName>
git checkout <commitID> --> git checkout -b <branchName> this will branch out new commit changes to the new branch original branch no change
git revert
git merge

<b>merge method<b>
1. fast forward - can only use when there is no changes in the target branch (git merge <featureBranch>) main --> feature


// credential configuration
git config -- global user.name "yikiat"
git config -- global user.email "yikiat@hotmail"

vi ~/.gitconfig

// create file
echo "msg" >> file.js / mkdir (create folder)

git difftool <branchName> <branchName>
git mergetool
git clean  -n (show you which file will be clean) -f (will remove untracked files) <fileName/folderName> -df(will remove untrack file and folder)
git reset (dangerous than git revert)


<b>SSH key for protection<b> 
ls -l ~/.ssh (list of ssh at user directory to see if it exsit)
rm -rf ./ssh (remove all keys)

//generate SSH private and public keys//
ssh-keygen (not good no controll)
ssh-keygen -t rsa -b 4096 (no of keys) -C "<Name you want for the key>"
ssh-keygen -p (create passphrase)

//start SSH agent //
eval "$(ssh-agent -s)" (start SSH agent)
ssh-add ~/.ssh/<nameOfSSHPubKey.pub> (add ssh key to the agent)

//get ssh to github
clip < ~/.ssh/<nameOfSSHPubKey.pub> (copy the key to keyboard den paste on github setting profile there)

// connect to github
ssh -T -p 443 git@ssh.github.com (github no shell so got some firewall issue that you cant use ssh connection)
ssh -T git@ssh.github.com (if no can use this)

git remote set-url origin git@github:<username>/<repoName>.git (covert to ssh tunnel connection)
git remote -v (see the connection type url)

// git commit history rewrite //
git commit --amend
git rebase <BASE> (rebase your commitss to another branch commit or head) den you combine with fast forward merge to be efficient

git pull --rebase orgin master (pull and add in to commit in a linear way)

git reflog (referenc log see all history)

git tag <nameOfTag> (tag your commits)
git tag --list (list all your tags)
git show <nameOfTag> (show all details)

JS
pass by value --> primative (variables point to a new create/copied data space)
pass by reference --> object (variables point to the same data space)

Backend and frontend both different folder

backend MVC express node ()
Frontend slvete  
assisgnment 1 foundation super important** keep clear witht he requirements before starting 3hop thingy? 
with assignemnt 1 solid can easily go to assisgnment 2 there need to have a big picture of your assignment 
1. login with access control login, admin can easily create user**
2. less pop up model box, but still need to show confirmation on the page.
3. documentation important too
4. dont assume your knowlegde is right
5. assisgnment 2 is access control with what user can do and see
6. standadise http code

i think can prepare someone to write notes
what is the charteristic api --> stateless etc
how many ways to implement mircoservices
he drill alot on theories also, like why use this in this achitecture
grpc? api vs gprc vs graphql
why use post/patch etc in documentation security issue? partial resources? post in sementics?
finding need share in a group, see team as one
miro.com --> documentation
datashown also need to be consistent across everyone.
follow step by step from the repairement pdf
1 and 2 dunnno
3 and 4 focus on documentation
update env file for docker stage, its for security next time



