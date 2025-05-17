# Tech Habits: One Big Text File (OBTF) meets Obsidian, & Messaging Apps, and AI

[](https://medium.com/@geetduggal?source=post_page---byline--e12909bf571c---------------------------------------)

![Geet Duggal](https://miro.medium.com/v2/resize:fill:64:64/0*NUf7cKjbrdEqk8cC.)

[Geet Duggal](https://medium.com/@geetduggal?source=post_page---byline--e12909bf571c---------------------------------------)

5 min read

·

Just now

# Plain Text is More Simpler and Powerfuler than Ever

Last Thanksgiving I had a realization: I like apps on my phone that use badge counts to tell me what I need to do. Think Todoist or Mail notifications. I just can’t help myself: I’m compelled to click and clear them. But I also love how I keep all my stuff in simple plain text files: my One Big Text File (OBTF ), Obsidian Kanban, etc. Those files contain all kinds of info about what I need to do. The problem is: no badge counts.

Then, just last weekend, another insight hit me: most obligations and next actions for projects arise from conversations. That could be conversations with myself, an AI chatbot, or (most of the time) with other people. More specifically, the messages I  _send_  usually tie back to things I need to do. But I find myself manually scraping that info into my task tracker.

These are just two examples where a few simple tools — plain text, AI, and local automations — have made my life more fun and easier to manage. So in this post, I wanted to quickly walk through how I used an AI coding assistant to solve both problems and tie together various iOS apps and Obsidian with my OBTF.

Crucially, I’m not sending any of my data to a cloud-based AI provider. I understand the appeal of cloud integration, but I’m more interested in improving my  _own_  user experience than outsourcing insight generation.

# Example 1: Badge Counts for Text-Based Tasks

I want the  _feeling_  of badge counts I get from other apps, but applied to tasks that I know matter for me. Sure, seeing the number of unread messages or emails is helpful. But what I  _really_  want to see is the number of meaningful, immediately actionable tasks. I know that these are efforts that would actually move the needle and give me that feeling of deep satisfaction.

For example, apps like Todoist or Reminders come close, but they’re too prescriptive. Todoist shows me the number of uncompleted tasks for  _today_. But I also care about tasks from  _previous_  days, and often I want to see those in a specific context like a project note in my OBTF.

Knowing that I follow a pretty simple convention in my inbox file (e.g., a certain character flag for actionable items), I spent about two hours with ChatGPT as my assistant and built a tiny app. It parses my text files, counts the actionable items, and shows a clean native iOS badge count — all based on local files. No cloud. No third-party integrations. No Swift experience required.

![](https://miro.medium.com/v2/resize:fit:2544/1*zDYPGJwS_x_HHD8vS4qTzQ.png)

Now, I can glance at my phone and  _see_  how many tasks matter. And the number goes down as I knock them off — in the medium I love most: plain text. That feeling is good.

# Example 2: Messages as Task Generators

I use lots of messaging apps every day — WhatsApp, Messages, Slack, etc. I noticed that  _sent_  messages often represent tasks or motivate them. A quick note via WhatsApp to my wife about Yosemite plans about charging the car? Suddenly I have a follow-up task. A Slack DM about a code snippet with an image? That’s the beginning of a new obligation to help review the code.

I used to review my sent messages manually and copy tasks out. Now, I asked my coding assistant to help me write a simple script. It listens for keystrokes in certain apps and captures a screenshot when I hit send. It appends both the message and the image path to my OBTF for more context.

![](https://miro.medium.com/v2/resize:fit:3968/1*g5Nu5DxL7ZylWMIX5_VILA.png)

That extra context is key. It lets me trace back to where a task  _began_. Having this info in a single, reliable, backed-up place gives me peace of mind. Especially since any of these apps can delete messages or lose history at any moment.

This level of automation normally would’ve taken a lot longer to develop few years ago. But with AI, it’s feasible in an afternoon. I don’t have to contort my needs to fit some polished app. I can tailor the workflow exactly to my own brain.

# A Note on “Vibe Coding” and OBTF

One thing I’m convinced about: the bar for a “good enough” app or module has likely gone up. With an AI coding assistant, you can quickly test what works, get immediate value, and decide later if it’s worth building into a full product. This is one of the “pros” of “[vibe coding](https://en.wikipedia.org/wiki/Vibe_coding)”: explore, iterate, and  _feel_your way into the workflow.

If it works for you now, great. If others benefit later, great. You don’t have to build the next mini startup just to solve your own workflow problems. AI is therefore helping us to better and more efficiently build things  _for ourselves_, by ourselves.

What I like about vibe coding in the context of an OBTF is that they are well suited for one another. My OBTF serves as a flexible canvas to think about problems in my own confort zone and store all the associated data. AI models help me quickly create custom ‘helper code’ to augment what I store in this file. Because both mediums are so free-form, the possibilites are endless but ultimately constrained by thinking clearly about what I  [truly intend to do](https://medium.com/@geetduggal/a-no-code-ish-approach-for-using-obsidian-ai-to-process-your-notes-the-way-you-want-50714ceaf9c3)  with problems I’m trying to solve.

# Stay Tuned

In the next few posts, I’ll follow up on:

-   A Thousand Words: Why my collected  _imagery_  — and tools that work with it — matter.
-   How I’m evolving my BuJo daily page to stay grounded in my day without being too rigid
-   A few truths about productivity that hold regardless of which tools you use

‘Till next time, be thoughtful about your workflows, keep your mind clear of clutter, and let your badge counts be more satisfying than ever. 🏔️
