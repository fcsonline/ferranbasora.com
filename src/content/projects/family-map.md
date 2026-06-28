---
title: family-map
description: >
  A small family tree viewer. Import a CSV, explore the tree on a pannable
  canvas, and keep the data on your own machine.
tags:
  - react
  - javascript
pubDate: 2026-02-28
repository: https://github.com/fcsonline/family-map
vibeCoded: true
---

Every family has that one relative who keeps the genealogy in their head, on
scraps of paper, or in a spreadsheet that only they understand. I wanted a way
to turn that into something you can actually look at and move around, without
signing up for a genealogy site or paying a subscription.

Family Map is a small viewer built on React Flow. You feed it a CSV with people,
their parents, birth and death dates and a photo, and it lays out the tree on a
canvas you can pan and zoom. There is search with keyboard navigation, an editor
to add and fix people, and a panel for longer biographies.

By default everything lives in your browser through IndexedDB, so the data never
leaves your machine. If you would rather share it across devices, there is a
self-hosted mode backed by SQLite that you run with Docker. CSV import and export
work in both modes, so you are never locked in.

It is meant to be simple. It does one thing: show your family clearly, with the
data under your control.
