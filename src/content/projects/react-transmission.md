---
title: react-transmission
description: React Transmission is an ongoing reimplementation of Transmission web interface.
tags:
  - react
  - mobx
pubDate: 2016-07-11
repository: https://github.com/fcsonline/react-transmission
---

I remember it was about two months ago when I was talking with Eduardo
Lanchares about the best stack for the next webapp. Sometimes you are at work
and you are stuck with the current set-up of frameworks and tools that are
quite difficult to change or refactor. This forces you to always work with the
same mentality not allowing you to test new approaches to solve problems.

Following our desire to learn new stuff to make our life easier, we wanted to
experiment with new technology to build a side project with a complete new
stack that fits better with the app requirements.

In that same week, a friend of mine was talking about a bug that was affecting
him in the web client of Transmission. This [bug](https://trac.transmissionbt.com/ticket/5857)
was affecting more people because we found an open bug report in the tracker
that was 2 years old. We decided to check the source code and try to fix it
because we thought that would be a piece of cake. But a few hours later we
discovered that was not as easy as we expected and at some point we gave up.

With all these things in mind we had the perfect scenario and excuse to start
playing with a new side project. We decided to start building a new interface
from scratch to understand new patterns, new approaches and discover what would
be the next challenges for the _ultimate interface_.

## Our experimental stack

Reviewing all of the features in the current Transmission web client, the stack
we chose was React for the user interface, Mobx for the state management and
CSS modules for all the stuff related with the application styles, with a new
build process managed by Webpack.

On the other hand, and with the above stack in mind, we decided to use some
best practices for the long term quality of this project. Some of these were
things like a strict set of Eslint rules, unit tests, UI tests and
internationalization.

With this decision we wanted to achieve a more reliable interface, better
performance, security and correctness. In conclusion a better way to maintain
this web application.

## Demo
![demo](/img/projects/react-transmission/demo.gif)

## Other

With Edu, we presented this experimental project on the BarcelonaJS. Those are
the slides: [Presentation in BarcelonaJS](https://docs.google.com/presentation/d/1cYbyC2Qkf85SQm4Ceq7e9TzXgaiJwMJ_VYilGn-_960/edit?usp=sharing)
