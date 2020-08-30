---
title: Be 125% more efficient with Git
description: >
  Improve your daily Git interactions with this awesome set of command line
  aliases, powered by FZF. You will be able to switch, rebase and fixup commits
  in a blink of an eye.
date: 2016-10-17
canonical: https://medium.com/hackernoon/be-125-more-efficient-with-git-60556a1ce971
repository: https://github.com/fcsonline/dotfiles/blob/master/git/gitconfig#L41
---

I have been a Vim user for 12 years and one important thing that you learn the
first days using it is that you can be super efficient typing commands to
complete what you are trying to do.

I spend almost all my day coding in front of a console and at some point you
realize that not only you can DRY your code, but your daily console commands
also. From time to time, I really like to stop for a while and think about all
the commands I have typed and see if I can execute them faster.

Few months ago, a friend of mine was trying to polish his daily pain points too
and he created this awesome plugin for tmux called tmux-fingers but I decided
to take another path. At the same time I discovered FZF and I thought it would
be an interesting tool to play with.

This command-line fuzzy finder does one thing and does it well, just like the
most ancient commands in UNIX. It takes an input and you can filter it to
choose what you want in a interactive shell. So you can do things like this
example:

[Demo](https://asciinema.org/a/22tnlseff7yuw62fc73nfelns)

I recommend to you to play with it a bit and start thinking about all the
possibilities you can do with it. Review all the available FZF options and you
will discover gems like multiselection (-m).

So, how do you shuffle FZF and Git to get this posts’ topic answered? Think
about common git use cases that you do every day and you are going to think of
things like this:

- Switch between branches
- Review some specific commit
- Do interactive rebases
- Edit changed files in a commit

We are going to get our hands dirty with one example:

`git log --pretty=oneline | fzf`

After executing the command below, you realize that you can search for a commit in you repository in an interactive way. If you press ENTER, the FZF’s output will be the selected line you chose. Now, try to execute this:

`git show $(git log --pretty=oneline | fzf | cut -d=' ' -f1)`

And you will get you first interactive git show. Hooray! :p

## Use cases

Now take a breath and go through those use cases I detected in my daily workflows that apply to you. All my fuzzy git commands start with pam.

### Switch between branches

This is a classic use case. You want to switch to some branch where you have been recently. I execute this:

`git pam`

Internally what this command is doing is:

`git checkout $(git recent | fzf)`

[Demo](http://asciinema.org/a/15lmglaf6ojo44jo0fbv4tt6c)

### Edit uncommitted files

This is another classic use case. You want to edit some non committed file you
are working on. I execute this:

`git pamvim`

Internally what this command is doing is:

`vim $(git status -s | fzf -m)`

This command supports multiselection!

[Demo](https://asciinema.org/a/7fbnjgoh41bg2ek9un5rxgn3x)

### Interactive rebase

This is getting interesting…

You want to start a interactive rebase from some specific commit and you want
to select it. I execute this:

`git pamrebase`

Internally what this command is doing is:

`git rebase -i $(git log --pretty=oneline | fzf)^`

[Demo](http://asciinema.org/a/b8xhvbr2rpw0cnjr2ga0dh0kh)

### Edit files in a commit

Another useful command. You want to edit some files that were changed in some
specific commit and you want to select it. I execute this:

`git pamvimlog`

This command supports multiselection!

[Demo](https://asciinema.org/a/c0y4ywx3wj5i8wh2epf08a51a)

### Interactive fixup

And my last example. You want to do a fixup in some specific commit and you
want to select it. I stage some changes and then I execute this:

`git pamfix`

[Demo](https://asciinema.org/a/699sr7ume88wemx9p57n0ipr4)

## Conclusion

If you are interested in more useful commands like those, check my
[dotfiles](https://github.com/fcsonline/dotfiles/blob/master/git/gitconfig#L41)
out.

Happy hacking!

Thanks for reading,
