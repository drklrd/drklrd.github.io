---
layout: post
title: OSM API Explorer
---


Few months ago, I had to work with OSM(**[Open Street Map](https://osm.org)**) API([0.6](https://wiki.openstreetmap.org/wiki/API_v0.6)) for a Web app. Some of the APIs were authenticated(it used either basic authentication using username and password or OAuth). 

But to just test out the API endpoints for responses, it was much of an effort to provide username and password for basic authentication or include authentication token in every protected requests. I felt need of some kind of playground for the APIs. So, I tried to create a simple OSM API explorer that could make trying out the OSM API a little bit easier.

For that, I used an already available package for OSM Auth called [osm-auth](https://github.com/osmlab/osm-auth) and an editor called [Ace editor](https://ace.c9.io/). To prevent unnecessary modification on LIVE server, this uses the OSM dev server. For more detailed info visit the repository [osm-api-explorer](https://github.com/drklrd/osm-api-explorer). Or to view the app visit [https://github.com/drklrd/osm-api-explorer](https://github.com/drklrd/osm-api-explorer).

***The app may be buggy and still lacking some features. Contribution to the repository are highly welcome and appreciated!***