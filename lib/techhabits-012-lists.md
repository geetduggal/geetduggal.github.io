
----------

### Tech Habits: Lists in Obsidian Kanban vs. Obsidian Bases



Obsidian Kanban gets the fundamentals of lists right. Obsidian Bases can continue to use Notion as a north star to get there, but has to be careful in the process.

----------

Lists are arguably the foundational unit of organization we use to get things done. In the classic  _Getting Things Done_ David Allen devotes quite a bit of time to lists.

He categorizes lists into now canonical categories like:

-   **Next Actions**  (e.g., “Calls,” “At Computer”),
-   **Projects**  (multi-step outcomes)
-   **Waiting For**  (delegated tasks),
-   and  **Someday/Maybe**  (non-urgent ideas).

He also advocates for ‘checklists’ to maintain standards or routines eg. travel packing lists or weekly reviews.

For Allen, lists are dynamic tools that support thinking by externalizing a relatively comprehensive set of items out of memory and into a meaningful order.

But lists are not just useful for getting things done. For example, you can expand the Someday/Maybe category to lists of books you want to read, places you want to go, movies you want to watch etc. It doesn’t really matter if these ever really get done.

Moreover, lists can also include things you  _have_  done: eg. big achievements, favorite books and movies, interesting notes on a particular topic ranked roughly by how much they resonate with you, etc.

Lists go even deeper. Wikipedia literally has guidance when a list is ‘notable’ (see my Personal Knowledge Encyclopedia article below for more). Hell, there is even a beautiful book called  _The Infinite of Lists_ that gives the idea of lists in human culture the treatment it deserves.

