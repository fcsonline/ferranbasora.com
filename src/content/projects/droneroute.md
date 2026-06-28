---
title: droneroute
description: >
  A free, open-source mission planner for DJI drones. Plan waypoints on a map,
  set up the flight, and save a KMZ file ready to fly.
tags:
  - react
  - typescript
pubDate: 2026-04-06
repository: https://github.com/fcsonline/droneroute
vibeCoded: true
---

I fly a DJI drone, and I wanted my own tool to plan the routes. The idea was
simple: run it on my own machine, lay out the flight in 3D, and keep my data to
myself instead of handing it to someone else's cloud. The apps out there either
cost money, only work in one place, or make you tap the whole route into a tiny
phone screen while you stand in a field.

So I built DroneRoute. You click on the map to add waypoints and points of
interest, then set the height, speed, camera angle and direction for each one,
and the app draws the path the drone will fly. You can switch to a 3D view to
see how the route sits against the hills and buildings. When you point the
camera at a point of interest, it works out the right angle for you. There are
also a few ready-made shapes, like circles, grids and wall scans, so you don't
have to place every point by hand.

When you are done, it saves a KMZ file your drone can read. You can send it
straight to the controller over USB with `npx droneroute`, or open it in the
official app. It runs on your own machine, or your own server if you like, so
your flight plans never leave your hands.

It works with the drones I could get hold of or find the details for: M300 and
M350 RTK, M30 and M30T, the Mavic 3 Enterprise models and the Mini 4 Pro.

## Demo
[![DroneRoute mission planner](/img/projects/droneroute/thumbnail.png)](https://app.droneroute.io)

There is a [live demo](https://app.droneroute.io) if you want to try it without
installing anything.
