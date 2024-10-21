---
title: drill
description: >
  Drill is a HTTP load testing application written in Rust inspired by Ansible
  syntax
tags:
  - rust
pubDate: 2017-10-05
repository: https://github.com/fcsonline/drill
---

I started this project as a side project to learn Rust. I was searching a
combination of different technologies to play with. I was looking for some
ideas of projects where **network communication, concurrency and file parsing**
were essential parts of the project.

I used some load testing application in the past like *JMeter*. Although they are
so powerful and great, at some point it started to be complicated and
cumbersome to setup a test plan. For this reason a lightweight
[Rust](https://www.rust-lang.org/) application to run a load testing plan of
your web application looked a good side project to create Drill from bottom up.

The project was really influenced by this new trend of having a configuration
Yaml file to code a set of actions. At that time my reference was the syntax of
[Ansible](https://www.ansible.com/).

The project started with a small set of features, but for years we have been
keep adding more and more set of nice things. Right now you can do awesome
things like choose the number of requests, choose the concurrency, dynamic
headers, load CSV, cookie support and much more.

If you want to play with it, you have it available as a binary in
[crates.io](https://crates.io/crates/drill).

Really happy of this project that helped me to learn Rust and all the ecosystem
around it. Also, I want to say thanks to all developers that helped to improved
it. 🙌

## Demo
[![demo](https://asciinema.org/a/164615.png?ts=1)](https://asciinema.org/a/164615?autoplay=1)
