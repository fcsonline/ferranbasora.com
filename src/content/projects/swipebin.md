---
title: swipebin
description: >
  A Tinder-style photo cleaner. Point it at your folders, then swipe right to
  keep and left to delete, one picture at a time.
tags:
  - typescript
  - docker
pubDate: 2026-06-26
repository: https://github.com/fcsonline/swipebin
vibeCoded: true
---

I wanted a really fast way to clean up the folders that fill up the most, like
Downloads or my raw camera photos. They end up full of near-copies, blurry
shots and screenshots I meant to delete months ago, and going through them on a
laptop is no fun, so I never do it.

SwipeBin turns that job into something you can do on the couch with your phone.
You point it at one or more folders and it shows you the photos one at a time.
Swipe right to keep, swipe left to delete. That is all there is to it.

Nothing is really deleted when you swipe left. The files move into a `.trash`
folder inside the same folder, so a mistake is one tap of Undo away, and you
choose when to empty the trash for good. At the end it tells you how much space
you saved. It also opens RAW files and PDFs, not just normal JPEGs, and it
remembers what you have already looked at, so the same photo never comes back.
Each folder keeps its own progress, so you can stop halfway and carry on later.

It runs as a single Docker container. When it starts, it prints a web address
and a QR code, so you scan it and the photos open on your phone over your home
network. Then you sit back and swipe.

## Demo
![SwipeBin swipe screen](/img/projects/swipebin/thumbnail.png)
