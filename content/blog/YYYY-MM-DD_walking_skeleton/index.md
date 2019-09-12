---
title: "Integration, integration, integration. An introduction to walking skeletons" 
date: "2019-08-28T15:03:00.000Z"
description: "In my experience, a decent walking skeleton is the most underused technique when teams are trying to de-risk software delivery. In this article I attempt to articulate its value so you want to use it more :)"
published: false
---

If I was to pick out what I think the single biggest difference between "Enterprise" and "Non Enterprise" software development, it would probably be the amount of integration that is necessary to achieve success. Integration comes in many forms, not just other systems, but integration across people and process as well. Growing Object Oriented Software Guided by Tests ([GOOS](https://www.amazon.co.uk/Growing-Object-Oriented-Software-Guided-Signature/dp/0321503627)) is one of my 'cornerstone' books as to how I approach software development, as such, I wanted to write a little about one of the most under used and when it is used, some what misused techniques, the "walking skeleton".

## What is a "Walking Skeleton"?
GOOS defines it as:

A “walking skeleton” is an implementation of the thinnest possible slice of real functionality that we can automatically build, deploy, and test end-to-end - Cockburn, Alistair. Hexagonal Architecture: Ports and Adapters (“Object Structural”). June 19, 2008, (http://alistair.cockburn.us/Hexagonal+architecture)[http://alistair.cockburn.us/Hexagonal+architecture] (A time of writing, link doesn't work)

Sometimes its easier to define something by comparing it to what it isn't:

### It isn't a prototype
We throw prototypes away. A 'walking skeleton' is production code

### It isn't a minimum viable product
Functional, isn't the same as feature. A 'walking skeleton' should work, but it might do little of value from the users point of view. 
