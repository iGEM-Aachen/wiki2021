# iGEM Aachen 2021 

- [iGEM Aachen 2021](#igem-aachen-2021)
  - [How to work with GitHub and all this stuff](#how-to-work-with-github-and-all-this-stuff)
    - [Folder structure](#folder-structure)
      - [Where can I find the actual text files?](#where-can-i-find-the-actual-text-files)
      - [Where should I put images?](#where-should-i-put-images)
    - [Git/GitHub](#gitgithub)
      - [Overview/What is all this branch- and commit-stuff about?](#overviewwhat-is-all-this-branch--and-commit-stuff-about)
      - [Should I create a new Branch for the text I am writing?](#should-i-create-a-new-branch-for-the-text-i-am-writing)
      - [How do I change a file?](#how-do-i-change-a-file)
      - [How do I create a new Branch?](#how-do-i-create-a-new-branch)
      - [How do I create a Pull Request?](#how-do-i-create-a-pull-request)
      - [How do I continue my work on a branch other than main?](#how-do-i-continue-my-work-on-a-branch-other-than-main)

Built using [the iGEM Wiki Starter Pack](https://igem-wiki-starter.readthedocs.io) v0.1.2 by iGEM BITS Goa.

## How to work with GitHub and all this stuff

### Folder structure

#### Where can I find the actual text files?

All text files that should be manually edited are located under `src/pages`.
There you will find `.pug`-files for all pages in the wiki.
Most of these contain a block of text written in Markdown.
Others, like `Team.pug`, look rather cryptic.
The corresponding pages are generated in such a way that layout and content are separated much better.

You do not need to work with any files in the folders `igem` or `dist`.
These are generated automatically from our `.pug`-files.

#### Where should I put images?

Images belong in the folder `src/assets/img`.
Right now, there are almost no subfolders in there, but feel free to create one for better clarity.

### Git/GitHub

#### Overview/What is all this branch- and commit-stuff about?

This chapter is a brief introduction to Git and GitHub in general.
For tutorials for specific tasks, see the chapters below.

Git is a version management tool.
It keeps track of every single change ever made to the things stored inside a git repository (like our wiki folder).
To do so, it uses commits.
To better organize the work, branches are used.

Simply spoken, you could think of every commit as a new version of your software or wiki.
Whenever you make a change to something and want git to recognize it, you create a commit.
A commit has a name and stores exactly what lines of code (or text) have changed compared to the last commit.

You can image different branches as different versions of your code that are developed in parallel.
The most important branch is usually called `main` branch (formerly known as `master` branch, but calling things `master` and `slave` is not really up to date anymor).
When creating a new branch, you basically copy the current state of the main branch.
When you finished your work, you want to *merge* your changes into the main branch again.
To do so, you create a *Pull Request* (also known as Merge Request, more on them later).

#### Should I create a new Branch for the text I am writing?

Most of the time, creating a new branch is a good idea.
Writing your text on a separate branch and creating a pull request has two advantages:

1. It gives others the chance to have a look at your work before merging and uploading it to our wiki.
2. It helps to better structure your work.
   If you are writing a text and can't finish it in one day, you can already upload it on your branch without having to fear anything, e.g., your unfinished work being uploaded.
   On the next day, you can just proceed writing your text and create as many commits on your branch as you want.

So basically, you should always create a new branch for your work when you want someone else to check it or when it is more work than you do in one session.
Letting someone else check your text is always a good idea, so working on a different branch than `main` is usually a good idea.
A case where you can work directly on the main branch would be fixing a small typo or something similar.

#### How do I change a file?

- Navigate to the file you want to change.
- In the upper right corner, click on the little pencil icon.
  Now, GitHub opens an edit view of the file.
- Make your changes and scroll down to `Commit changes`.
- If you want to create a new branch for your commit, have a look at the next chapter.
  Otherwise (so, if you are just doing very small changes on `main` or already are on another branch), just do the following:
- First, you should give your commit a meaningful name.
- Click on `Propose changes`.

#### How do I create a new Branch?

- Go to one of the files you are working on and make your changes.
- Scroll down to `Commit changes`.
- First, you should give your commit a meaningful name.
- Then, click on `Create a new branch...`.
- Now you can enter a name for your branch.
- Click on `Propose changes`.

After that, GitHub automatically forwards you to another page where you can create a pull request.
If you are done with your work, you can do that (look into next chapter).
Otherwise, you can simply leave the page.

#### How do I create a Pull Request?

1. Directly after creating a commit on new branch:
   - GitHub automatically forwards you to a page where you can create a pull request for your new branch.
   - Give your pull request a meaningful name.
   - If necessary, you can also write a little more in the comment field below.
   - This field also supports markdown and linking other users with `@`.
   - On the right, assign a reviewer to your pull request (someone who should have a look at it and give his OK before merging).
   - Scroll down.
     There you find an overview over all changes made on the branch.
     Have a look at them and check if everything is correct.
   - Click on `Create pull request`.

2. Otherwise: If you are not automatically redirected to the page mentioned above, there are two ways to get there:
   1. After creating a commit on any branch other than `main`, GitHub shows a banner with a button `Compare & pull request` on the main page of the repository.
      This brings you directly to the page mentioned above.
   2. Otherwise, click on the tab `Pull requests` at the top bar.
      There, click `New pull request`.
      Now you will two dropdown menus with an arrow between them.
      Don't change the left dropdown `base: main`.
      In the right dropdown, chosse the branche you want to merge into main.
   3. Click `Create pull request` and continue as above.

#### How do I continue my work on a branch other than main?

As mentioned above, often you want to continue your work on a branch before merging it into main.

- On any page under the tab `Code` (i.e., where you can see and edit files), you can see a dropdown menu with the text `main` and a branch icon in the upper left corner.
- Click on that icon to switch to another branch.
- Now you can see the current status on that branch and also make changes to it.
- When you now commit some changes, they will be commited to the selected branch instead of `main`.