![](https://cdn-images-1.medium.com/max/1600/1*tUQ6mB6Pd9bOxhGgBKrDFw.png)

An example page from  _The Infinite of Lists._



Christ.

I have all kinds of lists and I love them. They keep me entertained and organized in a lightweight way. Lists are supposed to be easy to make (eg. jot down some items on a sheet or sheets of paper, post-it notes, bullet points in digital tools, etc).

In the digital world lists can get really powerful and complicated. In an extreme, lists  _are_  databases. Notion is a great (if not the best) example of this.

![](https://cdn-images-1.medium.com/max/1600/1*LG4P8tvFqX3edpKKxU8_eg.png)

Example list of Books in Notion using the Readwise integration

Each of the books in the image above has  _metadata_ associated with it. Each book is treated as its own page/object/note. The classic way to describe this way of representing this data in computer technology terms is a database, and that’s exactly what Notion calls them. This is powerful because you can basically do almost anything you would practically do with a database (sort, filter, compute) in a user-friendly experience in Notion.

The crucial point here is that you can apply your own  _custom ordering_ of items. In Notion, I can literally drag-and-drop books in the order I care about.  _Unlike_  a traditional database view where you sort items in a very formulaic way (eg. sort books alphabetically by their name), Notion provides you both capabilities: user-defined orders  _and_ the ability to apply custom sorting formulas.

In computer science, this ordered property is a key aspect of the list data type. The ordered list is so powerful that entire programming languages are based on the idea that  _everything is a list_ including code itself (see eg. the Lisp-variant of computer programming languages). Taking it a step further, the cult-favorite ‘Org-mode’ is a plain text outlining language in Emacs which itself is based on the  _Emacs Lisp_.

----------

Enter Obsidian. In the world of plain text, a list is commonly represented by  _lines in a file_. They could be just simple lines in a plain text file, bullet items or tasks in markdown, or some other custom format. The point is that they are ordered, they are easy to manipulate in any text editor, and they are relatively powerful as-is with tools like Obsidian.

Obsidian Kanban is a simple and slick plugin on top of this idea that allows you to create multiple lists in a simple markdown format where each list item is simply a line in a file:

## List 1

- a
- b

## List 2

- b
- c

When rendered in Obsidian, this text file looks like this in dark mode my high-contrast monospace Obsidian setup:

![](https://cdn-images-1.medium.com/max/1600/1*kA8YnjQWhz5q9MyQ66smiw.png)

This is an extremely simple text format that allows simple list items to turn into cards you can drag-and-drop between lists. You can also associate each of these cards with a note and with more complex metadata. It really is great and I use it for pretty much all of my lists because of this ease-of-use both in plain text and in the user interface you see above.

Plugins like Dataview and the new Bases core plugin (in beta at the moment) have a complimentary approach. Each file can be associated with metadata with a simple format eg.

---
title: A New Hope # This is a text property
year: 1977
favorite: true
cast: # This is a list property
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
---`

If you have lots of files like these (ie. they have ‘title’, ‘year’, ‘favorite’, and ‘cast’ as properties), you can quickly create tables, edit metadata, etc based on them. This table can be thought of as a list. Taking it further, in Notion you can literally view a table like this as a Kanban board.

The only problem is that niether Dataview nor Bases currently has the ability to apply a custom ordering like Notion does (as far as I know). I do, however, believe that Bases is an excellent and efficient foundation to build on. The following video does a good job introducing Bases and comparing it to Dataview:

I strongly believe that this problem an interesting one for Obsidian to  _get right_. Notion has the benefit of hiding how the data is stored away from you where in Obsidian the Markdown, YAML, and JSON is often front-and-center.

For example, if Bases introduces the idea of ordered lists, how would they be represented in plain text? Would it be as simple and intuitive as the Kanban example I showed above?

As another example, in Obsidian Kanban, list items don’t have to be associated with note files (they are just plain text lines in a markdown file). With Bases, or Notion, the idea of a list  _item_  is pretty heavy weight: each list item is better thought of as a file or a note. Personally, this means I really need to separate the idea of lightweight lists (grocery lists, simple notes to self, mundane tasks) from heavyweight ones (lists of projects, books, …).

What I like about my Obsdian Kanban setup at the moment is that my lists evolve organically based on what I need. As an example, I have experimented with keeping  **One Big File of Lists**  (OBFL as a spiritual sister to One Big Text File, OBTF).

![](https://cdn-images-1.medium.com/max/2600/1*BT_ZitPg0k44Wnt5SRJpAw.png)

Screenshot of a bunch of my lists in my One Big File of Lists (OBFL)

The Kanban plugin makes it easy to add items in plain text. I simply move them to appropriate lists and create separate notes with Metadata as needed using the ‘New note from card’ functionality:

![](https://cdn-images-1.medium.com/max/1600/1*_BY27krebVnTGh9fL6AkbA.png)

This being said, I have concerns about the long-term future of Obsidian Kanban given Bases, so am interested in seeing how this situation evolves and potentially being a part of it.

![](https://cdn-images-1.medium.com/max/1600/1*y3JZydVNwx6B5QK3PzGmbQ.png)

Screenshot of feature request for Bases to include a Kanban view

The beauty of organizing my lists in plain text in the way I do now and especially with new AI tools, is that I actually feel more empowered to create variants of these types of plugins or simply use a plain text editor to manage all of ’em. ‘Till next time! 🏔️

Related:

-   [Tech Habits: Obsidian Kanban and Full Calendar Integration](https://medium.com/@geetduggal/tech-habits-obsidian-kanban-and-full-calendar-integration-a05a7ff2d2f6)
-   [Have You Been Using Your Calendar All Wrong?](https://medium.com/@geetduggal/have-you-been-using-your-calendar-all-wrong-9e686de42237): Power of Lists alongside Calendars
-   [Tech Habits: One Big Text File (OBTF) meets Obsidian, & Messaging Apps, and AI](https://medium.com/@geetduggal/tech-habits-one-big-text-file-obtf-meets-obsidian-messaging-apps-and-ai-e12909bf571c)
-   [Tech Habits: The Two Lists I Rely On to Run My Day](https://medium.com/@geetduggal/tech-habits-the-two-lists-i-rely-on-to-run-my-day-469ca249dc9f)
