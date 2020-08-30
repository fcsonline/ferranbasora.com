---
title: tmux-thumbs
description: >
  A lightning fast version of tmux-fingers written in Rust, copy/pasting tmux
  like vimium/vimperator
image: https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80
tags:
  - rust
date: 2019-03-02
repository: https://github.com/fcsonline/drill
---


As I said, this project is based in
[tmux-fingers](https://github.com/Morantron/tmux-fingers). Morantron did an
extraordinary job, building all necessary pieces in Bash to achieve the text
picker behaviour. He only deserves my gratitude for all the time I have been
using [tmux-fingers](https://github.com/Morantron/tmux-fingers).

During a [Fosdem](https://fosdem.org/) conf, we had the idea to rewrite it to
another language. He had these thoughts many times ago but it was hard to start
from scratch. So, we decided to start playing with Node.js and
[react-blessed](https://github.com/Yomguithereal/react-blessed), but we
detected some unacceptable latency when the program booted. We didn't
investigate much about this latency.

During those days another alternative appeared, called
[tmux-picker](https://github.com/RTBHOUSE/tmux-picker), implemented in python
and reusing many parts from
[tmux-fingers](https://github.com/Morantron/tmux-fingers). It was nice, because
it was fast and added original terminal color support.

I was curious to know if this was possible to be written in
[Rust](https://www.rust-lang.org/), and soon I realized that was something
doable. The ability to implement tests for all critic parts of the application
give you a great confidence about it. On the other hand, Rust has an awesome
community that lets you achieve this kind of project in a short period of time.
