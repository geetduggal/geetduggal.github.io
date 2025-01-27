
### Tech Habits: One Big Text File (OBTF) after 24 Hours

#### It really is everything I hoped for … and more

> If it doesn’t strike a tuneful chord in you today, I’d recommend leaving it alone until it does. — [Elanne W](https://ellanew.com/)

I remember reading that in Elanne’s  [inaugural OBTF post](https://medium.com/produclivity/ptpl-091-im-using-one-big-text-file-in-obsidian-as-a-digital-bullet-journal-6f8346a3e8e0)  last year and the thought stuck with me since. I  [recently mentioned](https://medium.com/@geetduggal/tech-habits-the-right-time-to-experiment-with-task-and-capture-apps-06c775bc3aa9)  that I’ll be moving all my daily notes to a single text file from one text file motivated largely by the fact that “I like to  _play_  with my tasks in 2D and in the context of other contextually relevant text.” I finally got around to actually implementing it.

For the uninitiated, OBTF is a method popularized in the ‘blogosphere’  [about 20 years ago](https://danlucraft.com/blog/2008/04/plain-text-organizer/)  to keep all your digital notes in one big file,  _in plain text_  (no Microsoft Word, Apple Notes, Evernote, …).

Back then, maintaining a OBTF required a bit of manual ‘engineering’ work to properly keep data in sync. There was therefore a period where apps like Evernote had good reason to reign supreme. Their multimedia prowess and ability to work seamlessly on mobile and desktop is what made them so unique. Since then, the plain text movement has had a large resurgence in large part due to much better mobile apps and file synchronization support.

It sounds funny to write about OBTF after using it for just 24 hours, but the more I think about it the more it feels right. This is because I have been thinking about this for a while. Months ago, I knew I wanted the transition to be smooth since I use so many tools around my daily log files and what I call the ‘[tick items](https://medium.com/@geetduggal/it-was-love-at-first-sight-with-this-obsidian-plugin-0616630becf7)’ in them. I therefore realized that while it is technically trivial for me to combine my individual daily log files into one big text file, my workflows for capturing data into these files as well as reading my log would have to change.

I therefore determined a few requirements to guide me. My OBTF should be:

-   Loadable from my iOS home page  _fast_
-   Multimedia friendly
-   Easy to play around and write in the file across days (this is something that keeping plain text daily notes in their own files seems to have trouble with)
-   _Fast_  to operate in (avoid long sessions of scrolling around)
-   Friendly to use in multiple applications on both Mobile and desktop

The implementation I ultimately settled on is to slightly modify my [capture shortcut](https://medium.com/@geetduggal/the-most-useful-ios-shortcut-for-obsidian-and-beyond-revisited-9692e62c993a)  for quickly capturing media or bits of text. I use this method due to it bing an insanely fast, convenient, and plain-text friendly approach in Apple’s ecosystem. I changed my format to not include markdown task items for everything I capture. Instead it’s a single line that looks more like this and is much more pleasant to read across multiple editors:

2025-01-26 21:05 Some text or wikilink to media

I decided to use Obsidian as my preferred way to read and input data in the OBTF. It works well on Mobile and Desktop and I have it customized just slightly so it’s as much of a pleasure to read and write in it as when I code. Also  [inspired by Elanne](https://medium.com/produclivity/ptpl-115-theres-something-new-at-the-top-of-my-one-big-text-file-89d62e340fdc), The Page Scroll plugin is particularly useful on Mobile when jumping from the top and bottom of the file. I too like keeping some more persistent notes at the top.

![](https://cdn-images-1.medium.com/max/1600/1*Kr4E8wa7W4otY0r-tsoRwA.png)

Screenshot of my OBTF in Obsidian. It doesn’t look too different in other editors aside from rendering images and other Markdown inline. I like monospaced fonts and high contrast and that is very easy to customize in Obsidian.

I did experiment with other editors including iA Writer, 1Writer, and I still use Vim and VS Code/Cursor on my desktop. I just feel like Obsidian does more of what I want with the fewest sacrifices (eg. inline media rendering, fast interaction, customizability). Obsidian is therefore my app of choice, but it’s great to know I’m not limited to Obsidian.

Some issues I noticed early-on:

-   Big files tend to be handled slowly in iA Writer on iOS and seeing other media in context is a bit of a pain. My OBTF contains nearly 25,000 lines so it might be not the best suited for certain apps.  _Solution_: use Obsidian
-   On mobile, Obsidian has a longer-than-desired initial load time.  _Solution_: optimize load time where I can
-   I found that my text was dwarfed by images making the viewing experience either too text centric (when I don’t render images), or too image-centric.  _Solution_: scale image size down using a custom CSS snippet
-   Markdown tasks make the plain text look cluttered when not rendering the markdown.  _Solution_: I prefer to just list the items one line at a time (no markdown list item) but annotated with a human readable timestamp

What I love so far:f

-   I  _finally_  have the free and open space to capture notes in a way that feels most natural to me.
-   I already see myself better refining and revisit thoughts
-   Search has been more natural for me because whether it be on mobile, or my computer, I’m just using common features found in any text editor.
-   Like Elanne, I find it visually appealing to  [use special character](https://medium.com/@geetduggal/atlas-journaling-a-unified-approach-for-seeing-the-big-picture-and-acting-with-focus-78804f26f5ab)  prefixes that represent areas of cultivation for me in lines of my OBTF.

I’ll have a lot more to say about my OBTF in upcoming posts. I am quite happy it’s off to a good start despite a couple of issues early-on.

Other OBTF links:

-   [https://medium.com/@miscellaneplans/ptpl-126-what-the-dash-plus-system-looks-like-in-my-obtf-and-analog-notes-419873d27920](https://medium.com/@miscellaneplans/ptpl-126-what-the-dash-plus-system-looks-like-in-my-obtf-and-analog-notes-419873d27920)
-   [https://medium.com/produclivity/ptpl-100-one-big-text-file-top-down-or-bottom-up-b712083b3485](https://medium.com/produclivity/ptpl-100-one-big-text-file-top-down-or-bottom-up-b712083b3485)
-   [https://jeffhuang.com/productivity_text_file/](https://jeffhuang.com/productivity_text_file/)
-   [https://medium.com/@mikegrindle/my-one-big-text-file-8159fe941be3](https://medium.com/@mikegrindle/my-one-big-text-file-8159fe941be3)

Wait, no YouTube videos. No Podcasts? No social media?” Yup, still blogging like it’s 2005 in 2025. ‘Till next time 🏔️