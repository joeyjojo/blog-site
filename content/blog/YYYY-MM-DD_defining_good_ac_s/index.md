---
title: "Defining good Acceptance Criteria" 
date: "2019-12-02T22:22:26.000Z"
description: "Defining good ACs can be difficult, especially if you are undergoing a 'transformation' and are moving from traditional 'requirements' Lets talk about what makes a good AC."
published: false
---
One of the most common 'transformation' hurdles that marks the move towards organisation agility is good problem definition. Initially, an organisation might 'over define' a problem. That is, describe in excruciating detail, what exactly should happen, often months in advance. One of the more common mistakes is then to throw this proverbial baby out with the bathwater for the sake of 'digital transformation'. This often leads to scope that is 'under defined'. How do you get the balance right?

If you are 'doing agile software delivery' you are probably using some form of 'Acceptance Criteria' (ACs) to try and define your "definition of done". But ACs, just like everything else are subject to human interpretation, and there are good ACs and bad ACs.

Whilst I don't believe there is a 'just do this and you will get good acceptance criteria' methodology out there, what I can write about is what I have found helps my teams focus on the right level of discussion for an AC. 

But first lets discuss 'why are we discussing ACs anyway?' What does a good AC discussion help us with? In my view, a good AC will help us:

- Have a shared understanding of the problem
- Understand when we will be finished
- Have leeway to interpret the solution to the problem

And this means a good AC is itself, open to interpretation in any given situation. For instance, if the ticket was a 'spike', I would not follow these rules.

So anyway, here are some of the the things I do during ticket kick off that I believe help the team get to good ACs:

1. Focus on the data. What data do you want, when, where from and why? I've found these questions hold across 'data boundaries' (ie. UI, API, DB) as well as 'interface types' (ie. voice vs ui)
    -  Its important to understand why that data is necessary for the user. What value do they get from it? 
    - Its important to understand when that data is needed. Does the user need it immediately, can it load in later? 
    - Where is the data coming from? Is it in the app already or do I have to get it from another service? 
    - Why is this data important? Is some more important than others? 
2. Be broad about your cross functional requirements. We often focus on the characteristics of a software solution as the be all and end all of CFRs but I have found that thinking wider than this and thinking of the behaviour of the system as whole is helpful.
    - It can be tempting to not repeat yourself around CFRs. I have never found this to not lead to problems. Repeat yourself. You might want to avoid the detail of each CFR on EVERY ticket... but prioritise the one you care about for each ticket.
    - Documentation. Find your team is finding it difficult to keep the internal or external documentation up to date? Don't split it into separate tickets make it integral to the completion of the ticket! 
    - External demonstrations. Do you have to demonstrate your software to your peers or neighbors at any point? Then make it a CFR and show your team you value it! It doesn't matter if it isn't picked to be demoed. Get into the habit of doing it for everything!
    - Other examples based on what you do! Yes I am sure you can think of those things that are based on how your company or team operates :)
3. Understand what actions the user wants to take. What does the user want to achieve? What do they want to do with the data? What value are they trying to get out of the transaction? What should they be able to do?

Usually I find that by focusing on those 3 areas, the group of us defining the ACs can come up with the right level of detail. 

I try to compare defining ACs similarly to 'black box testing'. I want them to help me with inputs and outputs but I don't want them to tell me about the middle bit. The bit I am going to define. They should be agnostic as to how that is achieved but care deeply about the output.

Good ACs are a small, but integral, part of defining a successful chunk of work. Helping your team get better at them will reap its own rewards.