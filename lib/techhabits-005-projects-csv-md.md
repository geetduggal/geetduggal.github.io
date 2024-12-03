
# Tech Habits: Project Management Using a CSV File vs. Obsidian Kanban

## Plus recurring events vs. tasks, project logs, & more!

Welcome to the fifth installment of Tech Habits! This post briefly double-clicks on a  [previous post](https://medium.com/@geetduggal/tech-habits-managing-project-lists-in-plain-text-files-and-obsidian-a51c5e72f5ac). In it, I emphasized why a list of active projects and ideas is important. I showcased the use of a simple  `projects.csv`  file to manage all of my projects.

Conclusion: I am a huge fan of using CSV files to do basic project management and am still experimenting with simple alternatives. During my CSV experiment, I was occasionally tempted to use a full-featured spreadsheet, but I found that the versatility and simplicity of comma-separated values was preferable. My app of choice for project CSV file management is currently Easy CSV but depending on my mood I use Rainbow CSV (beautiful CSV editing in VS Code), Modern CSV, or just Vi.

In the same post, I also mentioned how Obsidian wasn’t necessarily the best app for  _editing_  CSV files (though reading files using the dataview plugin is actually pretty useful). As the weeks passed with me managing my projects in a CSV file, I realized that I probably have too many attributes/columns associated with each project (7!). In practice, I found that a simpler ‘subset’ of the method was actually getting me the most value.

I also realized that it the markdown format that the Obsidian Kanban plugin uses may hit the sweet spot. Like some of the CSV apps I mentioned above, the Kanban plugin is very lightweight. It also sports a snappy and intuitive drag-and-drop functionality like that of Easy CSV.

Because both the CSV and Kanban markdown formats are so simple, it was very easy for me to play with project management under both types of UXs.

-   **Cons CSV**: encourages over-engineering project management, poor Obsidian support
-   **Cons Obsidian Kanban**: simple but not widely adopted format, board UX can be awkward when when lists get large or there are too many lists
-   **Pros CSV**: more universal format, easy to sort and filter for projects matching particular criteria.
-   **Pros Obsidian Kanban**: simpler and more intuitive UX at-a-glance, way easier to link to media and notes in Obsidian.

I am now experimenting with a simpler system in using Obsidian Kanban. Projects generally follow the same rule as before: pick a name that is consistent across various tools you use. Projects are associated with these statuses:

-   🥳 Celebrate: an experimental new status where I get to enjoy the feeling of a completed project and tie up loose ends before archiving
-   🟢 Doing: obvious status with a work-in-progress limit of three projects
-   🗓️ Waiting: (see previous post)
-   💡 Idea: (see previous post)
-   🗄️ Archived (see previous post)

There is an implicit dimension to each project that is not encoded in this scheme: 💁 Who (see previous post). I think this is still very important, but I generally know who this ‘partner in crime’ is and the key is just making a mental note of it (or explicitly writing it in the note associated with the project card).

![](https://miro.medium.com/v2/resize:fit:6736/1*eVlq1MUEtpKvyE2zn8z1Aw.png)

An example of how my ‘projects.md’ file looks. It forms a kind of ‘circle’. Items generally move left from ‘Idea’ to ‘Waiting’ to ‘Doing’, can oscillate between the latter two for a bit, go to ‘Celebrate’ and eventually to ‘Archived. This board is simply a markdown file where each column is represented by an H2 (‘##’) and a list of bullets/tasks.

There are two related topics regarding project management that I’m also excited about sharing. The first is what I call ‘**project and space logs**’. I typically keep an Obsidian note associated with each project (typically completed on the order of a few weeks or months) or  [space](https://medium.com/@geetduggal/want-extraordinarily-useful-and-timeless-notes-build-a-personal-knowledge-encyclopedia-bc8b7fb09829)  (area of interest that I maintain on the order of years).

I’ve found it incredibly useful to keep a project or space log where every day I’m working on the project, I create a line or heading with the current date linked to my daily note and I keep track of progress or thoughts for that day. This approach has these two important benefits:

-   It is a great way to see where I left off on a project and get quickly  [motivated on what to do next](https://x.com/fortelabs/status/1659548770739056648). For spaces it serves a similar purpose and is a great way to store notes on longer-term areas of interest and relationships (eg. visits with notable people).
-   When going through my daily logs, I can quickly see what projects I was working on in the context surrounding that day. Often, I’ll find myself remembering a particular day/week I worked on something, so it’s easy for me to use the calendar plugin in Obsidian and just hop to the date.

(This approach could be even more useful with weekly logs vs. daily logs given that projects and spaces operate at that level of granularity.)

I manage when I work on my projects with  [my variant of time blocking](https://medium.com/@geetduggal/discipline-absorbs-chaos-try-this-game-changing-simple-way-to-manage-your-time-14e262ca05bc). When I break down work for projects into smaller tasks (typically named <project name>:<task name> in my calendar), I  **plan the tasks as recurring events**. At first glance, this sounds a bit weird, but I’ve found that it in practice it:

-   ensures the task doesn’t slip through the cracks. It will keep bothering me like an alarm until it’s complete (at which point I delete all future events with one click), and
-   provides me flexibility of how often and when I’m reminded. I find that this is a useful proxy for how urgent or important the task is.

Finally, a few housekeeping notes:

-   The second (out of four) apps I would be stranded on a desert island with is “Voice Memos”. This is possibly the most useful app for me to naturally unload my stream of thoughts to help seed a more structured understanding of topics. It is perfect for capture thoughts and connections between them while on a walk. Apple’s new transcription feature makes it even more useful. (I used to like Otter.ai for this purpose but they were a bit pricey for me.)
-   I also mentioned in a  [previous Tech Habits post](https://medium.com/@geetduggal/tech-habits-capture-everything-in-one-place-dd3f20fee466)  how I like to use my daily log as a form of working memory where I  [periodically process these items](https://medium.com/@geetduggal/tech-habits-the-problem-with-task-batching-41f0a7ab9f49). I have found that on my iOS Home Screen, badges (with their corresponding #s) are an addicting way to process incomplete/unread items. I therefore carefully choose which apps and what to display badges for. For example, now I only show badges on Messages, WhatsApp, Slack, Calendar, and Mail. I wish I could have my Obsidian app also show a badge for incomplete tasks in my daily log entries. That seems difficult, but there may be alternatives that are less heavy-weight by using the ‘Scriptable’ app. I’ve tried using the ‘Ultimate Todoist Sync’ plugin for Obsidian, but that ended up being more of a mess than I would have liked. Perhaps a subject for another post.
-   Upcoming: a longer article relating to Bujo, and my publicly facing  [weather resistant productivity](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068)  text file (`wrp.txt`).

‘Till next time! 🏔️