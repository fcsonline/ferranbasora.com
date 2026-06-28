---
title: droneroute
description: >
  A free, open-source mission planner for DJI drones. Plan waypoints on a map,
  tune the flight, and export a KMZ ready to fly.
tags:
  - react
  - typescript
pubDate: 2026-04-06
repository: https://github.com/fcsonline/droneroute
vibeCoded: true
---

I fly a DJI drone, and planning a waypoint mission was always the part I
dreaded. The tools out there are either locked behind a paid plan, tied to a
single app, or they expect you to tap out the whole route on a tiny phone
screen while standing in a field. I wanted to sit at my desk, draw the flight
on a proper map, and walk out with a file I could load on the controller.

So I built DroneRoute. You click on the map to drop waypoints and points of
interest, set the altitude, speed, gimbal pitch and heading for each one, and
the app draws the path the drone will follow. When you point the camera at a
POI, it works out the gimbal angle for you from the distance and the height.
There are also a few presets, like orbits, grid surveys and facade scans, to
skip the tedious part.

When you are done, it exports a DJI-compliant KMZ file. You can push it straight
to a USB-connected controller with `npx droneroute`, or load it into the
official app. Everything runs locally, and you can self-host it with Docker if
you want your own instance.

It supports the drones I could get my hands on or find specs for: M300 and M350
RTK, M30 and M30T, the Mavic 3 Enterprise family and the Mini 4 Pro.

## Demo
[![DroneRoute mission planner](/img/projects/droneroute/thumbnail.png)](https://app.droneroute.io)

There is a [live demo](https://app.droneroute.io) if you want to try it without
installing anything.
