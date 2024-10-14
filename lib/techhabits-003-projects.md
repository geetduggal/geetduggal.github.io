
# Tech Habits: Managing Project Lists in Plain Text Files and Obsidian

## _Also: living that comma-separated life: Obsidian’s strengths and limits!_

Welcome to the third installment of Tech Habits. I want to dig a little deeper into some practical tooling I use for managing projects in Obsidian.

## Motivation to refine the way I manage projects

I currently manage projects as a part of my ‘[Capture to Do](https://medium.com/@geetduggal/capture-to-do-d040e1bae4a6)’ (💿) workflow. In the article I just linked to, I introduce the ‘ALPS’ (Archives, Log, Projects, Spaces) approach I use for organizing all sorts of information from a working memory of daily captured thoughts to curated personal knowledge over time. I have since discussed ‘Spaces’  [in some depth](https://medium.com/@geetduggal/want-extraordinarily-useful-and-timeless-notes-build-a-personal-knowledge-encyclopedia-bc8b7fb09829), but now feels like the right time to give ‘Projects’ some ❤️.

![](https://miro.medium.com/v2/resize:fit:1400/1*qfpb3ugOl1ULTWvEz5ZWxA.png)

Image from  [Personal Knowledge Encyclopedia article](https://medium.com/@geetduggal/want-extraordinarily-useful-and-timeless-notes-build-a-personal-knowledge-encyclopedia-bc8b7fb09829)  which describes how I manage my Spaces in more detail.

I typically manage my list of active projects in a simple way: they’re just a set of directories (one directory per project). Each directory can be thought of as a sort-of ‘shoebox’ of files relevant to the project, and when the project is done it is ‘archived’. This approach has worked well for a couple of years and  **I purposely wanted to keep it simple**. I have tried more complex ‘Trello / Kanban’ approaches and even a database of projects in Notion in the past, but in the end it felt like overkill and extra overhead I found it difficult to manage over time.

However, as I’ve become comfortable with this simpler approach, a few limitations have motivated me to graduate to a more sophisticated system. In my previous system it was difficult to:

1.  capture and revisit ideas I jotted down (eg. ideas naturally placed in a ‘backlog’, or ‘someday/maybe’ list)
2.  properly manage work in larger projects simultaneously with ‘administrative’ or smaller tasks that may not correspond to any project, and
3.  address obligations that needed clarification or that I was waiting on someone else for important information.

## The '`projects.csv’`  experiment

Given the criteria above, it would be natural to use a task manager like Reminders or Todoist, or a Kanban/board system like Trello, or a database-oriented system that subsumes either like in Notion. After all, what I’m really looking to do is manage projects or obligations from a birds-eye view  **in one place.** In the  `projects.csv`  experiment, each project or obligation has these properties:

-   Name
-   Target timeframe for completion
-   My chief collaborator / partner-in-crime (if not myself)
-   Context or space in which it is naturally categorized
-   Current status (eg. waiting on someone else, just an idea, archived)
-   Approximate ‘T-Shirt’ size for how large the effort will be, and
-   Supporting material / notes.

In Todoist or Reminders, I could group projects or obligations into lists by status or by the collaborator I am working with. For example: all obligations I have related to a colleague I work with on one or more projects can be under one list so I can quickly refer to those important items when working with that person. Or I could use an application like Trello and each project can fall under a particular column that corresponds to its status. In Notion, I could literally create a database/table with columns corresponding to the bullet points above and visualize them in many ways (including a Trello-like board).

For this experiment, I represent this table as one deliciously simple  [comma-separated-values](https://en.wikipedia.org/wiki/Comma-separated_values)  (CSV) file called  `projects.csv`. CSV files are in plain text, are relatively easy to read, and portable (eg. not unique to Obsidian, Notion, …). They can also be used, imported, and exported with  [myriad tools](https://github.com/secretGeek/AwesomeCSV): everything from a simple text editor to spreadsheet programs to relational databases.

I will re-iterate that this is the one place that serves as the source of truth for all my obligations and ideas. It is different from my daily log.

My daily log is a place for quick capture. it serves as a working memory, history of ideas and thoughts that resonate with me.

Each of the items in my log can be thought of as a quick task to process.

Process = decide where (if it all) it will go in my  `projects.csv`  file.

Supporting materials for any obligation or project in  `projects.csv`  are in a corresponding eponymously-named directory.

As mentioned in 💿, “ … nothing I say here is terribly original. Except it is. It’s my take with its own unique twist that may or may not resonate with you.” For example, the idea of context-specific lists and a single master project list with supporting material harkens back to David Allen’s classic  _Getting Things Done_:

> Getting an inventory of all those things, complete, current, and clear for yourself, and acquiring the habit of maintaining it that way, could be one of the most valuable things you do to enable stress-free productivity … Projects don’t often show up in nice, neat packages. They start as what seems a simple situation, communication, or activity, but they slowly morph into something bigger than you expected. … Most people find that one list is the best way to go because it serves as a master inventory rather than a daily prioritizing guideline. — David Allen, Getting Things Done

So let’s dig just a little deeper into this remix. I will briefly walk through each field one-by-one. I will place it in the context of existing suggestions. Finally, I’ll illustrate its power in the context of  `projects.csv`.

-   📽️  **Name**. This seems very basic but there’s a bit to unpack here. The first is that this list should be an easily-glanceable list of project names. The names should therefore be just a few words at most and quickly jog the memory. Importantly, they should be refered to by the the  _exact same name_  across any tool or medium outside the CSV file.

> I recommend doing so down to the exact same spelling, punctuation, and capitalization so that you can mentally transition between platforms as seamlessly as possible. — Tiago Forte, The PARA Method

-   📆  **Target**  timeframe for completion. This is not meant to be an exact due date, but a target you are aiming for. Crucially, it serves the purpose of ordering your project list in time so you can quickly surface the most urgent obligations. It also serves as a way to plan on broader timescales such as monthly or quarterly.
-   💁  **Who:** my chief collaborator / partner-in-crime. This is perhaps the most important field. In any given obligation list there is ideally someone you have clearly identified that will help you achieve this obligation. Sometimes that person is yourself, other times everyone will best be served if you have a partner-in-crime. There are the occassional gems where you’ve worked on a project start-to-end without any significant external collaboration or involvement, but I’d wager that most projects that we are all proud of and that are the most memorable in terms of their lasting impact involve a collaboration. The deepest of those tend to occur in pairs. The ‘Who’ in this field is meant to encode the other person in the pair for this project even if it is you that is doing the legwork.

> A much better question is: “Who can help me achieve this? … Relationships are how you transform as a person. Relationships are how you transcend your current limitations. Relationships are how you produce results. Relationships are the purpose of life. … In Transformational Relationships, all parties give more than they take. There is an abundance mind-set, and an openness to novelty and change. Rather than viewing people or services as a “cost,” as in the transactional mind-set, everything is viewed as an investment …. — Dan Sullivan, Who Not How

-   🔲 Context or  **Space**  in which it is naturally categorized. This field serves mostly to help categorize your tasks by context. For example, all tasks related to your family, or a certain kind of errands, etc. In the PARA method this may correspond to an area of responsibility, or in Steven Covey’s classic  _Seven Habits of Highly Effective People_  this may correspond to one of your roles. I think this is one of the more personally-defined and flexible fields depending on whats useful.
-   🚦 Current **Status.** This is an important enough field that it was the motivation for me to refine my current system.
    🟢 Ready. For practical purposes having a list of directories for active projects is essentially a ‘ready to work on’ or ‘in progress’ indicator. This status formally encodes an active project: directory or not.
    💡 Idea. The ‘someday/maybe’ / ‘backlog’ capture-all status. It’s not as sloppy as a daily log entry, but not as refined as a full-fledged project. It’s a great placeholder for managing primordial projects.
    ⏳ Waiting. A couple of my personal projects lately had issues where something slipped through the cracks solely because I wasn’t keeping good track of balls thrown in other courts and who to follow up with. This is the real motivation behind this status and is something that is also promoted in  _Getting Things Done_  and its spiritual or more modern successors.
    🧐 Clarify. This is pulled straight from Cal Newport’s excellent  _Deep Questions_  podcast. I have found it recently very useful to flag which projects indeed need clarification so I can get ahead of the game and make sure the balls stay rolling.
    🗄️ Archived and ❌ Rejected simply to keep track of what has been complete or dismissed.
-   👕 Approximate ‘T-Shirt’  **Size**  for how large the effort will be (Small, Medium, or Large). This is a subtly important field. On the surface, it seems useful to see big vs small tasks and pack tasks in your day appropriately. For me, the combination of this with  **Who**  actually helps  _define_  a project or obligation. To illustrate this point, you may have noticed that I have used the word obligation somewhat interchangeably with project. I don’t intend for them to be treated completely as the same, but I am borrowing Cal Newport’s terminology and I think that the scope of a lot of projects can be greatly clarified, when thought of as obligations. For example, a large project may naturally be thought of as two smaller projects with two different partners-in-crime: people you may even be obliged to for the project in some way. In  `projects.csv`-land, it is encouraged to treat these as separate but related projects with no further hierarchy explicitly encoded in the project list. There is just one master project list.
-   📒 Supporting material /  **Notes**. Anything from a few words or sentences that describe the project and reference supplementary information.

## Tools I’m experimenting with

There’s a paradox of choice associated with the ability to choose so many tools to do this job. For writing CSVs, one criterion (at least for the moment) for me is to be able to  _directly_  edit the CSV file as opposed to edit in another format and export. For reading CSVs, I am pretty flexible.

-   **Vi**. It is after all a straightforward plain text editor and a direct way to edit a CSV file and a part of my  [weather resistant toolkit](https://medium.com/@geetduggal/2a90c4357068).
-   [**Modern CSV**](https://www.moderncsv.com/). This is by far the best MacOS editor for CSVs that I know of. It operates kinda like a spreadsheet, but can perform a lot of handy operations that are quite powerful. It also has loads of keyboard shortcuts.

![](https://miro.medium.com/v2/resize:fit:1400/1*DsmDEh5L6SiG_VUrwIZjHg.png)

ModernCSV

-   [**Easy CSV Editor**](https://vdt-labs.com/easy-csv-editor/). This is by far my favorite CSV editor for iOS. It is like Modern CSV’s counterpart.

![](https://miro.medium.com/v2/resize:fit:1400/1*kpGeVufHfoTGjGfGFMJPfg.png)

EasyCSV

-   [**Obsidian Dataview**](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dviocsvpath-origin-file). While Obsidian is not really a great choice for editing CSV files directly it is a powerful ally when reading CSV files and connecting data within them to other knowledge in your vault. This module has a nice plugin to be able to read CSVs as a table queryable in SQL-like ways. For example, here is a common view I use:

```dataview
table without id link(Name), Target, link(Who), Space, Status, Size, Notes
from "Projects/projects.csv"
where Name
where Status != "Archived"
where Status != "Idea"
sort Space asc
sort Status asc
sort Target asc
```

## Housekeeping

Although generally, my hope is I make a habit out of reviewing this on the timescale of days, weeks, and quarters/seasons with different levels of depth, I don’t want to enforce that going in. I like the idea of finding natural times between sprints or bursts of working on projects at each of these time scales to review the projects list and course-correct as needed. For example, even within the scale of a day, I may be inspired to look at this list after I have exhausted my efforts on a major project I’m working on and need a break, or have 15 or so minutes to spare. I call this  _modus operandi_  ‘keeping an executive mindset during interstitial periods’.

Finally, some random Tech Habits teasers: I haven’t forgotten about a number of upcoming longer articles including but not limited to Bullet Journaling and working memory. I’m also excited to further explore smaller topics of interest including apps I’d be stranded on a desert island with, Vi as sticky notes, and more!

Looking forward to seeing how this experiment goes, really appreciate the support and community on these kinda topics, and ‘till next time! 🏔️
