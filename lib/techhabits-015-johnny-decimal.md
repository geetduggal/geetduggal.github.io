# Tech Habits: How I Moved Into My Johnny Decimal (and Obsidian Bases) System for Organizing Notes

[](https://medium.com/@geetduggal?source=post_page---byline--6bc7a00747e7---------------------------------------)

![Geet Duggal](https://miro.medium.com/v2/resize:fill:64:64/0*NUf7cKjbrdEqk8cC.)

[Geet Duggal](https://medium.com/@geetduggal?source=post_page---byline--6bc7a00747e7---------------------------------------)

13 min read

·

Jan 2, 2026

130

2

I recently published an article called “[This One Idea Changed the Way I Organized My Notes Forever](https://medium.com/@geetduggal/this-one-idea-changed-the-way-i-organized-my-notes-forever-f293371a0d5b)” about Notable Folders and organizing around people instead of projects.

**Disclaimer:** What I didn’t fully detail in that article was the  **nerd-out session**happening behind it all: how I finally moved into  [Johnny Decimal](https://johnnydecimal.com/)  (JD). So here you go.

If you’ve spent time in the Obsidian or Roam world, you know the general idea is that you’re supposed to enter a realm of frictionless and powerful note taking.  Your inner surfer dude tells you, “just let the structure emerge, man”: link notes together, watch clusters form, discover themes organically.

There’s truth to this. I’ve done it. You notice that a bunch of notes cluster around creativity and software craftsmanship and think, “Oh, that’s interesting.” This observation may seed an interesting evolution of your thinking.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*4Cbrct4tAmidol7QgVodOg.png)

My actual graph that I don’t use that often but you can see it looks like a sort of atlas with places.

However, I’ve realized discovery is not the same as intent. It’s good to wander off and explore, but it’s also equally important to have a home to go back to.

At some point, you realize the cluster your hopping around is real. A theme has solidified. And now you have a choice: keep it as an emergent blob in your graph, or stake the ground and say, “This is a category. This matters. I’m building here.”

Johnny Decimal is what staking the ground looks like.

## The Three Levels of Plain Text

Before diving into the stages of structure, I want to frame this through a lens I borrowed from

[Ellane W](https://medium.com/u/7c1ab936a5cc?source=post_page---user_mention--6bc7a00747e7---------------------------------------)

, who writes extensively about plain text productivity.  [She brilliantly describes three levels](https://ellanew.com/2025/11/24/ptpl-183-the-3-levels-of-plain-text-productivity):

**Level 1** is raw text only. Zero links, zero formatting. Just words in files.

**Level 2** includes wiki links, Markdown, emojis. Things that work across many Markdown apps.

**Level 3**  introduces features that give plain text superpowers but require specific apps like Obsidian or Emacs with Org mode to activate them.

Ellane’s insight is that Level 2 is the sweet spot. You get the benefits of links and formatting while maintaining interoperability. If Obsidian disappeared tomorrow, your files would still work in iA Writer, MarkEdit, Logseq, or a dozen other apps.

I find myself squarely in Level 2 as well, with occasional forays into Level 3. However, the Level 1 side of me is ever present and asserts that the plain text itself should be pleasant to look at, even without rendering. I call this  **plain text minimalism**.

This sentiment is what has guided my recent tinkering with my [Obsidian Kanban Plus plugin](https://medium.com/@geetduggal/introducing-the-obsidian-kanban-plus-plugin-3c970c21141a). The underlying file is just Markdown with dashes and headers, but I’ve recently tuned the format so that when I open it in any text editor, it reads as cleanly as possible. The structure is visible in the syntax itself, not hidden behind a render layer, and not obfuscated around verbose plugin settings.

Plain text minimalism generally means no ugly text. The constraint of keeping things portable should coexist with the goal of making your working files a pleasure to inhabit.

## From Text to Graph to Hierarchy to Order: Five Stages of Structure

Now let me walk through what I think of as five stages of adding structure to plain text. Each stage purchases something new, and each comes with a cost. Understanding these tradeoffs clarifies why I landed where I did.

## Stage 1: A Pile of Text Files

The simplest system. You have a folder. Inside are text files. Maybe they have dates in the filename, maybe not. You search when you need something.

**What you purchase:**  Simplicity, portability, zero lock-in. Any tool can read these files. You can grep them from the command line. There’s no syntax to learn, no plugins to install. This fits squarely in Ellane’s Level 1.

**What it costs:**  Any sense of explicit relationship between notes. Everything is flat. Your brain has to hold all the context about how ideas connect. The files are a heap, not a system.

## Stage 2: Links Between Files

Now you add wiki-style links. A note about a project links to notes about the people involved. A book note links to concept notes it sparked.

**What you purchase:**  The graph. Suddenly your notes have topology. You can traverse from one idea to related ideas. Tools like Obsidian visualize this as an actual network you can explore. Backlinks show you “what links here,” which surfaces connections you might have forgotten.

**What it costs:**  Hierarchy. Every note is equal. The graph tells you things are related but not how some concepts subsume others. You can get lost in the web. And while wiki links themselves are portable (Level 2), the graph visualization requires specific tooling.

## Stage 3: YAML Front Matter (Unordered Sets)

You start adding metadata to your files. A “type” field. A “project” field. Tags. Dates. Now each note carries structured data alongside its content.

**What you purchase:**  Queryability. With tools like Dataview or Bases or Notion Databases, you can ask questions of your notes. Show me all notes tagged “spiritual” created this month. List my book notes sorted by rating. Your pile of text becomes a lightweight database.

This is where [Steph Ango’s (Obsidian’s CEO) vault setup](https://stephango.com/vault) lives. He uses very few folders, relying instead on a `categories` property and heavy linking. His notes live mostly in the root, organized by metadata rather than location. It's an elegant approach that "embraces chaos and laziness to create emergent structure," as he puts it.

**What it costs:**  Analogy to physical organization and spatial intuition. The files might still be scattered everywhere. Metadata creates  _virtual_  groupings (unordered sets of notes that match a query), but there’s no container you can point to and say “this is where my software craftsmanship thinking lives.” You need the tooling to see the structure.

I wrote about this tradeoff in my piece on Obsidian Kanban vs. Bases. The key insight there was that YAML and Bases give you collections, but not necessarily  _ordered_  collections. You can sort by a property, but the ordering is computed, not manually-specified by the user.

## Stage 4: Folders (Containers)

And here’s where it gets interesting. Folders seem almost primitive compared to graphs and databases. They’re hierarchical, rigid, limited. You can only put a file in one folder.

But folders give you something none of the other layers do:  _place_.

A folder is a container. It’s spatial. When I create a folder called “Software people” and put Bill’s notes inside, I’ve made a home for Bill. Not a tag that floats in metadata space. Not a link that connects to other floating nodes. An actual location I can navigate to, see the contents of, and feel oriented within.

This is how our brains have worked for a good evolutionary while. The container metaphor is deeply intuitive. When someone asks where something is, we point to a place.

**What you purchase:**  Spatial memory, browsability, universal portability. Folders are Level 1-compatible. They work everywhere. They can contain any kind of file whether or not it has metadata associated with it. You decide where something belongs, which encodes a certain level of intent behind it.

**What it costs:**  Flexibility. A file can only live in one place (without aliases). You can’t easily slice your notes across multiple dimensions the way metadata allows. And deep folder hierarchies can become their own maze.

## Stage 5: Johnny Decimal (Ordered Hierarchy with Constraints)

JD takes folders one step further by adding numerical IDs. At most 10 areas (00–09 through 90–99). At most 10 categories per area. Every content-containing folder gets a specific address like 61.14.

Here’s the key insight:  **Adding a numerical ID to YAML front matter adds the order. Johnny Decimal creates hierarchy and order in a way that requires that you don’t have to hold too much information in** [**working memory**](https://medium.com/@geetduggal/satisfy-the-beast-science-the-sh-t-out-of-difficult-tasks-and-habits-18c4e3d2f04a)**.**

When you query notes by a property, you get a set. The members match the criteria, but their order is either arbitrary or computed from another property. With JD, the order is baked into the JD system itself and can therefore be user-defined. 61 comes before 62. 61.14 has a specific position relative to 61.13 and 61.15.

This might seem like a minor distinction, but it connects to something fundamental about lists. As I wrote in my  [Kanban vs. Bases piece](https://medium.com/@geetduggal/tech-habits-lists-in-obsidian-kanban-vs-obsidian-bases-f613b1673d56), the ordered property is so powerful that entire programming languages are based on the idea that everything is a list (see Lisp). Obsidian Kanban gets ordering right because the items are literally lines in a file with inherent sequence. With Johnny Decimal, IDs provide a user-defined order to files in any file system. In contrast, Obsidian Bases, like most database views, computes ordering from metadata. Without a custom JID-like integer, there is no user-defined order.

**What you purchase:**  A spatial map you can internalize. When I think “61.14 Bill,” I know exactly where that is. The numbering creates a memory palace of sorts. You also purchase browsability that scales to thousands of folders since the hierarchy keeps things navigable.

**What it costs:**  Visual elegance (“61.14 Bill” is uglier than just “Bill”). Friction when reorganizing (once something has an ID, moving it is annoying). And the upfront work of deciding on your areas and categories.

These stages aren’t mutually exclusive. They coexist, sometimes quite well.

My files live in folders (JD hierarchy, Stage 5). They also have YAML front matter (Stage 3). They also contain links to other notes (Stage 2). I can view them as a graph, query them as a database, or browse them as a file tree.

You don’t have to choose between these options. The question is which layer you treat as primary.

For me, folders are primary. The hierarchy is the backbone. Links and metadata add richness on top, but when I think about where something _is_, I think in terms of its folder location.

Steph Ango made a different choice: metadata primary, folders minimal. His approach works wonderfully for someone who navigates primarily through quick switcher and backlinks rather than file tree browsing. Both are valid. The question is which mental model fits how you actually think.

## Why Folders Win for Me

Despite how much I love using the quick switcher and Bases, there are a few specific reasons I treat folders as primary:

**Folders are universal.**  Every operating system understands them. Every app can read them. If Obsidian disappeared tomorrow, my folder structure would still make sense in Finder or VS Code or a terminal. This is the “file over app” philosophy Steph Ango advocates, and ironically I think JD folders embody it more fully than a metadata-dependent system does.

**Folders force decisions.**  You can’t put a file in two folders (without aliases or symlinks). This sounds like a limitation, but it’s actually clarifying. You have to decide: is this primarily about Bill, or primarily about the project? That decision encodes meaning and intent.

**Folders support the “worldbuilding” feeling.**  When I open my JD structure, I feel like I’m looking at a map of my own mind. The creativity continent is over here. The software craftsmanship region is there, populated by notable collaborators and hard-won technical knowledge. Spirituality has its own quiet corner.

This is why I called people who might resonate with this “digital worldbuilders” in my Notable Folders piece. When you create a JD structure, you’re constructing a territory. Each category is a settlement. Each ID is an address in a town you’re building.

The spatial familiarity this creates is valuable independent of retrieval efficiency. I don’t need JD to  _find_  things faster (it works great, but search and AI handle that fine for many cases). I need JD to  _feel at home_. To open my file system and experience the same orientation I feel walking into my physical house. This connects to why I love  [Atlas Journaling](https://medium.com/@geetduggal/atlas-journaling-a-unified-approach-for-seeing-the-big-picture-and-acting-with-focus-78804f26f5ab): the map becomes a mirror, and browsing it is its own form of reflection.

## The Surprising Power of Containers

I think there’s something counterintuitive here worth naming.

In the progression from text files to links to metadata to folders to JD, you might expect each stage to be “more advanced” than the last. Graphs feel modern and networked. Databases feel powerful and queryable. Folders feel…  _old_?

But folders (and especially numbered folders) sit at the top of my personal power hierarchy precisely because they’re so opinionated. A folder is a commitment. When I create a JD category for something, I’m saying: this theme has graduated from emergent to intentional. It has a home now.

Links are cheap. You can link anything to anything. Tags are cheap. You can tag a note with ten tags and defer any real organizational decision. But creating a folder? That’s a stake in the ground. Assigning it an ID? That’s a permanent address.

The constraint is the feature.

## Why JD Now

I’d been circling Johnny Decimal for a while. Read the workbook twice. Did parts of the workshop. Thought and rethought my areas until they felt battle-tested.

The critic in me says: what about flexibility? What if my life changes?

My answer: my areas have been quite stable for years. For example, life admin, self-care, spirituality, software craftsmanship, creative work. These aren’t arbitrary buckets. They’re the actual modules of my life. And within each area, the categories can evolve.

And it’s not all  _that_  rigid. Fortunately, AI tools made it relatively easy for me to move in. What would have been a rather tedious process in the past (analogy: like moving yourself from one house to another) has become just a few prompts (like hiring movers to help you while you still direct them). If something really needs to change, I’m able to do it more easily.

## The ALPPS Home Screen

Here’s where Notable Folders meets Johnny Decimal in practice.

I now have five top-level directories that I think of as ALPPS: Archives, Log, People, Projects, Spaces.

**Archives**  is the JD structure itself. The bookstore shelves. You browse it when you want to see your whole world or retrieve something you have elevated to Archival status.

**Log**  is working memory. This was a key realization: the log  _is_  the inbox. It’s a plain text file and a folder where I capture thoughts throughout the day. Voice memos get transcribed here. Quick notes land here. Most will fade into history, but the good stuff graduates.

**People, Projects, Spaces**  are the active directories. These also show up on my iOS home screen via Obsidian widgets. At any moment, I can see: who am I thinking about? What projects are live? What contexts am I inhabiting?

Press enter or click to view image in full size![](https://miro.medium.com/v2/resize:fit:2580/1*P1aOxguvmJKiBpYIX8SRPQ@2x.jpeg)

Press enter or click to view image in full size![](https://miro.medium.com/v2/resize:fit:2580/1*XvgAqiv9U2pXdcztacgO5w@2x.jpeg)

The beauty is that every single one of these directories has an Obsidian Folder Note: a markdown file within a folder of the same name that links to the currently active notable folders. It’s the first thing I see when I click into People or Projects or Spaces. Clean, focused, intentional.

I take this “People, Project, Spaces” concept further in my JD structure. Each of my Areas also mirrors these as categories. For example:

10-19 Life admin
   ...
40-49 Self-care
   41 Selfish people
   42 Selfish projects
   43 Selfish spaces
50-59 Spirituality
   51 Spiritual people
   52 Spiritual projects
   53 Spiritual spaces
60-69 Craft
   61 Craft people
   62 Craft projects
   63 Craft spaces

This way, in my Projects folder note if I see something like:

[[12.08 Drivers License Exam]]

[[22.09 New Musical Composition]]

[[62.07 Metrics Database]]
[[62.08 Scaling Service]]

I can see at a glance on my home screen that I currently have active projects in Life admin, Creativity, and (Software) Craft. Because it uses a folder note structure I can annotate these lines and order them however I like as I work through the day and week.

## Plain Text Minimalism

One thing I want to emphasize: all of this works in plain text. And I mean  _actually_  works, not just technically-parseable-but-ugly works.

YAML front matter adds a little structure without bloating the file. Markdown headers organize without requiring a database. The Kanban plugin renders lists beautifully, but the underlying file is just lines of text with dashes.

I’ve recently been pushing this further. What if you have a Kanban board where some lanes that have no headings at all? I used some AI tools to modify the behavior of Kanban Plus, and now my working memory or Log file is simultaneously:

1.  A plain text file I can edit anywhere
2.  A Kanban board for visual manipulation
3.  Content that appears cleanly on my home screen widget

When I added milk to my grocery list yesterday via a simple iOS shortcut, it showed up instantly on my phone home screen. No separate app. Just text in the right place.

## column 1
- a
- b
- c

- d
- e


- f

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:2000/1*fM6WZmaPMG-auuNOKssOzQ.png)

The key is that when I open this file in a basic text editor (Level 1 mode), it still reads well. The structure is self-evident. I’m not dependent on Obsidian to make sense of my own notes.

## The Tradeoffs

I won’t pretend JD is perfect. This is why in the Notable Folders article, I emphasize simplicity. You could get 95% of the benefits of Notable Folders by creating people folders with a pinned note in Apple Notes, for example.

The JD IDs can look ridiculous at times. “61.14 Bill” is less pretty than just “Bill.” And once you assign an ID, moving things around is annoying.

There’s also the question of what deserves an ID in the first place. I’ve been letting things simmer in the active directories until I’m confident they belong in the archive. Not everything earns a permanent address.

But the tradeoffs are worth it for me. The spatial memory, the sense of home, the intentionality of saying “this category matters”: these compound over time.

## Bases and the Future

A quick note on Obsidian Bases, since I wrote about it in relation to Kanban.

With JD and YAML front matter, I can now auto-generate my index and Bases. A script walks my folder structure and adds fields to every markdown file. This means Bases can create views of all notes in a category, sorted however I want.

This is where Stages 3 and 5 work together beautifully. The folder structure provides the physical organization and the inherent ordering (Stage 5). The YAML front matter makes that structure queryable (Stage 3). Bases lets me slice the data different ways without disturbing the underlying hierarchy.

## Structure as Contentment

Here’s the thing I keep coming back to.

You could argue there’s a world where you just dump everything into an AI and talk to it. Let the model be your organizational system. Ask for what you need when you need it.

But there’s no  _home_  in that. No sense of “this is where my spiritual thinking lives” or “this is Bill’s corner.” You’re not building a place to play in. You’re just retrieving.

Johnny Decimal, for all its numbered folders and rigid constraints, gives me something AI cannot: a place I actually want to tidy up. A structure that reflects how I think about my life. A home base from which to explore. ‘Till next time 🏔️

(Tangent: If you’d like to really nerd out how graphs of connections and hierarchy can be related in the context of DNA in cells. I actually wrote an  [academic paper](https://link.springer.com/article/10.1186/1748-7188-9-14)  about that in a previous life.)
