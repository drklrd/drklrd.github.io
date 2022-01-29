---
title: "Getting the length of JSON object with command-line using jq"
date: 2018-03-15T10:18:17+05:45
draft: false
---

There's a lightweight and flexible command-line JSON processor called **[jq](https://stedolan.github.io/jq/)**. It has wide range of capabilites but something that I came across lately and is quite useful for me is printing out the length of a JSON object.

```
cat testjson.json | jq '. | length'

```
