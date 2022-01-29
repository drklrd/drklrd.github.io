---
title: "When you don’t understand enough"
date: 2018-01-21T10:18:17+05:45
draft: false
---

I had a difficult time with Asterisk server last Friday (January 19th ,2018). We were running an IVR (**_Interactive Voice Response_**) system with Asterisk and Digium TDM410P card on Ubuntu 16.04. The computer where Asterisk server was running went off and I had to restart the system. It was normally an easy process. Sometime the Dahdi configuration would mess-up and I had to recompile that (At that time, I didn't know why it needed to be recompiled, but it was also an easy task following the guide we had prepared). But all of a sudden, the source failed to compile. I kept on looking solutions for hours and it was quite frustrating.

I uninstalled and reinstalled the build tools many time. I thought may be the whole system was corrupted and tried compiling the source in my own working machine (also Ubuntu 16.04) with similar errors. I did that in couple of our Digital Ocean instances with same error (just to make sure if this occurs in all system). Then there was this old Ubuntu 14.04 instance where the source showed some hope of compiling.

While searching, I also found some JIRA issue that read something like ‘Asterisk failing to compiling with some version of Linux kernel (read it here at https://issues.asterisk.org/jira/browse/DAHLIN-355). Now that was kind of interesting. So I dug more into that story and later came to know that actually, the Linux kernel header does matter while compiling. The system’s (Asterisk server’s and my own working machine too) Linux kernel header were updated (to 4.13.0–26-generic, follow it here at https://www.kernel.org/) and the recent headers were not able to compile the Dahdi sources. So, after some ‘Stack-Overflowing’ I was able to boot the system with old Linux kernel 4.10 and without any further action, the LEDs on TDM410P were ON, Asterisk server was up and running again, and my face was glowing with accomplishment! :)

> **Realization** : I was (am) using the Linux system without actually understanding it.
