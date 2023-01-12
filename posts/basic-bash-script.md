---
title: "How to write an executable bash script"
date: "2022-12-26"
description: "Learn how to write an executable bash script"
topic: "Bash"
thumbnail: "linux"
cover: "https://images.pexels.com/photos/4388096/pexels-photo-4388096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
---

If you are a linux user, chances that you have already came across a bash script is relatively high. Even if you have never written one your own, at some point you must have googled how to run that "dot.sh" file which you just downloaded from some website. Well, thats a bash script.

Bash is one great scripting language which you can use to communicate with your compouter thrugh a shell with ease. The "dot.sh" file which we just mentioned was also meant for the same purpose. These scripts contain set of instructions that your computer will execute, in the mentioned case executing a set of actions so as to install a certain application on your computer. Now that you have an idea of what exactly a bash script is, lets see how we can make use bash up next.

Obviously we wont be writing anything of a complexity that we just discussed, instead a damn simple script to that helped me to stop typing a command back to back. Before we get into the script, here are a couple of quick points to remember:

- A bash script is written and saved in .sh format, where sh being the shorthand of the word bash.
- Every bash script starts with !#bin/bash, which is bascially telling the system that its a bash script so use the bash binary to execute the program.

Now that you have the basics ready, lets create a bash script file, here Im creating the file with touch command and then opening it in my nvim text editor.

`touch script.sh 
nvim script.sh `
