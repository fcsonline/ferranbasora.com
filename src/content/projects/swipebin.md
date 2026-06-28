---
title: swipebin
description: >
  A Tinder-style photo culling app. Mount your folders, then swipe right to
  keep and left to delete, one picture at a time.
tags:
  - typescript
  - docker
pubDate: 2026-06-26
repository: https://github.com/fcsonline/swipebin
vibeCoded: true
---

My photo folders are a graveyard of near-duplicates, blurry shots and
screenshots I meant to delete months ago. Cleaning them on a laptop is
miserable, so I never get around to it.

SwipeBin turns that chore into something you can do on the couch with your
phone. You point it at one or more folders and it serves you the photos one at a
time. Swipe right to keep, swipe left to delete. That is the whole interface.

Nothing is destroyed when you swipe left. Deleted files move into a `.trash`
folder inside their own directory, so a mistake is one Undo away, and you decide
when to empty the trash for good. It tells you how much space you freed at the
end. It also handles RAW files and PDFs, not just the usual JPEGs, and it
remembers what you have already reviewed, so nothing comes back after a restart.
Each folder keeps its own progress, so you can stop halfway and pick up later.

It runs as a single Docker container. On startup it prints a URL and a QR code,
so you scan it and the deck opens on your phone over the local network. Then you
sit back and swipe.

## Demo
![SwipeBin swipe screen](/img/projects/swipebin/thumbnail.png)
