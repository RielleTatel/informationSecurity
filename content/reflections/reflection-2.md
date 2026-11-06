# Robbers: Not Every Threat Looks Like a Robber

By Gabrielle Tatel · Reflection 02 · Threats to Information Security

There is something strange about Robbers by The 1975.

The title immediately gives us an image: someone taking something that does not belong to them. A robber is easy to understand. There is a person who wants something, a person who owns it, and an act of taking.

It is almost comforting when a threat is that obvious.

You know who the robber is.

You know what they want.

You know what you are supposed to protect.

> "But after going through our lesson, I realized that a robber does not always look like a robber."

Sometimes, it looks like a hacker.

Sometimes, it looks like a natural disaster.

Sometimes, it looks like an outdated computer sitting in the corner of an office.

And sometimes, it looks like you.

## The Threat Is Bigger Than the Attacker

When I think about cybersecurity, my mind naturally goes toward the stereotypical image of a hacker sitting behind a computer, attempting to break into a system. It is probably the easiest way to imagine a security threat because it gives us a clear villain.

But this lesson challenged that understanding.

The material presents twelve different categories of threats, including compromises to intellectual property, deviations in quality of service, espionage or trespass, forces of nature, human error or failure, information extortion, sabotage or vandalism, software attacks, hardware failures, software failures, technological obsolescence, and theft.

That list is much more interesting than simply saying "hackers are dangerous."

Because it means that security is not really a war against a particular group of people.

It is an attempt to account for everything that can cause something valuable to be lost, exposed, corrupted, interrupted, or destroyed.

A hacker is only one possibility.

## The Robber Doesn't Always Want Your Data

One of the things I found interesting about the lesson was how broadly it defines what can actually be compromised.

We often associate cybersecurity with personal information and passwords, but the lesson begins with intellectual property. Ideas, inventions, trade secrets, copyrights, trademarks, and patents are all assets that organizations have to protect. Software piracy is presented as one of the most common breaches of intellectual property.

This made me think about what we actually mean when we say that someone has "stolen" something.

Stealing does not necessarily mean physically taking an object.

If someone copies proprietary software without authorization, something has been stolen.

If someone takes a company's confidential research, something has been stolen.

If someone's identity is taken, something has been stolen.

If a person's original work is copied and presented as somebody else's, something has been stolen.

In a digital world, ownership becomes much harder to see because information can be copied without the original disappearing.

A robber can walk away with a laptop.

A digital thief can copy the contents of the laptop and leave it exactly where it was.

The victim might not even know that anything happened.

That, to me, is one of the unsettling things about information security.

Sometimes the theft does not leave an empty space.

It leaves everything looking normal.

## What If Nobody Is Actually Attacking You?

The category that perhaps changed my perception of threats the most was deviations in quality of service.

The lesson gives examples such as an accident damaging an organization's internet connection, problems with service providers, outages, and power irregularities. It also introduces concepts such as uptime, downtime, and service-level agreements.

This is interesting because there may be no attacker at all.

Nobody hacked the server.

Nobody stole the password.

Nobody installed malware.

And yet the system is still unavailable.

A backhoe could accidentally cut an internet connection.

A power outage could bring down infrastructure.

A service provider could fail to meet its expected level of service.

A brownout, blackout, spike, surge, or other power irregularity could affect operations.

This made me realize that security is not synonymous with preventing malicious behavior.

Sometimes, the threat is simply reality happening around the system.

And that is a much more difficult problem because you cannot negotiate with a typhoon, patch a brownout, or threaten a backhoe with legal consequences.

You can only prepare.

## The Most Dangerous Threat Might Be Human

Then we reach human error or failure, and this is where the lesson becomes uncomfortably relatable.

The material describes human error as actions performed without malicious intent or through ignorance by an authorized user. It also introduces social engineering, business email compromise, phishing, spear phishing, and pretexting.

What interests me here is that the person involved does not necessarily want to cause harm.

Someone can make a mistake.

Someone can trust the wrong email.

Someone can believe that the person on the phone really is their supervisor.

Someone can accidentally reveal information.

And suddenly, the security of an entire organization can depend on a single moment of human judgment.

This is why I find social engineering particularly fascinating.

A technical vulnerability requires the attacker to find a weakness in the system.

Social engineering allows the attacker to convince the system's user to become the weakness.

That distinction is important.

A firewall cannot protect an employee from believing a convincing lie.

An antivirus cannot stop someone from voluntarily giving away their credentials.

A perfectly designed authentication system cannot prevent a user from authenticating the wrong person.

Technology can protect the door.

But humans still decide who gets invited inside.

## We Are All Potentially Vulnerable

This also changes how I think about the phrase "the weakest link."

It is easy to blame users when security incidents happen.

"Why did they click the link?"

"Why did they give away their password?"

"Why didn't they notice?"

But I think that attitude misses something important.

The lesson does not simply describe malicious users. It acknowledges that authorized users can make mistakes.

That means security cannot be designed around the assumption that people will always make perfect decisions.

People get tired.

People become distracted.

People panic.

People trust authority.

People respond to urgency.

People make mistakes.

A secure system should therefore not require humans to behave perfectly.

It should be designed to survive human imperfection.

