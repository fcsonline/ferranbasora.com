---
title: rubocop-changes
description: >
  Runs rubocop and shows only the offenses you introduced since the fork point
tags:
  - ruby
pubDate: 2019-11-27
repository: https://github.com/fcsonline/rubocop-changes
---

In [Factorial](https://www.factorialhr.com), we had the need to know during the
CI analysis which pull request were introducing new
[Rubocop](https://rubocop.org) offenses in our source code.

The requirement was a bit tricky. We didn't want existing offenses in our
source code, only the new ones. This let us to set an starting point as a
threshold of offenses to start decreasing it to zero.

There are similar projects out there, like
[rubocop-git](https://github.com/m4i/rubocop-git),
[diffcop](https://github.com/yohira0616/diffcop),
[nexocop](https://github.com/SimpleNexus/nexocop), but not all of them offer
differences at line level. Only
[rubocop-git](https://github.com/m4i/rubocop-git) offer this nice feature but
you have to craft the commit id to get the proper fork point of your pull
request.

For this reason, I created `rubocop-changes`. Also, I was a bit curious to play
with git diff and Rubocop output. The idea was to cross both outputs to know
exactly in which line there were new offenses.

This is just an example of a failing pull request with one offense:
```
== components/importer/app/services/workbook.rb ==
C:145: 28: Style/TrailingCommaInArguments: Avoid comma after the last parameter of a method call.

12 files inspected, 1 offense detected
```

If you want to play with it, you have it available as a gem in
[RubyGems](https://rubygems.org/gems/rubocop-changes).
