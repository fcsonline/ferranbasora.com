---
title: family-map
description: >
  A small family tree viewer. Load a CSV file, move around the tree on screen,
  and keep the data on your own computer.
tags:
  - react
  - javascript
pubDate: 2026-02-28
repository: https://github.com/fcsonline/family-map
vibeCoded: true
---

My father has spent years putting together our family's history, going all the
way back to the 1800s. All of it lived in notes and spreadsheets, and I wanted
to give it a nicer home: something you can actually look at and move around,
instead of reading down a long list of names.

Family Map is a small viewer built with React Flow. You give it a CSV file with
people, their parents, dates and a photo, and it draws the tree on a board you
can drag around and zoom. There is a search box you can use from the keyboard, a
simple way to add and edit people, and a panel for longer life stories.

By default everything is saved in your own browser, so the data never leaves
your computer. If you want to share it across devices, you can run a shared
version with Docker instead. You can load and save CSV files either way, so your
data is always yours to take.

It is meant to be simple. It does one thing: show your family clearly, with the
data in your hands.