That, to me, is a much more realistic philosophy of security.

## The Robber Can Also Be Time

Another category that I initially would not have considered a security threat is technological obsolescence.

The lesson explains that outdated infrastructure can become unreliable and untrustworthy and can increase the risk of attacks and loss of data integrity.

This made me think about something that is rarely treated as an "attack":

time.

Software becomes unsupported.

Hardware becomes obsolete.

Security updates stop arriving.

Old systems become incompatible with modern infrastructure.

Eventually, something that was once considered secure becomes a liability.

Nobody necessarily broke into it.

Nobody necessarily attacked it.

It simply became old.

And perhaps that is one of the most interesting lessons from this topic: security is not a permanent state.

A system can be secure today and vulnerable tomorrow.

Security therefore requires maintenance, not just implementation.

You cannot simply build a secure system and declare victory.

You have to keep securing it.

## Not Every Failure Is a Cyberattack

The lesson also discusses technical hardware and software failures.

Hardware can fail. Software can contain vulnerabilities. SQL injection, cross-site scripting, command injection, buffer overflows, race conditions, information leakage, and other software-related weaknesses can compromise systems.

This reminded me of something particularly relevant to me as a Computer Science student.

We often celebrate making software work.

We ask:

Does the feature work?

Does the application run?

Does the database return the correct data?

But information assurance forces us to ask a more uncomfortable question:

What happens when it doesn't?

A system is not truly mature simply because its successful path works.

We have to consider what happens when an input is malicious.

What happens when the database receives something unexpected?

What happens when a component fails?

What happens when an exception is not properly handled?

What happens when an old dependency contains a vulnerability?

Security forces us to think about the paths that developers would rather not think about.

The happy path is easy.

The failure path is where engineering becomes serious.

## The Robber Can Be Nature

The lesson's category of forces of nature might initially seem unrelated to information security.

Natural disasters, fires, floods, earthquakes, typhoons, and other uncontrollable events can damage information systems.

But living in the Philippines makes this particularly difficult to dismiss.

A server does not care whether the flood was caused by a security breach.

The database does not care whether the building was destroyed by a typhoon.

The data is simply gone.

This is where information security intersects with resilience.

Sometimes the goal is not to prevent the disaster.

The goal is to ensure that the organization can continue after it happens.

That changes the question from:

"How do we stop everything from going wrong?"

to:

"How do we make sure everything doesn't have to go right?"

That is a much more realistic question.

## Twelve Threats, One Problem

After looking at all twelve categories, I began to see a common pattern.

Intellectual property can be stolen.

Services can become unavailable.

Information can be exposed.

Nature can destroy infrastructure.

People can make mistakes.

Attackers can demand ransom.

Someone can deliberately sabotage a system.

Malware can infect it.

Hardware can fail.

Software can contain vulnerabilities.

Technology can become obsolete.

And physical or digital assets can be stolen.

These threats look completely different from one another.

But they all lead to the same fundamental problem:

Something valuable is no longer in the state we intended it to be.

The information is no longer private.

The data is no longer intact.

The service is no longer available.

The system is no longer trustworthy.

The asset is no longer where it should be.

That is what makes information assurance so broad.

It is not simply about stopping hackers.

It is about preserving trust.

## Twelve Threats, One Problem

After looking at all twelve categories, I began to see a common pattern. These threats look completely different from one another. But they all lead to the same fundamental problem: Something valuable is no longer in the state we intended it to be.

1. Intellectual Property Compromise
2. Deviations in Quality of Service
3. Espionage / Trespass
4. Forces of Nature
5. Human Error / Failure
6. Information Extortion
7. Sabotage / Vandalism
8. Software Attacks
9. Hardware Failure
10. Software Failure
11. Technological Obsolescence
12. Theft

## So Who Are the Robbers?

Maybe that is why Robbers works as the theme for this reflection.

The obvious interpretation is that a robber is someone who intentionally takes something from someone else. But after this lesson, I think the word becomes much broader.

The robber can be a hacker.

It can be ransomware.

It can be a malicious insider.

It can be a phishing email.

It can be an unpatched vulnerability.

It can be a failed hard drive.

It can be a power outage.

It can be a typhoon.

It can be an outdated system.

It can even be our own mistakes.

And sometimes, there is no robber at all.

Sometimes, we simply failed to prepare for what could happen.

That may be the most important realization I gained from this lesson.

Security is not about predicting exactly who will attack us.

It is about recognizing that we cannot predict everything.

## Closing Thoughts

If my first reflection was about understanding what deserves protection, this lesson made me think about everything that can threaten it.

The biggest misconception I had about information security was that the primary objective was to keep attackers out.

Now I think it is something broader.

It is about anticipating loss.

It is about understanding that systems exist in an imperfect world, operated by imperfect people, running on imperfect technology, exposed to imperfect circumstances.

And despite all of that, we still expect them to work.

That is why information security matters.

Not because we can eliminate every threat.

We cannot.

But because we can understand them.

We can anticipate them.

We can prepare for them.

And we can design systems that do not completely collapse when something inevitably goes wrong.

A robber may be obvious.

A threat is not.

And perhaps the real responsibility of information security is learning to recognize the difference.
