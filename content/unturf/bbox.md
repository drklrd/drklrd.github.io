---
title: "bbox"
date: 2022-05-12T20:35:17+05:45
draft: true
cover.hiddenInSingle: true
---

This section describes the working of Turf.js module [bbox](https://turfjs.org/docs/#bbox).

### Purpose of this Turf.js module

This takes point, or a line, or a polygon, or any set of features and returns a bounding box. For more information and its usage visit its [official documentation page](https://turfjs.org/docs/#bbox).

### Pre-requisites for understanding this module

- The working of this module is very simple. So, basic knowledge of latitude (horizontal lines along Earth), longitude (vertical lines along Earth), and number comparision in enough.

![Figure 1](/unturf/images/bbox_1.jpg)

### Behind the scenes- Working of this module

- As per this [Wikipedia article](https://wiki.openstreetmap.org/wiki/Bounding_Box), Bounding box is defined by two longitudes and two latitudes.
- bbox = left, bottom, right, top
- Also in terms of lat/lng, bbox = min_longitude, min_latitude, max_longitude, max_latitude

So, to calculate the bounding box for any set of features, we just need to find the minimum longitude, minimum latitude, maximum longitude, and maximum latitude.

In the given figure, we can see a LineString with 4 points and [lng, lng] pair for each point. The bounding box for the given feature is (85.26, 27.67, 85.35, 27.67) which is also shown by the dotted line in the figure.

![Figure 1](/unturf/images/bbox_2.jpg)
