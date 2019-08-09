---
title: "Being a little more QA" 
date: "2019-08-09T13:24:00.000Z"
description: "How the future of software development is becoming more QA"
published: true
---
As a consultant, after the stakeholder shenanigans have been completed, often the first thing I do is go talk to the QA community. The health of the QA community within an organisation is often a key indicator as to whether the organisation is going to make it through whatever we are being asked to do. QAs regardless of whether they are constrained by the system in which they operate, have to understand the dependencies and processes that gets working software to the user, even in the most siloed of organisations. 

It's my opinion that the future of software development, lies in everyone becoming "more QA", in the way they think as well as the activites they perform on a day to day basis. As machine generated code moves up "the stack", more and more of our "development" responsibility will lie in defining, observing and validating the qualities of the system and its behavior rather than typing the letters that make it work. In effect, the software developer of the not too distant future... is a QA.

## (overly) Simplified Layers of Concern for a "Developer"

Whilst this is overly simplified model (perhaps to the point of being useless... I actually don't think it matters if the model is correct or not necessarily... just that you could create a model for your world based on this generalisation to understand what is happening in your world... phew :S), generally, as a developer for a service provided over the internet, on something that is user facing you have the following "stacks" to deal with when you are attempting to develop value that can be released to your users:

![A simplified view of the layers of concern for a "Developer", an accessible, table form of this diagram follows](./stacks.png)

And here is a copy of that information in tabular form:

<table> 
    <tr><td colspan="2">Value (what we are trying to achieve)</td></tr>
    <tr><td colspan="2">Humans (the humans who agree on what needs to be done)</td></tr>
    <tr><td>Application (the software)</td><td>Infrastructure (what the software runs on)</td></tr>
    <tr><td>Business logic (the new thing that is being created)</td><td>Qualities of the system (the qualities we want to see in the system)</td></tr>
    <tr><td>Orchestration (the things we need to glue together to release the new thing)</td><td>Orchestration (the things that glue together to make that quality)</td></tr>
    <tr><td>Configuration (the values we need to change to make the software build and run)</td><td>Configuration (how those things are set up to make that quality)</td></tr>
    <tr><td>Compilation (the steps performed to change human readable code into machine readable code)</td><td>Shared software (what is running on those things)</td></tr>
    <tr><td>Compiled code (the code the machine run)s</td><td>Firmware (the software baked into the hardware)</td></tr>
    <tr><td>Runtime execution (the act of running the code on a machine)</td><td>Hardware (what runs those things)</td></tr>
</table>

As time has progressed the ability of machines to automate/generate/provision/whatever, those tasks involved in those processes has increased dramatically. At the moment, as humans, we probably meet machine half way ... whereas in the past we have been a lot closer to the bare metal. As a % of 'total humans involved in the development effort' there are less and less humans working further down the stack, and more and more humans able to focus higher up the stack. The theory being ... the further we are abstracted from the underlying mechanics, the better able we are to focus on generating value for our users ... as opposed to working on "enablers" that mean we can *then* focus on creating value for our users.

![Showing how, over time, machines have enabled more and more human effort to focus on the top of the stack](./qa_value.png)

Its probably worth mentioning [Wardley Maps](https://medium.com/wardleymaps) here ... because hey, thats what all the cool kids are doing to visualise this progress.

We have to get better as developers at this key skill of making the systems and services we develop more observable, especially in cases where we have little say over what the actual code is that produces the effect we are looking for. In the short term, the poor long suffering QA will thank you as you make the qualities and the behaviours of the system (intended or not!) observable. In the long term, you will thank yourself by helping yourself develop the skills required to discover the unknowns of your service and its behaviours and its impact on your users.

This is only going to get more apparent as key technical enablers allow Machine Learning generated systems to become more and more prevalent. [As I wrote here](https://www.defmyfunc.com/2019-04-06_ai_ml_healthcare_and_observability), if we can't make these systems and services observable, we can't make these systems and services *accountable* which is going to be a key requirement of any decision an algorithm makes.

Its why I love tools like [Honeycomb.io](https://www.honeycomb.io) and the changes it will bring as we really start to dig into what this means for our profession and the future of observability tooling.

I wrote this because of the inclusion of [Wardley Maps and Honeycomb.io](https://twitter.com/defmyfunc/status/1121094326745010176?s=20) in the [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar) and wanted to start articulating why I find them valuable.