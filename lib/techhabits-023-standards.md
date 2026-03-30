# Tech Habits: 'Ditching' Digital Capture and Why Claude Hasn't Killed Obsidian for Me

![Photo by freestocks on Unsplash](https://miro.medium.com/photos/unsplash)

There's a growing conversation in PKM circles about whether AI has made the shopping obsession with note-taking apps obsolete. ICOR with Tom, a YouTube channel I follow, has been making an increasingly compelling case that Claude Code plus a few plain text conventions can replace Obsidian and most journaling apps entirely. The argument is seductive: why rely on an app when you can have an AI build you exactly the interface you need?

I think Tom is onto something important. BUT I also think the framing misses something.

This post is about that something. And somewhat unintuitively about a related shift in my own workflow: I've mostly stopped using digital capture as my default inbox. Not because I went full analog, but because I finally understood what kind of friction is actually useful.

Until now, my default capture was decidedly digital. Anything from tasks, images, thoughts, ideas would go into my plain text capture system. What changed for me was the Pocket Bullet Journal, which I wrote about in a previous installment. Handwriting imposes a small but real cost. When you write something down on paper, you've already made a micro-decision: this is worth the physical effort. A feature that the inventor of the Bullet Journal method also emphasizes.

My default capture now leans heavily toward pen and paper for tasks, intentions, and quick thinking. Digital capture still handles images, screenshots, and anything that needs to live in a searchable system. But for anything that needs a little more love, the pocket journal has become my first stop and I review the digital pile approximately weekly.

This matters for what comes next because for the pocket journal's success is not just about analog versus digital. It's about understanding what role a tool is actually playing and why.

When Tom argues you can ditch your favorite hyped note taking tool for Claude Code plus a SQLite database, he's making a good point about app dependency. But here's what I'd add: he's not actually ditching tools for AI. He's swapping one set of tools for another that AI often selects for you.

In a coupla his videos, you will see that Claude builds a stack that uses SQLite: a well-established, lightweight database interface to the SQL standard that's been around a long time. Claude also regularly uses markdown 'standard' for text and other plain text conventions as a part of its DNA.

For the purposes of this post, standards are the conventions that, through evolutionary success, survive across applications. Examples include markdown, YAML front matter, SQL, docx, and even the Bullet Journal's rapid logging syntax. These don't belong to any single app or interface. A markdown file written in Obsidian opens fine in VS Code, in a text editor, in a Claude Code session. YAML front matter is an unspoken standard that enough tools respect to make it essentially portable. The tick-style timestamp notation I've written about before sits in this category too: a simple convention that any future tool can interpret without needing much special treatment.

And interfaces, for the purposes of this post, are the applications and UX layers that sit on top of those standards. Obsidian is an interface. VS Code is an interface. The Pocket Bullet Journal is an interface. A custom Claude Code tool built on SQLite is an interface. These are the things you actually touch, and their job is to make working with your underlying conventions faster, clearer, and/or more directly useful to solving your problem.

This matters because when you're deciding how to incorporate tools into your workflow, the question changes from "should I use Obsidian or Claude Code to manage notes?" to "which interface gives me the best experience on top of the conventions I already care to rely on?"

For me, Obsidian's interface delivers and is fundamentally a solid plain text editor for reasons I won't get into in this post. Claude is unlikely to change that fact. To top it off, the forked modules I've vibe-coded serve as more customized interfaces on standard ways to represent that are still generally useful. The Full Calendar Plus plugin gives me a linear calendar year view of my daily notes in a way that works perfect for my workflow and is general enough to be used by others. Kanban Plus is spiritually similar. It lets me manage lists across files in a way that fits how I think. Both sit on top of markdown and YAML front matter, so the underlying data is portable if I ever need it elsewhere.

It is notable that even the most bespoke AI-generated hyper-customized interface is likely using some standards and/or highly adopted interfaces underneath. Tom's Claude Code solution uses a SQLite interface. My forked plugins use YAML front matter and markdown standards. Both are standing on the shoulders of well-tested conventions.

You can also think of it as a spectrum. At one end you have a completely custom interface built for exactly one person's workflow, solving one specific problem with near-zero reliance on well-known interfaces or standards. At the other end: interfaces like VS Code or a JIRA/Linear ticketing system are widely used and battle-tested enough that that they are de-facto standards for their respective categories.

My pocket journal sits near the custom end. It is based on the 'standard' bullet journal notation structure, but there are additions I add that are specific to my life, my ALPPS framework, my daily highlight practice. Tom's custom Claude Code journaling interface is similar: powerful and precise for his use case, and still built atop well adopted standards and interfaces.

My Obsidian plugins are a step toward the generalizable end. Kanban Plus and Full Calendar Plus solve problems I had, but they're also published and usable by others. They're modules that solve a reasonably common problem in a reasonably portable way.

Linear, the project management tool, is further still. It's solved the ticketing problem well enough that building your own version with Claude Code probably isn't worth the deviation from convention, even in a world where you could spin up a reasonable facsimile in an afternoon. To butcher my definitions a bit, the interface has become standard enough to treat like a standard.

What AI changes here is not the logic of this spectrum. It changes the cost of entry. It used to be that only developers could build bespoke interfaces. Now anyone with an hour and some patience can vibe-code an Obsidian plugin or have Claude Code build them a custom journaling tool. This is great. It means the middle of the spectrum opens up in ways it never was before. This also raises the bar for any interface to become widely adopted since it has to provide a battle-tested value-add that you can't vibe code in a night while watching Netflix.

However, more options at a lower cost doesn't change the overarching question you need to ask:

How custom does this need to be, and am I willing to absorb the portability tradeoff that comes with moving away from widely-adopted conventions?

I've settled on asking three questions when I'm evaluating a tool or considering whether to build something new.

First: is this problem already well-solved by something at the standard end of the spectrum? If yes, think hard before deviating. VS Code is excellent. Linear solves ticketing. The bullet journal notation is tried and true. You might have good reasons to diverge, but you should be aware you're making a tradeoff.

Second: is this problem specific enough to my workflow that no existing tool fits? This is where building something custom earns its keep. The linear calendar view in Obsidian didn't exist before I made it, and it truly changed how I plan and reflect. Tom's custom journaling interface probably does the same for him. These are cases where the portability tradeoff is worth paying.

Third: will this live at the interface layer or the standard layer? A new interface is fine to keep custom. A new standard is a much bigger commitment. If you're inventing new conventions for how your data is structured, you're betting that you or your future tools will always be able to interpret them. The more you can anchor to existing standards (markdown, YAML, SQL, established notation systems), the lower the long-term maintenance burden. And I still love Ellane W's Three Levels of Plain Text Productivity when thinking about plain text interfaces and standards.

What AI changes is not the answers to these questions. It changes how cheap it is to build a custom solution that directly fits your needs. The framework for evaluating whether to keep it, generalize it, or let it go remains the same.

The pocket journal stuck because I understood what job it was doing: an interface on top of a standard rapid logging notation that introduces useful friction to the capture layer (noting that it is not replacing my digital capture system entirely). The Obsidian plugins stuck because the interface earns its keep on top of portable conventions. Tom's approach will stick for the same reason: it's not actually abandoning standards, it's just choosing a different interface.

Understanding the layers doesn't tell you what tools to use. But it does make you a more intentional shopper.

Till next time. 🏔️
