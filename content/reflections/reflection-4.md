# Thick And Thin: Learning What It Takes to Keep Systems Dependable

By Gabrielle Tatel · Reflection 04 · Information Security Audit Project

Thick And Thin by LANY makes me think about what happens to the idea of commitment when circumstances become difficult. It is easy to associate dependability with things staying comfortable. The harder question is what care requires when something needs attention, patience, and change.

That is the connection I bring to our information security audit project.

Working on the CITS assessment with Donald Lee Novo and Resham Qhaleed Kadiri changed how I understood the systems behind the services we use. A functioning portal gives us an experience: we log in, complete a task, and continue with our day. The work required to keep that experience dependable is much less visible.

Our project asked us to look behind that familiarity. What we found surprised me.

## When Familiar Systems Become Unfamiliar

My first reaction was a little bit of shock. The assessment described weaknesses that I had not previously known about, and some of the security practices seemed weaker than I had expected. It was uncomfortable to recognize that services I associated with routine university life could depend on arrangements that needed significant improvement.

I was also concerned about services that, from what I had been told, were running older versions. The timing made that concern feel urgent. In October 2026, two critical vulnerabilities in the PHP interpreter, known together as PHP2Shell (CVE-2026-109618 and CVE-2026-109619), were disclosed. They could allow an unauthenticated attacker to run code on a server that handles web requests with PHP, and exploitation attempts were reported even before patches were released. The PHP Project issued fixes for its supported versions, but PHP 8.1 and older are end-of-life and received only source-level backports instead of ready-to-install releases. A portal running on an older PHP version is exactly the kind of system a vulnerability like this can reach.

However, our audit did not establish the deployed PHP version or verify that PHP2Shell affected CITS. The report left patch status incompletely established.

That distinction matters. My concern was real, but it could not stand in for technical evidence.

The project began changing how I expressed criticism. Feeling surprised could be the beginning of an investigation. It could not be the conclusion.

## Looking Beyond Whether It Works

Our report focused on CITS website, portal, and identity services. Through interviews, follow-up consultation, and document review, we connected information assets with the systems and working practices supporting them.

The inventory contained twenty-three information assets. What stayed with me was the decision to think about information itself: the records, credentials, documentation, and other collections that people need to trust. The devices and applications holding them were part of that picture, but they did not fully explain their value.

This made the project feel different from checking whether an application runs. A service might be accessible while questions remain about who can change its records, how its information is recovered, or what would happen if a shared dependency failed.

I began to see dependability as something built from many connected responsibilities. The familiar screen is only the part the user sees.

## Evidence Requires Patience

One of the most important lessons was learning to distinguish what the assessment established from what still needed confirmation. An interview can describe a practice. A document can record an intention. Demonstrating that a control works may require further evidence.

Backup and recovery made this especially clear. The report documented a backup appliance, but the assessment did not establish complete backup coverage and successful restoration. That supported a need for verification. It did not justify turning every unanswered question into a claim that nothing was being done.

The report also documented existing safeguards, including multi-factor authentication on work accounts, antivirus, daily monitoring, and an administrator available on call. Those practices mattered even though other weaknesses remained.

I think a fair audit has to hold both parts of the picture together. Giving credit to existing protection does not erase the gaps. Identifying gaps does not erase the effort already being made.

## Why Not Just Update It?

My immediate reaction to older services was that they should be updated. I still believe maintenance matters. What changed was my understanding of what an upgrade can require.

I was told that upgrading components could break dependent services and cause errors in the portal. That was difficult to hear while PHP2Shell was in the news, because for older installations the recommended fix was an upgrade to a supported version. That explanation made me consider the consequences of a change from the perspective of the people responsible for keeping those services available.

An upgrade affects an existing system with its own dependencies and assumptions. If those relationships are not understood and tested, an intended improvement can interrupt the work that people need to complete.

This helped me understand why our report's finding about deployment without a staging environment was significant. A place to test changes before production can support both safer maintenance and service continuity. Compatibility concerns become questions to investigate through testing, planning, and recovery preparation.

The difficulty of upgrading does not make the underlying concern disappear. It makes the path toward improvement something that must be designed carefully.

## Dependability Has to Survive Change

This is where Thick And Thin becomes meaningful to my reflection. I connect its emotional tension to my own developing understanding of responsibility: caring about something includes being willing to work through the conditions that make maintaining it difficult.

For information systems, leaving everything untouched can feel reassuring because the current version is familiar. Yet familiarity does not tell us whether a component remains adequately supported or protected. Change brings risks, and postponement can carry risks too.

The practical challenge is deciding how to move forward responsibly. Testing important workflows, preparing a recovery approach, and checking the result of a change are part of that work. These are development habits I want to take more seriously as a Computer Science student.

I used to give most of my attention to making a feature function. This project made me think more carefully about maintaining it after other people begin to depend on it.

## From Findings to Priorities

Our report assessed fourteen risks: five High, eight Moderate, and one Low. It organized the broader conclusions into eight findings and proposed eleven controls. These figures helped structure the assessment, but the reasoning behind them was what made them useful.

The ratings combined qualitative judgments of likelihood and impact. They were priorities developed from the available evidence, with confidence and limitations that still mattered. They were not measurements proving that a specific incident would occur.

Recommendations concerning access control, safer deployment, authentication resilience, and recovery addressed different parts of the same larger problem: keeping information and services trustworthy when people, technology, or circumstances fail.

I appreciated that the proposals included responsibilities, timeframes, and ways to verify improvement. A recommendation becomes more useful when someone can understand what action is expected and what evidence would show that it helped.

Our project proposed those improvements. It did not implement them or measure a reduction in CITS's actual risk. Writing the recommendation was a starting point for further work.

## The Responsibility in Describing Others

Completing the project with Donald and Resham also made me think about the responsibility involved in producing a shared assessment. Our report brought together descriptions of daily work, technical arrangements, and judgments about their security implications. Those parts needed to support one another.

We had to make the reasoning understandable enough that a reader could see how the evidence led to a finding and how the finding led to a proposed action. A strong conclusion could not depend only on how confidently it was written.

For me, the personal lesson was learning to keep concern constructive. The people maintaining these services work within operational constraints. Understanding those constraints helps explain the difficulty of improvement, while the findings still require attention.

That balance feels important for the kind of developer I want to become. I want to recognize weaknesses clearly and think seriously about the work required to address them.

## Through the Difficult Parts

Backburner led me to think about what deserves protection. Robbers expanded my understanding of threats. Delicate made me consider how to prioritize under uncertainty. This project brought those ideas into an organization whose services form part of university life.

I finished with more concern about the weaknesses we identified, but also with a better understanding of why responsible improvements take planning. A system can need urgent attention while the people maintaining it also need a workable way to make changes safely.

Thick And Thin gives me a way to describe that responsibility. Dependability involves continuing to pay attention after the first implementation, after the first problem, and after the first recommendation has been written.

It requires checking what works, acknowledging what remains uncertain, and following through when improvements become difficult.

The project did not give me a reason to expect perfect systems. It gave me a clearer sense of what caring for imperfect systems should involve.

If people are going to keep depending on what we build, we have to keep doing the work that makes that dependence reasonable.
