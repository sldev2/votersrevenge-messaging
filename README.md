# Specifications
The specifications for this project are given in [SHARE - Slack Clone Reqs Revised.pdf](https://github.com/sldev2/votersrevenge-messaging/blob/master/SHARE%20-%20Slack%20Clone%20Reqs%20Revised.pdf), which is in the root.

# Voter's Revenge
Voter's Revenge is an open source software project, which will construct a tool useful for building up populist political muscle. It is designed to exploit the particulars of the American election system as well as optimize types of activism, according to where the electorate is in an election cycle, so as not to waste time and energy attempting forms of activism that experience proves are practically useless. Its github home, where this sub-project and a few others will eventually be integrated, is [sldev2/votersrevenge](https://github.com/sldev2/votersrevenge) . It is expected that the tool will also prove useful in non-US democracies. 

[sldev2/votersrevenge](https://github.com/sldev2/votersrevenge) lists all of the consituent sub-projects, including votersrevenge-messaging. 

Voter's Revenge has an informational wordpress site: [votersrevenge.info](https://www.votersrevenge.info/)

# Motivation for Voter's Revenge
These relate primarily to the voteslinger role: 
---
[Successful Fights Against Medical Tyranny Illustrate Voter's Revenge Strategy Is Correct](https://www.reddit.com/r/voters_revenge/comments/ptvnxd/successful_fights_against_medical_tyranny/)

[Negative Vote Blocs vs. Positive Vote Blocs – which could prove more disruptive in the near future?](https://www.votersrevenge.info/?p=14)

These relate primarily to the wrangler role:
---
NOTE: A politician who has recently been elected is probably immune to the direct electoral threats of voteslingers. Consider a US Senator, who has just been elected to a 6 year term... Hence, the need to go beyond just voteslingers.

[Why Obama And Democrats Don’t Do Much of What Liberals Want (Netroots Failure: Part 2)](https://www.ianwelsh.net/why-obama-and-democrats-dont-do-much-of-what-liberals-want-netroots-failure-part-2/?)

# votersrevenge-messaging

The starting point for this project is a working example of a slack clone

## status
```
As of 9/24/2021, some changes have been posted to this repo by the dev.

## errata
```
The spec originally called for nedb, but this has been abandoned in favor of mongoDb.

## Getting Started

1. Clone the repo
2. Run `npm i` to initial the repo
3. Run `npm run bootstrap` to install all the deps for the packages
4. Start both the UI & Server together with `npm start`