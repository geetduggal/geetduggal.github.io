### **Tech Habits: Can you Johnny Decimal Without the Decimal?**

_A tiny experiment in stripping the numbers and keeping the structure and tiny experiments that have worked well for me vs. not._

![](https://cdn-images-1.medium.com/max/1600/0*xKRUEVz1YvGmac6a)

Photo by  [Markus Winkler](https://unsplash.com/@markuswinkler?utm_source=medium&utm_medium=referral)  on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

**_Short Update:_**  The last installment of Tech Habits called “[How I Moved Into My Johnny Decimal System](https://medium.com/@geetduggal/tech-habits-how-i-moved-into-my-johnny-decimal-and-obsidian-bases-system-for-organizing-notes-6bc7a00747e7)” was about embracing numerical IDs, constraints, and the joy of staking ground.

If you’ve been following my journey with Johnny Decimal, you know I was all in. The numerical prefixes, the rigid hierarchy, the sense of place. I genuinely believe that theres value to  `61.28 Bill`  over just  `Bill`  because of the memorability it affords.

As I’ve lived with it, I noticed something: the actual Johnny Decimal IDs (JIDs) not only clutter my file and directory names (a disadvantage mentioned earlier), most of what I like about Johnny Decimal (which is a whole lot) doesn’t really require the JIDs.

## The Tiny Experiment

I’m a fan of  [tiny experiments](https://nesslabs.com/book). They let you test ideas and learn without betting your entire system on them. So I am currently running one: what if I could have Johnny Decimal without the decimal, or JIDs to be precise?

Blasphemy?

What I realized recently is that most of what’s valuable in Johnny Decimal isn’t actually in the numbers. It’s the constraints. At most 10 areas. At most 10 categories per area. Files live in folders, not areas or categories directly. These structural rules are what make JD powerful, not necessarily the  `61.28`  prefix.

The numbers serve a few purposes: they encode order and can be used as an initial filter for folders of interest. But order is just data. And, crucially, that order can live in a file instead of in every single folder name.

## Archives.md as Source of Truth

The key insight came from realizing that I could maintain all the order information in a single index file:  `Archives.md`. Instead of encoding hierarchy in folder names like this:

60-69 Craft/
├── 61 Craft people/
│   ├── 61.28 Bill Bob/
│   └── 61.29 Sallie Chen/
└── 62 Craft projects/
    └── 62.07 Metrics Database/

I could keep clean folder names and store the structure in a simple nested list:

- [[Craft]]
  - [[Craft people]]
    - [[Bill Bob]]
    - [[Sally Chen]]
  - [[Craft projects]]
    - [[Metrics Database]]

The hierarchy is identical. The order is preserved. But now when I type a wikilink, I write  `[[Bill Bob]]`  instead of  `[[61.28 Bill Bob]]`. My searches return human names instead of cryptic codes. My file explorer and notes look like actual English.

And here’s the beautiful part: because the order lives in  `Archives.md`, I can regenerate the numerical IDs whenever I want. This isn't abandoning Johnny Decimal. It's making it reversible.

## What This Reveals About Experiments That Stick

Running this tiny experiment prompted me to reflect more broadly: across all the productivity tools and methods I’ve tried over the last few years, what actually stuck vs didn’t?

I went through my notes from previous Tech Habits posts and made two lists.

**What didn’t stick:**

-   Thino (Obsidian Memos plugin)
-   Ledger for plain text accounting
-   CSV files for project management
-   Classic Bullet Journaling
-   One Big Text File (OBTF)

**What stuck:**

-   iOS Shortcuts for quick capture
-   ‘Digital doodles’ and working memory techniques
-   Areas and Atlas journaling
-   Weather resistant productivity principles
-   Plain text with Obsidian and Kanban
-   Wikipedia style articles for spaces
-   Lists and calendar as primary interfaces
-   Capture in one place with mixed media
-   Interstitial journaling via voice
-   Notable Folders with Johnny-Decimal(ish) archives

## Why Thino Didn’t Stick

I wrote an  [entire love letter to Thino](https://medium.com/@geetduggal/it-was-love-at-first-sight-with-this-obsidian-plugin-0616630becf7)  when I discovered it. The plugin transforms your daily log entries into a beautiful “me feed” with timestamps tucked away, multimedia support, and excellent filtering.

So why did I stop using it?

Obsidian Kanban provided most of the functionality I wanted and the interface was even simpler and cleaner IMHO.

## Why OBTF Didn’t Stick

One Big Text File was  [everything I hoped for](https://medium.com/@geetduggal/27672f999949)  and more. The continuity across days, the frictionless transferability of information, the ability to scroll up and find everything exactly where I left it.

But it got unwieldy. 25,000+ lines became sometimes cumbersome to navigate, even with good tooling. And I found that the “one file” constraint was more philosophically satisfying than practically useful. I still capture everything in one place, but that place is now a folder of event notes rather than a single file.

Of all my experiments that ultimately didn’t lead to full time adoption, this one is the one I’ll most likely revisit somehow.

## Why Bullet Journaling Didn’t Stick (As Primary System)

At some point in 2024 I genuinely tried to see if  [physical notebooks can be my primary capture system](https://medium.com/@geetduggal/your-obsidian-workflow-is-missing-a-physical-notebook). I appreciated how my Bujo could serve as a companion for processing digital scraps, how it forced me to slow down and reflect.

But the reality is: I can’t capture a URL, a screenshot, or a voice memo in a physical notebook. Most of my information arrives digitally. Making paper the primary system created friction in the wrong direction.

What I kept from Bujo: the intentionality, the practice of migration, the pleasure of handwriting when I need to think slowly, and the high quality notebooks themselves! What I abandoned: the notion that physical should be primary for quick capture.

## Why Weather Resistant Productivity Stuck

On the other hand,  [weather resistant productivity](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068)  has become foundational to how I think about tools.

The core idea: select your essential tools the way a fantasy hero packs for a long journey. Your toolkit should be repeatable, durable, simple, seamless, and adaptable. You write down your workflows and iterate.

This stuck because it’s meta and simple. It’s not a specific tool or format. It’s a framework for evaluating tools and formats. When I encountered Johnny Decimal, I asked: “Is this weather resistant?” When I stripped out the decimals, I asked the same question.

## Why ‘Interstitial Voice Journaling’ Stuck

Of everything I’ve experimented with, interstitial journaling via voice might be the stickiest habit. I take walks with my dog. I talk into my phone. The transcription lands in my log.

Why does this work so well?

First, zero friction. Speaking is faster than typing. I can capture thoughts while walking, which is often when my best thinking happens.

Second, it’s multimedia capture that still produces searchable text. The audio file exists if I want it. But the transcription means I can find things later with plain text search.

Finally, it has been the primary way I sort out complex thoughts and as a bonus I stay physically active in the process.

## Why iOS Shortcuts Stuck

My  [quick capture shortcut](https://medium.com/@geetduggal/the-most-useful-ios-shortcut-for-obsidian-and-beyond-revisited-9692e62c993a)  has been in continuous use for years. Tap, speak or type, done. The thought lands in my daily log automatically prepended with a timestamp.

This is almost too simple to write about, but that’s exactly why it works. When I’m walking and remember I need milk, I don’t open an app, navigate to a list, and add an item. I just invoke Siri and say “Capture get milk.” Done.

The lesson:  **capture speed is everything**. If you can’t offload a thought in under 5 seconds, you’ll lose thoughts. Period.

## Why Lists and Calendar as Primary Stuck

Everything I need to do is either on a list or on my calendar. If it has a specific time I want to commit to, it goes on the calendar. If it’s a general task, it goes on a list that I review when planning. Lists can be as simple as a markdown file with items.

This stuck because it mirrors how my brain actually works. “What am I doing right now?” (check calendar). “What could I do next?” (check the calendar and scan lists). No complex task or project management software required.

The lesson:  **simpler primitives often beat sophisticated tools**. Lists and calendars have existed for centuries because they map to fundamental human needs: tracking what we need to do and when. Choose the most efficient, minimal, portable, and elegant setup to manage your lists and calendars together.

## What This Means for Johnny Decimal and my Notable Folders

Coming back to where we started: the JID experiment fits this pattern perfectly.

Johnny Decimal itself is a set of constraints that stuck: the 10 areas, 10 categories limit, the files in folders only rule. These mirror weather resistant principles. They’re simple, durable, adaptable.

The numerical prefixes, however, were an implementation detail that created friction quickly without sufficient benefit for my use case. The friction of typing/selecting  `61.28`  every time I mentioned Bill outweighed the benefit of having that number visible in my folder names.

The solution wasn’t to abandon Johnny Decimal. It was to extract the essential principles (hierarchy, constraints, order) and find a less friction full implementation (clean folder names with order stored in  `Archives.md`).

## The Reversible JD Toolkit

For those interested in the technical details, I created a Python script called  `manage-archives.py`  that can toggle between numbered and clean folder names:

# Remove Johnny Decimal IDs
python3 manage-archives.py remove-jids --archives-path ~/Archives

# Restore Johnny Decimal IDs from Archives.md order
python3 manage-archives.py restore-jids --archives-path ~/Archives

# Preview changes without applying them
python3 manage-archives.py remove-jids --dry-runThe script walks the directory tree, renames folders, updates all wikilinks throughout the vault, adjusts YAML frontmatter, and regenerates Archives.md. It's fully reversible because the ordering information is never lost, just stored differently.

AI tools made building this script remarkably quick. What would have been a tedious manual migration became an evening ‘mini’ half-hour project. i believe this is the future of productivity system evolution: use AI to automate the boring transformation work so you can focus on experimenting with the underlying principles.

## The Broader Pattern

Here’s what I think is really going on when we distinguish experiments that stick from those that don’t:

**Experiments that stuck optimize for the constraint that matters most.**  Voice capture optimizes for speed and natural input. Lists and calendars optimize for simplicity and practicality. Weather resistant productivity optimizes for durability. JD without decimals optimizes for making a comfortable home for my data long term while not sacrificing readability.

**Abandoned experiments optimize for the wrong constraint, or a constraint that wasn’t actually a problem.**  OBTF optimized for single file unity, but I didn’t actually have a “too many files” problem. Classic Bujo optimized for physical capture, but my inputs are mostly digital. Thino optimized for beautiful visualization, but Kanban Plus also had that and was simpler and more powerful at the same time.

The trick is knowing which constraint actually matters for your situation. This is why writing down your workflows (a core weather resistant practice) is so valuable. When you articulate what you’re optimizing for, you can evaluate whether a tool actually serves that goal.

## What’s Next

I’m continuing to run tiny experiments. The reversible JD approach has been working well so far. My folder names are clean. My wikilinks are readable. And I know I can restore the numerical prefixes anytime I want.

But I’m already wondering about the next iteration. How to make the workflow even simpler while focusing on the core principles of using plain text, lists, calendars, and notable folders? What role do templates have to play here? How do I more seamlessly capture and tell stories of what I do and who with through these simple and timeless tools?

These are motivation for tiny experiments for another day. And AI tools make them take only a half-hour or so to try out. For now, the lesson is clear: the best productivity systems are the ones you can evolve. Build reversibility into everything. Treat implementations as experiments. Let principles guide you, and don’t let any specific tool become sacred.

Even Johnny Decimal. 🏔️

----------

_Related posts:_

-   [How I Moved Into My Johnny Decimal System](https://medium.com/@geetduggal/tech-habits-how-i-moved-into-my-johnny-decimal-and-obsidian-bases-system-for-organizing-notes-6bc7a00747e7) — The original post about embracing JD
-   [Weather Resistant Productivity](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068) — The framework for evaluating tools
-   [Capture To Do](https://medium.com/@geetduggal/capture-to-do-d040e1bae4a6) — The original ALPS system
-   [This One Idea Changed the Way I Organized My Notes Forever](https://medium.com/@geetduggal/this-one-idea-changed-the-way-i-organized-my-notes-forever-f293371a0d5b) — Notable Folders and organizing around people----------

### **Tech Habits: Can you Johnny Decimal Without the Decimal?**

_A tiny experiment in stripping the numbers and keeping the structure and tiny experiments that have worked well for me vs. not._

![](https://cdn-images-1.medium.com/max/1600/0*xKRUEVz1YvGmac6a)

Photo by  [Markus Winkler](https://unsplash.com/@markuswinkler?utm_source=medium&utm_medium=referral)  on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)

**_Short Update:_**  The last installment of Tech Habits called “[How I Moved Into My Johnny Decimal System](https://medium.com/@geetduggal/tech-habits-how-i-moved-into-my-johnny-decimal-and-obsidian-bases-system-for-organizing-notes-6bc7a00747e7)” was about embracing numerical IDs, constraints, and the joy of staking ground.

If you’ve been following my journey with Johnny Decimal, you know I was all in. The numerical prefixes, the rigid hierarchy, the sense of place. I genuinely believe that theres value to  `61.28 Bill`  over just  `Bill`  because of the memorability it affords.

As I’ve lived with it, I noticed something: the actual Johnny Decimal IDs (JIDs) not only clutter my file and directory names (a disadvantage mentioned earlier), most of what I like about Johnny Decimal (which is a whole lot) doesn’t really require the JIDs.

## The Tiny Experiment

I’m a fan of  [tiny experiments](https://nesslabs.com/book). They let you test ideas and learn without betting your entire system on them. So I am currently running one: what if I could have Johnny Decimal without the decimal, or JIDs to be precise?

Blasphemy?

What I realized recently is that most of what’s valuable in Johnny Decimal isn’t actually in the numbers. It’s the constraints. At most 10 areas. At most 10 categories per area. Files live in folders, not areas or categories directly. These structural rules are what make JD powerful, not necessarily the  `61.28`  prefix.

The numbers serve a few purposes: they encode order and can be used as an initial filter for folders of interest. But order is just data. And, crucially, that order can live in a file instead of in every single folder name.

## Archives.md as Source of Truth

The key insight came from realizing that I could maintain all the order information in a single index file:  `Archives.md`. Instead of encoding hierarchy in folder names like this:

60-69 Craft/
├── 61 Craft people/
│   ├── 61.28 Bill Bob/
│   └── 61.29 Sallie Chen/
└── 62 Craft projects/
    └── 62.07 Metrics Database/

I could keep clean folder names and store the structure in a simple nested list:

- [[Craft]]
  - [[Craft people]]
    - [[Bill Bob]]
    - [[Sally Chen]]
  - [[Craft projects]]
    - [[Metrics Database]]

The hierarchy is identical. The order is preserved. But now when I type a wikilink, I write  `[[Bill Bob]]`  instead of  `[[61.28 Bill Bob]]`. My searches return human names instead of cryptic codes. My file explorer and notes look like actual English.

And here’s the beautiful part: because the order lives in  `Archives.md`, I can regenerate the numerical IDs whenever I want. This isn't abandoning Johnny Decimal. It's making it reversible.

## What This Reveals About Experiments That Stick

Running this tiny experiment prompted me to reflect more broadly: across all the productivity tools and methods I’ve tried over the last few years, what actually stuck vs didn’t?

I went through my notes from previous Tech Habits posts and made two lists.

**What didn’t stick:**

-   Thino (Obsidian Memos plugin)
-   Ledger for plain text accounting
-   CSV files for project management
-   Classic Bullet Journaling
-   One Big Text File (OBTF)

**What stuck:**

-   iOS Shortcuts for quick capture
-   ‘Digital doodles’ and working memory techniques
-   Areas and Atlas journaling
-   Weather resistant productivity principles
-   Plain text with Obsidian and Kanban
-   Wikipedia style articles for spaces
-   Lists and calendar as primary interfaces
-   Capture in one place with mixed media
-   Interstitial journaling via voice
-   Notable Folders with Johnny-Decimal(ish) archives

## Why Thino Didn’t Stick

I wrote an  [entire love letter to Thino](https://medium.com/@geetduggal/it-was-love-at-first-sight-with-this-obsidian-plugin-0616630becf7)  when I discovered it. The plugin transforms your daily log entries into a beautiful “me feed” with timestamps tucked away, multimedia support, and excellent filtering.

So why did I stop using it?

Obsidian Kanban provided most of the functionality I wanted and the interface was even simpler and cleaner IMHO.

## Why OBTF Didn’t Stick

One Big Text File was  [everything I hoped for](https://medium.com/@geetduggal/27672f999949)  and more. The continuity across days, the frictionless transferability of information, the ability to scroll up and find everything exactly where I left it.

But it got unwieldy. 25,000+ lines became sometimes cumbersome to navigate, even with good tooling. And I found that the “one file” constraint was more philosophically satisfying than practically useful. I still capture everything in one place, but that place is now a folder of event notes rather than a single file.

Of all my experiments that ultimately didn’t lead to full time adoption, this one is the one I’ll most likely revisit somehow.

## Why Bullet Journaling Didn’t Stick (As Primary System)

At some point in 2024 I genuinely tried to see if  [physical notebooks can be my primary capture system](https://medium.com/@geetduggal/your-obsidian-workflow-is-missing-a-physical-notebook). I appreciated how my Bujo could serve as a companion for processing digital scraps, how it forced me to slow down and reflect.

But the reality is: I can’t capture a URL, a screenshot, or a voice memo in a physical notebook. Most of my information arrives digitally. Making paper the primary system created friction in the wrong direction.

What I kept from Bujo: the intentionality, the practice of migration, the pleasure of handwriting when I need to think slowly, and the high quality notebooks themselves! What I abandoned: the notion that physical should be primary for quick capture.

## Why Weather Resistant Productivity Stuck

On the other hand,  [weather resistant productivity](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068)  has become foundational to how I think about tools.

The core idea: select your essential tools the way a fantasy hero packs for a long journey. Your toolkit should be repeatable, durable, simple, seamless, and adaptable. You write down your workflows and iterate.

This stuck because it’s meta and simple. It’s not a specific tool or format. It’s a framework for evaluating tools and formats. When I encountered Johnny Decimal, I asked: “Is this weather resistant?” When I stripped out the decimals, I asked the same question.

## Why ‘Interstitial Voice Journaling’ Stuck

Of everything I’ve experimented with, interstitial journaling via voice might be the stickiest habit. I take walks with my dog. I talk into my phone. The transcription lands in my log.

Why does this work so well?

First, zero friction. Speaking is faster than typing. I can capture thoughts while walking, which is often when my best thinking happens.

Second, it’s multimedia capture that still produces searchable text. The audio file exists if I want it. But the transcription means I can find things later with plain text search.

Finally, it has been the primary way I sort out complex thoughts and as a bonus I stay physically active in the process.

## Why iOS Shortcuts Stuck

My  [quick capture shortcut](https://medium.com/@geetduggal/the-most-useful-ios-shortcut-for-obsidian-and-beyond-revisited-9692e62c993a)  has been in continuous use for years. Tap, speak or type, done. The thought lands in my daily log automatically prepended with a timestamp.

This is almost too simple to write about, but that’s exactly why it works. When I’m walking and remember I need milk, I don’t open an app, navigate to a list, and add an item. I just invoke Siri and say “Capture get milk.” Done.

The lesson:  **capture speed is everything**. If you can’t offload a thought in under 5 seconds, you’ll lose thoughts. Period.

## Why Lists and Calendar as Primary Stuck

Everything I need to do is either on a list or on my calendar. If it has a specific time I want to commit to, it goes on the calendar. If it’s a general task, it goes on a list that I review when planning. Lists can be as simple as a markdown file with items.

This stuck because it mirrors how my brain actually works. “What am I doing right now?” (check calendar). “What could I do next?” (check the calendar and scan lists). No complex task or project management software required.

The lesson:  **simpler primitives often beat sophisticated tools**. Lists and calendars have existed for centuries because they map to fundamental human needs: tracking what we need to do and when. Choose the most efficient, minimal, portable, and elegant setup to manage your lists and calendars together.

## What This Means for Johnny Decimal and my Notable Folders

Coming back to where we started: the JID experiment fits this pattern perfectly.

Johnny Decimal itself is a set of constraints that stuck: the 10 areas, 10 categories limit, the files in folders only rule. These mirror weather resistant principles. They’re simple, durable, adaptable.

The numerical prefixes, however, were an implementation detail that created friction quickly without sufficient benefit for my use case. The friction of typing/selecting  `61.28`  every time I mentioned Bill outweighed the benefit of having that number visible in my folder names.

The solution wasn’t to abandon Johnny Decimal. It was to extract the essential principles (hierarchy, constraints, order) and find a less friction full implementation (clean folder names with order stored in  `Archives.md`).

## The Reversible JD Toolkit

For those interested in the technical details, I created a Python script called  `manage-archives.py`  that can toggle between numbered and clean folder names:

# Remove Johnny Decimal IDs
python3 manage-archives.py remove-jids --archives-path ~/Archives

# Restore Johnny Decimal IDs from Archives.md order
python3 manage-archives.py restore-jids --archives-path ~/Archives

# Preview changes without applying them
python3 manage-archives.py remove-jids --dry-runThe script walks the directory tree, renames folders, updates all wikilinks throughout the vault, adjusts YAML frontmatter, and regenerates Archives.md. It's fully reversible because the ordering information is never lost, just stored differently.

AI tools made building this script remarkably quick. What would have been a tedious manual migration became an evening ‘mini’ half-hour project. i believe this is the future of productivity system evolution: use AI to automate the boring transformation work so you can focus on experimenting with the underlying principles.

## The Broader Pattern

Here’s what I think is really going on when we distinguish experiments that stick from those that don’t:

**Experiments that stuck optimize for the constraint that matters most.**  Voice capture optimizes for speed and natural input. Lists and calendars optimize for simplicity and practicality. Weather resistant productivity optimizes for durability. JD without decimals optimizes for making a comfortable home for my data long term while not sacrificing readability.

**Abandoned experiments optimize for the wrong constraint, or a constraint that wasn’t actually a problem.**  OBTF optimized for single file unity, but I didn’t actually have a “too many files” problem. Classic Bujo optimized for physical capture, but my inputs are mostly digital. Thino optimized for beautiful visualization, but Kanban Plus also had that and was simpler and more powerful at the same time.

The trick is knowing which constraint actually matters for your situation. This is why writing down your workflows (a core weather resistant practice) is so valuable. When you articulate what you’re optimizing for, you can evaluate whether a tool actually serves that goal.

## What’s Next

I’m continuing to run tiny experiments. The reversible JD approach has been working well so far. My folder names are clean. My wikilinks are readable. And I know I can restore the numerical prefixes anytime I want.

But I’m already wondering about the next iteration. How to make the workflow even simpler while focusing on the core principles of using plain text, lists, calendars, and notable folders? What role do templates have to play here? How do I more seamlessly capture and tell stories of what I do and who with through these simple and timeless tools?

These are motivation for tiny experiments for another day. And AI tools make them take only a half-hour or so to try out. For now, the lesson is clear: the best productivity systems are the ones you can evolve. Build reversibility into everything. Treat implementations as experiments. Let principles guide you, and don’t let any specific tool become sacred.

Even Johnny Decimal. 🏔️

----------

_Related posts:_

-   [How I Moved Into My Johnny Decimal System](https://medium.com/@geetduggal/tech-habits-how-i-moved-into-my-johnny-decimal-and-obsidian-bases-system-for-organizing-notes-6bc7a00747e7) — The original post about embracing JD
-   [Weather Resistant Productivity](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068) — The framework for evaluating tools
-   [Capture To Do](https://medium.com/@geetduggal/capture-to-do-d040e1bae4a6) — The original ALPS system
-   [This One Idea Changed the Way I Organized My Notes Forever](https://medium.com/@geetduggal/this-one-idea-changed-the-way-i-organized-my-notes-forever-f293371a0d5b) — Notable Folders and organizing around people
