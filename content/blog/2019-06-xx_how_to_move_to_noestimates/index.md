---
title: "How to move to #noestimates" 
date: "2019-06-20T10:00:00.000Z"
description: "Moving to #noestimates and relying on forecasting can be difficult for any person, team or organisation. Here I describe one way I go about it"
---
So you want to do #noestimates but some people in your organisation can't live without their estimates... how do you convince them otherwise?

## Some important things that #noestimates doesn't solve
1. The time between the time your stories are created and when they are implemented is important. The greater the time between those 2 events the worse your estimates would have been, but also the worse any forecasts are going to be. If stories are generated more than a month in advance of the work... its going to be tough.

1. Understand what done means for you... Ideally done means "In production being used by our users" but this may not necessarily be the case for you, your team and most importantly your process control board (Scrum/Kanban/whatever).

1. Often, during estimation sessions the real value wasn't in the act of estimating... its in the act of the whole team being in a room discussing the scope of the work. #noestimates does not mean that other important activities around scoping and alignment do not happen. It just means that we are replacing estimation with forecasting. You will as a team still need to make time for these other activities.

## Timebox all the things!
I love a good timebox. Now, a lot of agile development teams will be used to timeboxes when it comes to things like spikes, where the main objective is learning. Well guess what? Lucky you! It turns out the main outcome of most work in teams is the learning :)

So timebox!!

As a story is solidifying, I ask the team the question... Could you get this to done in 5 days?

I re-iterate that done means:
- In the hands of our users
- This is elapsed not working time

If the answer is 'No' we break the story down.

Now sometimes... a story is resistant to being broken down to less than 5 days elapsed. Lets say it relies on an external team that can't be relied upon. If we genuinely feel this is the case, that it can't be broken down, then we leave it alone.

## Breaking things down further
Often when problems are resistant to being broken down further it is because of one of the following things:
1. It is a problem that needs approaching in a different way
1. It is a problem that has dependencies that can't be relied upon
1. It genuinely is a problem that can't be broken down

### It is a problem that needs approaching in a different way
Take a look at my post on [Releasing value in software development](https://www.defmyfunc.com/2018-11-22_releasing_value_in_software_development/) for different approaches to slicing work that may allow you to think about the problem differently.

### It is a problem that has dependencies that can't be relied upon
Dependencies that heavily rely on asynchronous communication, especially across teams and organisational boundaries that cannot be relied upon, are tough. Its probably a little bit of anti pattern but I often split problems into tickets along the following lines:
- Outcomes
- Orchestration

Where an orchestration ticket is something along the lines of "Organise a meeting with InfoSec", "Arrange conversation with key stakeholders". These tickets are allowed to take longer than 5 days. Orchestration tickets often signify a key dependency and a high amount of them could highlight a tricky time ahead.

What is important is that there is an outcome ticket that follows immediately from an orchestration ticket. Often there will be one before it as well if there is some collateral needed for a meeting.

To aid in understanding these I often create "Logical Scope" models for the epic/group of tickets/ticket/whatever.

#### Logical scope model
A logical scope model is a lightweight mind-map of the dependencies and outputs required to consider the ticket complete.

A nice one often looks like this:

![A simple logical model with external dependencies](./simple_model.png)

A not nice one with lots of gnarly dependencies and/or outputs may look like this:

![A complex logical model with external dependencies](./more_complicated_model.png)

The point of this is to help categorise problems. If lots of dependencies need to be aligned, then you had best get working on them! If lots of outputs need changing for the ticket then this could be a smell the the problem needs more thinking.

### It genuinely is a problem that can't be broken down
Sad. Face. Where this is the case I often think about what I could learn that would allow me to break this problem down more and spit the ticket then into at least 2. One about the learning, the other about what happens after the learning and then go again.

## So I kind of lied






*The views in this article are my own and are not necessarily endorsed by my employer.*