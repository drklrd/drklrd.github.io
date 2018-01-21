---
layout: post
title: When you dont understand enough
---


I had a difficult time with Asterisk server last Friday(January 19,2018). We were running an IVR(**_Interactive Voice Response_**) system with Asterisk and Digium TDM410P card on Ubuntu 16.04.The computer where Asterisk server was running went off and I had to restart the system. It was normally an easy process. Sometime the Dahdi stuff would mess-up and I had to recompile that( I dont know why but it was also an easy task following the guide we had prepared). But all of a sudden, the source failed to be compile. I kept on looking for solutions and it was quite frustating. I uninstalled and reinstalled the build tools may time, thought may be the whole system was corrupted, tried compiling the source in my own working machine(also Ubuntu 16.04) with similar errors. I did that in couple of our Digital Ocean instances with same error. Then there was this old Ubuntu 14.04 instance where the source showed some hope of compiling. 

While searching the net, I also found some JIRA issue that kind of read like 'Asterisk failing to compiling with some version of linix kernel'(read it here at https://issues.asterisk.org/jira/browse/DAHLIN-355) Now that was kind of interesting. So I dug of more into that story and later came to know that actually, the kernel header do matter while compiling. The system's(Asterisk server's and my own working machine too) linux kernel header were updated (to 4.13.0-26-generic, follow it here at https://www.kernel.org/) and the recent headers were not able to compile the Dahdi sources. So, after some 'Stack-Overflowing' I was able to boot the system with old linux kernel 4.10 (By pressing and holding shift while booting and selecting old kernel from Advance Ubuntu options) and without any further action, the LEDs on TDM410P were ON  and the Asterisk server was up and running again....

> **Realization** : I am using the linux system without actually understanding it. Its like living with a partner that you dont understand quite well(So start knowing more about her, or break-up!)
