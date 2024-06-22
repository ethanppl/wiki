---
title: Don't say it's a weird bug, because it makes you look stupid
tags:
  [
    { label: "Thoughts", permalink: "thoughts" },
    { label: "Workplace", permalink: "workplace" },
  ]
toc_min_heading_level: 2
toc_max_heading_level: 3
authors: ethan
---

Often when someone is debugging an issue, you might hear:

- It's a _weird bug_
- _Somehow_ it throws an error, it's _weird_
- I followed the README, but _weirdly_ it doesn't work

As if something outside their control misbehaved, they expect someone to help
them eliminate the "weirdness". I find that a bit annoying. What does "weird"
actually mean?

We think "it's weird" because we feel like we did nothing wrong, and the outcome
is not what we intended. We do not understand why something unexpected happened,
and our first instinct is to label it as "it's weird". If the system is "weird",
then it is no longer our problem.

However, is this true? Should you ever say computers behaved "weirdly"?

<!-- truncate -->

## Computers never lie

One day, something like this happened. I was interrupted by my colleague because
he found a weird issue. He was debugging an API. While testing it, he missed the
authorization token in one of the service-to-service APIs, and as expected, an
unauthorized error was thrown. His immediate response was "weird", and then seek
help, and told me "it's weird". Huh? Why? What is weird though?

I understand what he felt like "weird" is he supplied a user token already, how
can it be unauthorized? The unauthorized error feels "weird" because the reason
is unknown. However, the reality is one of the APIs the program uses expects
another type of token, and the code missed that. There is nothing "weird", but
that immediate thought of the computer being "weird" makes it sound like he
thinks the computer lied to him, hence weird.

But computers don't lie! Computers are devices that take inputs, process and
then output. If the output is unexpected, either the inputs or the process, or
both are wrong. Data and code are both provided by users, programmers or other
systems. The computer only executes it. There is nothing weird about the
computer itself.

It's even worse when a developer says something is weird with the program that
they wrote. You wrote the program! The computer follows your instructions. How
would you blame something that exactly follows your instructions as weird, and
pretend to take no ownership of the error?

If you think seeing an unauthorized error is weird. It's not the computer
behaving weirdly, instead, it is you not understanding how your code works. It
is you not checking the API documentation before commenting it is weird. It is
not the computer lying to you therefore the code throw an error. Instead, it is
you who made a mistake in the code causing it to throw.

Computers don't lie. Even if they do because of hardware failure or cosmic rays
from light years away flipping a bit in the processor, it's abiding by the law
of physics. Figure out why and own the problem. That's how you learn.

## Why it makes you look stupid

When blaming something as weird, it sounds like blaming some external factors
causing the weirdness, as if you take no responsibility for the issue, and you
are not eager to understand the problem.

When you get used to saying "it's weird" to anything unexpected, your first
instinct is to make it sound like you have no control. It sounds like you do not
understand the issue only because some "weirdness" is hindering your ability to
understand. But to someone who understands, they know the reason is you lack the
knowledge to understand, not because it's weird. It just sounds like you do not
understand how things work, you are making up excuses, and you are not taking
ownership of figuring it out yourself. It doesn't matter how you think, it might
just be a filler word, but others who listen feel differently. It sounds like
you are stupid.

Even worse is if you are used to settling for the answer of "it's weird", you do
not try to understand what is wrong. You are tempted to seek help immediately.
Once you get used to that, you no longer self-learn and improve. You think you
don't understand just because things are "weird". You learn less.

Imagine if there are network issues, rather than labelling it as a "weird
internet problem", you take the time to investigate, you might figure out how
HTTP calls are structured, the difference between TCP and UDP, how DNS records
propagate, or how routing protocols work. That is how we learn.

So, whenever we are debugging, and when we encounter something unexpected, try
not to say "it's weird".

## Instead, state the facts

The fact is we don't know. We find it unexpected because we don't know why, and
there is nothing wrong with stating that. Imagine someone coming to you to ask
you a question, which way is better:

> How do I find the log of this line in the console? Weirdly the log is not
> showing up.

Or,

> How do I find the log of this line in the console? I tried checking the
> browser console, but I could not find it. I don't know where it is logged, can
> you help?

See the difference? The first one sounds like the person is blaming some
weirdness that swallowed the console.log. But in fact, it is some piece of code
changing the control flow causing that line not to log. Or it's just looking at
the wrong place to find the log, it could be in the server-side console.

Taking the unauthorized error example, instead of a filler word "weird", he
could comment "I already put in my token, I expect the API calls to be
authorized", and then proceed to find the source of the error.

It's mysterious and weird only because you don't understand how the program you
wrote works. State that you don't know what caused the unexpected behaviour is
better than labelling it as "weird".

Sooner or later you will figure out the issue. It might be some global variables
and side effects in functions. It might be some outdated cache. It might be race
conditions. Or it might be some network failure. No matter what it is, you will
realize there is nothing "weird", just a lack of understanding. So, admit that
it's just you don't know, and you will try to understand it.

To get even better, state what you have tried when seeking help. Divide and
conquer. Check intermediate outputs. Narrow down the scope and state your
findings when asking questions. "I tried checking the browser console". "This
line is logged in the console but not this". This shows that you are eager to
figure it out and learn. You put in the effort to understand the issue and try
to demystify it yourself. Talk to a
[rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) and you might
eventually figure it out all yourself :)

So, avoiding saying "it's weird". State what you found, what you expect to see
and what is unexpected. It will make you sound more credible. A person who takes
ownership.
