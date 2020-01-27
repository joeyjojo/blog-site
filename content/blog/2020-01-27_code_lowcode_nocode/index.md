---
title: "'#code', '#lowcode' and '#nocode'" 
date: "2020-01-27T23:45:00.000Z"
description: "The history of software development is built on abstractions that allow developers to 'do more'. From 'machine code' to Assembly, through C and on to Python and JavaScript. Abstraction is inevitable, but will it be better?"
published: true
---
Recently, I've read a lot of tweets about '#lowcode' or '#nocode' environments that allow you with 'little to no effort' or 'with no developers' generate 'business and user value'. In fact whilst I was writing this my colleagues at TW wrote this:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re excited to publish this latest article: Making a case for low-code platforms by George Earle and <a href="https://twitter.com/mikemasonca?ref_src=twsrc%5Etfw">@mikemasonca</a> <a href="https://t.co/A1GdqBQBGo">https://t.co/A1GdqBQBGo</a> <a href="https://t.co/Zyd747gxcv">pic.twitter.com/Zyd747gxcv</a></p>&mdash; ThoughtWorks (@thoughtworks) <a href="https://twitter.com/thoughtworks/status/1220066157849464832?ref_src=twsrc%5Etfw">January 22, 2020</a></blockquote>

So as a software developer by trade I just wanted to talk a little about #nocode and #lowcode solutions.

The idea is intriguing and sits at the core of what I do. What if, instead of needing an interpreter (me, the software developer and team), the user could solve their own problems? After all, they might **actually** be the best person for the job. They already understand the domain.

At the end of the day I care about adding value. And if #lowcode and #nocode platforms let me do that then I am going to use them to solve my problems. But these platforms have existed for a while... so what makes this generation different? And will it succeed?

## History
Software is built on abstractions. Over time we have created a plethora abstractions, in our languages (we don't all code in Assembly), in the way we read and write code (we use IDEs rather than notepad for a reason), the way we reuse code (SaaS is an abstraction) and in our modeling (drawings are helpful). We always have abstraction and the #lowcode and #nocode tooling that is appearing are just that, another abstraction. There is something appealing and seemingly a 'true-ism', that the closer our abstraction is to the truth, then the better it is for all. But is this a useful abstraction?

### Previous #lowcode and #nocode attempts
I used to have to deal with the output of Dreamweaver on a regular basis. In fact, I can credit Dreamweaver with some of my first jobs as people tried to untangle the mess it created. Interestingly, when I reflect, at the time Flash did not have the same 'image' problem. You, broadly speaking, did the same thing: drag some things around, write some custom code, pressed publish, debug for the next 2 hours. Yet I look back on Flash with fondness and Dreamweaver with hatred and resentment. What was the difference between these two things? I had to deal with the **output** of Dreamweaver, but the **input** of Flash.


There is also a long history of 'enterprise' #nocode and #lowcode tooling with the likes of Oracle, IBM, etc having produced this kind of thing for a long time. Again, usually to derision from software developers and certainly as someone suffering from survival bias, a cause of a lot of the problems around why a company can no longer adapt.

### Now
A new generation of tooling is coming like Microsoft Power Apps and Salesforce Lightning Platform, alongside things like AppSheet and WebFlow. There is also an increase in configuration driven tooling for developers themselves, it could be argued that things like the 'serverless' framework and other things driven by configuration are a form of #lowcode.

## Why has #lowcode or #nocode failed historically?
Probably for a lot of reasons, but I can at least explain what I think it is. Take with a pinch of salt as this is all anecdote:

<blockquote>Quality</blockquote>

Illusive, but humans know it when they see it. And by quality, I don't mean that at code review we've argued over elegant code. When we use the word quality we often refer to something that lasts, not something that is beautiful. And why does it last? Because it is Quality.

Quality is what enables sustainable speed of delivery. We can all deliver something fast once. But without quality, you cannot keep delivering at the speed the user expects. 

Previous attempts at #lowcode and #nocode focussed too much on delivering features and put no effort into operations. Just gave your users the ability to create there own tool? Cool. They shared it with their team? Awesome. Found their first bug? Who fixes that? What about the second? Third? Fourth? You mean the person who created the tool to help do their job now doesn't want to maintain it because they just want to do their job? Who'd have thunk? 

There is an irony to successful things of low quality, in that their success is the major factor of their demise. Low quality is unsustainable.

## Can you maintain it?

To maintain something you need:
- The ability to observe the problem
- Tools for the job
- The resources and experience to make a change
- The ability to test your change as you are doing it
- The ability to monitor the change

Which looks a lot like our core -ilities we need for effective Continuous and Progressive delivery:

- Testability
- Releasability
- Observability

The #lowcode #nocode platform that cracks these 3 things will, in my opinion, have cracked the quality problem. And with this, they would convince me they are sustainable.

## The problem is the platform, not the abstraction of #code, #lowcode or #nocode
Any solution, no matter if its #code, #lowcode and #nocode if it does not have the above core-ilities will be of low quality and in the end, unsustainable.

Here, #code has a natural advantage in that it is generally possible to modify and correct its failings, even if that is difficult.

I've found that #lowcode and #nocode often come in two categories:
- Configuration (via text or images) that can be integrated to your existing delivery pipelines
- Configuration (via text or images) that runs on a 'platform'

Rather than the concept of #lowcode or #nocode being the problem, in my experience its 'the platform' that the solutions run in that is actively reducing its Testability, Releasability and Observability. 

And it is this that actively harms your organisations ability to sustainably deliver value, even if it appears to add value early on.

Give me solutions that have these qualities and I am a very happy Tech Lead. I don't particularly care if you use #code, #lowcode or #nocode.

## Appendix: You have to be able to maintain your motorcycle 
I remember a good friend of mine giving me the book [Zen and the Art of Motorcycle Maintenance: An Inquiry into Values](https://en.wikipedia.org/wiki/Zen_and_the_Art_of_Motorcycle_Maintenance) during my formative years and at first I completely ignored it. But after a few years of software development I re-read it and it is the book that got me to start caring about what I do and how I do it. There are lots of things you can take from the book, but the thing I took was:

<blockquote>You have to be able to maintain your motorcycle</blockquote>

Which is to say I want a mix of 'Romantic' and 'Classical'. I want the new shiny thing, but I also want to maintain it to some degree. Is there not a middle ground? I think by focussing on these qualities we can get that middle ground.

I wrote previously about a similar issue facing ML/AI here: [Observability in AI/ML for Healthcare](https://www.defmyfunc.com/2019-04-06_ai_ml_healthcare_and_observability/).