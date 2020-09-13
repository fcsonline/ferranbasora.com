---
title: Don't create leftovers (DCL)
description: >
  Improve the maintainability of your projects detecting this bad pattern in
  your code.
date: 2020-09-12
---

Everybody is familiar with the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle in software engineering coined by
Andy Hunt and Dave Thomas. It states *do not repeat yourself* in code to achieve less ambiguous code, avoid redundancy
and many other benefits in the long term. Although this principle is almost
everytime true, we don't have to fall on *the wrong abstraction* as Sandi Metz
mentioned.

In this post, I want to explain another pattern that I see over an over and it
only brings problems in the long term and impacts in the maintainability of you
software project. It doesn't affect to the source code itself, but in the
organization of the files that compose it.

# What is a leftover?

Over months and years, projects create and destroy many pieces of software
as they keep evolving to meet the users expectations. During this period of
time is easy to generate files, components and other kind of stuff that is not
used any more but is there impacting in your internal metrics, slowing down
your Continuous Integration check and other kind of side effects.

Those leftovers from the past don't bring any value to the project and in the
long term they can reach a point where nobody is brave enough to do a right
cleanup to have a healthy code base.

Those items should have been removed when the last reference to them disappeared
but a developer forget it to remove them. Those files can be from a non used
image to non used test in your test suite. You can find many similarities with
a memory garbage collector, with the only difference we don't have a
[reference counting](https://en.wikipedia.org/wiki/Reference_counting) between
the dependencies in out code base.

# Why we create leftovers?

How many times have you seen a web platform tutorial where the `assets` folder
and the place where they are used is far away?

Take this easy file structure:

```
/assets/images/
  - post1-cover.jpg
  - post1-thumbnail.jpg
/posts/post1/
  - helper.js
  - index.jsx
/specs/
  - helper.spec.js
```

This structure it can be familiar to you, but it suffers from DCL. If for some
reason the `post1` is not longer needed and it disappears, it is really
provable that the `helper.spec.js` file will be removed after a failing test but
those `assets` related to `post1` will be forgotten forever.

Check this other example:

```
components/
  List/
    index.jsx (has a dependency with ListItem)
  ListItem/
    index.jsx
stories/
  List.story.jsx
```

Although this file organization seams inoffensive, it suffer to from DCL. If
the `List` component disappears, maybe the `List.story.jsx` will fail as a
side-effect but nobody will alert you that `ListItem` needs to
be removed too.

# Other examples

- migrations engines

# How to detect it


- references to parent components

The rule of thumbs in all cases is to answer yourself the question: *If I remove this component from my code base, will I
    create leftovers?*

# Better approach

- relative path
- let you move this component to other places
- encapsulate

```
/components/
  List/
    ListItem/
      index.jsx
    index.jsx
    index.story.jsx
```

# Requirements

To be able

- your toolchain needs to support it
- file globing


## Conclusion

Keeping in mind, the *don't create leftovers* principle, you will create and
organize your components in a better way that will let you maintain your code
base in healthier way in the long term.

Like I said, you don't need to take this principle as written in stone for all
cases, but have it in mind when you structure your components, views, assets or
whatever piece in your project.

Happy hacking!
