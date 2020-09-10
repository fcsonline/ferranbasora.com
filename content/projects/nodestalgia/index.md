---
title: nodestalgia
description: >
  A Logstalgia port with Node.js, Canvas and WebSockets.
tags:
  - nodejs
date: 2012-07-03
repository: https://github.com/fcsonline/nodestalgia
---

I was impressed by [Logstalgia](https://logstalgia.io/), a software to show
graphically the traffic that a web application is receiving in realtime. It
uses the `access.log` files to know the origin, the response code and other
information and show it as a *Pong* game style.

You can see a nice demo here:

<iframe width="560" height="315"
src="https://www.youtube.com/embed/HeWfkPeDQbY" frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

I wanted to improve my experience with [NodeJS](https://nodejs.org) and I was
curious about trying to replicate the same with Canvas and WebSockets.

Although the result was not impressive as the original, it was nice to deliver
a working PoC that was achieving to get all the pieces to work together.
