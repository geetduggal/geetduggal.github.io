
----------

### Introducing the Obsidian Kanban Plus Plugin

#### A feature rich modular playground that builds on the already awesome Kanban Plugin

![](https://cdn-images-1.medium.com/max/1600/1*8ioJUIqbI8qKz7AK0Ah35Q.png)

Today I’m excited to announce the pre-release of the  [Kanban Plus plugin](https://github.com/geetduggal/obsidian-kanban/tree/add-copy-to-calendar-feature)! It is a fork of the very popular Obsidian Kanban Plugin. Kanban Plus is meant to serve as a place where I can play with thoughtful and potentially powerful extensions to the already excellent foundation from the Kanban plugin.

I’m releasing this because I’ve gotten so much value using these features on a day-to-day basis over the past few months. I only spent a couple of hours developing it thanks to tools like ChatGPT, so the ‘value added to time spent developing ratio’ is super high. If even one more person finds the ideas here useful, it will have made releasing it worth it!

### Begin with one file and one list

Obsidian has earned a reputation as a ‘productivity-nerd’ platform, drawing in tinkerers who get lost in endlessly adjusting their systems. While there is truth in this sentiment,  **I’m convinced that Obsidian’s greatest strengths show up when it’s used simply**.

My suggestion just start using Obsidian as an Inbox of  _stuff_. It is literally just one file. Create a heading called ‘ 📥 Inbox’ and just place text in a bulleted list.

In Obsidian this file is a simple plain text file but it is pretty powerful.

-   List items can not only be plain text, but also links to the web, links to other notes, images, audio, etc.
-   You can use Desktop and Mobile apps to add to and view this list.
-   You can create sublists and expand and collapse each of them
-   Lists can be tasks lists
-   etc.

![](https://cdn-images-1.medium.com/max/1600/1*X3CQLeAn82qJyDhYoBeHUw.png)

Above is an example list in Obsidian. You can see how it’s already quite a multimedia experience. Everything is in plain text, but Obsidian renders it for you as you paste images and type in plain text.

This is already quite powerful and we’re not even using the Kanban plugin yet! You can add and remove items. You can reorder them. You can visualize what is on your plate. This is already an excellent start to using Obsidian.

To turn this into a Kanban board using the Kanban plugin, you simply install the community plugin from the settings page and then add this to the top of the file:

---
kanban-plugin: basic
---

You then get a view like this image below:

![](https://cdn-images-1.medium.com/max/1600/1*OzIjYb6ZcUpI8R46usW5JQ.png)

Each bullet point is now a card that you can easily drag and drop in desktop and in mobile. You can delete cards, turn cards into notes to add a lot more information, and more!

You can even get advanced quick capture in a super convenient way with just one list in Obsidian. For example, if you use iOS, you can  [create a shortcut](https://medium.com/@geetduggal/the-most-useful-ios-shortcut-for-obsidian-and-beyond-revisited-9692e62c993a)  that automatically appends to this file locally on your phone and syncs to the cloud. This makes it very easy to quickly add text and media through iOS native functionality. For example, I can just ask Siri to capture some text I speak out loud, or use the ‘Share’ button in iOS on an image to append an image to the list.

I’d recommend just playing around with this one list for a week or two. It is incredibly useful to just get stuff off your mind onto a list you occasionally review and  [ruthlessly delete](https://medium.com/@geetduggal/capture-to-do-d040e1bae4a6). With Obsidian and the Kanban plugin, you essentially get full-featured free Kanban app that is Desktop and Mobile friendly. You’re not locked in to any fancy file format or other app and can manipulate the text files easily and directly if you like.

### Add complexity organically

While it may be possible to simply live off of one list in perpetuity, you may likely find yourself wanting to keep and sort some items in a lightweight way. Just add what you need incrementally and think carefully about each addition as opposed to trying to create a complicated and fancy system. Make sure your system is meaningful to you and stick with it for a bit. Here are some examples of adding complexity organically.

#### Maintain ‘📽️ Projects’ and ‘✅ Obligation’ lists

The former list is meant to contain big projects while the latter tend to be smaller obligations that you need to get done on the timescale of a season (a few weeks to a few months roughly). The Kanban plugin makes it easy to drag and drop items between these lists.

![](https://cdn-images-1.medium.com/max/1600/1*-kawE4DPOcStb3nhTkUK8Q.png)

#### Keep a few ‘Inspirational lists’

While projects and obligations can be thought of as tasks at different scales, inspirational lists are simply things you are interested in like quotes or books.

![](https://cdn-images-1.medium.com/max/1600/1*SMSxIYNQHD0dOfXZQVKVbw.png)

#### Copy list items to a calendar view / log

The first feature developed for what has now become Kanban Plus is called ‘[Copy to calendar](https://medium.com/@geetduggal/tech-habits-obsidian-kanban-and-full-calendar-integration-a05a7ff2d2f6)’. The idea here is that the lists that we keep may often be associated with events on a calendar and Kanban Plus integrates with  [Obsidian’s Full Calendar plugin](https://github.com/obsidian-community/obsidian-full-calendar).

For example, you may keep a list of things that you do approximately weekly or monthly. When you’re ready to schedule one of those items, you simply copy it over to the calendar. You can take notes on a note associated with the list item itself or the specific calendar event. This feature is useful even with just one ‘📥 Inbox’ list. For example, if there a few things you think you need to do in the next few days, just place them in your inbox and copy over to your calendar to block off some time.

This combination of lists and calendar to me is like  **the ultimate digital pocket notebook**. Rather than open an app and get distracted with all kinds of notifications, I often find myself now opening Obsidian on my phone. My lists show up front-end-center and my calendar / log of what I’m doing (either a 1 or 3 day view) is just a ‘swipe left’ away.

I discuss the relationship between calendars and lists in a bit more depth  [here](https://medium.com/@geetduggal/have-you-been-using-your-calendar-all-wrong-9e686de42237).

![](https://cdn-images-1.medium.com/max/1600/0*ZSURcFI5hXvxwE3q.gif)

#### Move items to other files

Obsidian Kanban already allows you to move items from one list to another. It is such an easy and natural process to build lists and then subsequently refine and group them in files that I thought it would be useful extend this functionality to the Kanban Plugin. With this feature, you can associate a file with a Kanban board throught he board settings page. In this case I’m going to associate the example board above with a topic called ‘Artificial Intelligence’ (see  [this article](https://medium.com/@geetduggal/want-extraordinarily-useful-and-timeless-notes-build-a-personal-knowledge-encyclopedia-bc8b7fb09829)  for how I think about topics).

![](https://cdn-images-1.medium.com/max/1600/1*O8HlEYDn-4hllpreyz-7qw.png)

Now, let’s consider the ‘Great article by Cal Newport’ list item above. It happens to be about AI (actually even though this is just a made-up article for this made-up board, he did write a  [noteworthy article on AI for the  _New Yorker_](https://www.newyorker.com/culture/open-questions/what-if-ai-doesnt-get-much-better-than-this)  recently). I’d like to incorporate some thoughts from this in the space that I cultivate, so I simply move this item there. Even if there are specific thoughts from the article in my Inbox, eg, I can simply move them over with a click of a mouse or a tap on the phone. And since it’s plain text, all of this works, of course, with your favorite text editor!

![](https://cdn-images-1.medium.com/max/1600/1*J9XoCUk8WEJAFQDIBZdfmw.png)

#### ‘List mind mapping’

Taking this concept of moving cards to topic-specific lists further, you can refine lists within a topic or a project and play with ideas much like you would with nested bulleted outlines or mind mapping. There is one key difference with a Kanban Plus approach.

It’s not so much about creating big hierarchies or graphs of related notes. It’s more about  **ordering items within a list** and**putting lists together in a specific order**. For example, consider a ‘meta’ example Kanban board (again this is just a simple markdown file with a few headings and bullet points) about Kanban Plus:

![](https://cdn-images-1.medium.com/max/1600/1*6fspdKt63LcS6YIR7Okfyg.png)

You can see here how I’m building the ideas up in this simple article. I can create sections/categories and order and drag-and-drop items with ease. Rather than have arbitrarily deep hierarchies or complex graphs, Kanban Plus allows you to spatially organize your thinking with a bit more order and structure. I find this useful because it is a visual way to guide a lot of thoughts into a linear order. It’s a forcing function to organize your thoughts into story of sorts.

The ability to link boards together allows you to layer a bit more complexity on top in a natural way. By associating my board of ‘Stuff’ with ‘Artificial Intelligence’ I’m saying that I’m allowing information to flow (one-way) in that direction. I only create these roads and lanes as needed and most of the actual text is placed in one text file. You can contrast this to a Zettlekasten approach where you are more motivated to create atomic notes and link them together. (I discuss pros and cons of this approach vs. Zettlekasten in a little more depth in the article about topics I linked to above.)

#### Embracing the #hashtag

I have had a sort-of love-hate relationship with hashtags. On one hand, they are essentially the unofficial standard to organically group notes, tweets, articles, etc. into topics. On the other hand, I think they can lead to a lot of noise if misused and backlinks are a very similar concept and bit more powerful.

This being said, if you have relatively few categories to work with, hashtags can be a useful and I thought hard about how I want to use them in Kanban Plus. The primary use case is in the ‘Copy to calendar’ feature.

In Kanban Plus, when you copy a card to a calendar that has a hashtag, the first hashtag that also matches a calendar name is the calendar the card is associated with. Additionally, the card background is now colored according the color defined in the ‘Full Calendar’ plugin.

![](https://cdn-images-1.medium.com/max/1600/1*u9UI2-fOCIf6kI16S9WFvw.png)

This is a simple but visually striking way to color your calendars and your lists. And the #hashtag is the common denominator. Above is an example where I’m going to copy a simple card to a calendar called ‘software’. The result is below. The card is associated with the hashtag ‘#software’ and I have a draggable event to the left on my calendar. They are both colored by the color of the calendar.

![](https://cdn-images-1.medium.com/max/1600/1*fG2H_tYqQJQgaap6FPZ7Cg.png)

### Core Principles of Kanban Plus

Taking a step back, I’d like to emphsize that Kanban Plus is not about just adding whatever feature I want. There are a few principles I think about when working on this plugin. Kanban Plus:

1.  thrives on being  **fast and local**. These two features are what I believe sets apart the Obsidian Kanban world spiritually from many other tempting Kanban software.
2.  **is based on a foundation of lists and calendars**  so the most useful features would center around simple and powerful uses of both together.
3.  **treats lists are multipurpose and multidimensional**: they can be used for tracking tasks, projects, organizing thoughts, structure writing, and more. Features in Kanban Plus embrace the type of variety of uses of lists like the ones I discussed above.
4.  is  **modular**. The features added to Kanban Plus can be used independently of each other but when used together the experience is greatly enhanced. Take the hashtag-based integration of cards with calendar names. Hastags for cards are independently useful, but when combined with their eponymous calendars, can be linked together by name and color. As another example, copying list items to other files in no way changes the core functionality of the Kanban plugin and doesn’t attempt to tie the two files together too rigidly. If the feature went away both boards will be just as useful as they were when integrated.

----------

**Finally, Kanban Plus is a true fork**  of the Kanban plugin and attempts to stay in sync with it. The beauty of the original plugin is how simple plain text lists turn instantly into Kanban boards and I have yet to find another plugin that does this so elegantly and true to a simple plain text format.

I decided after some thought to simply keep a fork because the original Kanban plugin seems a bit out of maintenance. The original Kanban Plugin still has many open pull requests and a number of discussions online about alternatives to this plugin ([eg](https://forum.obsidian.md/t/bases-kanban-view/101593)).

Kanban Plus aims to use AI tooling to the extent reasonable fix issues with the plugin and add useful features. This way, the plugin is less likely to be neglected because smaller fixes and features should be easy to manage.

My hope is  **not**  that this fork replaces or becomes the new official Kanban standard in the Obsidian world. For example, you can imagine a world where Kanban Plus works well with Obsidian Bases or that  [Bases embraces some form of ordered lists](https://medium.com/@geetduggal/tech-habits-lists-in-obsidian-kanban-vs-obsidian-bases-f613b1673d56). However, in the absence of any tool that works better for me I do hope, as mentioned before, that this tool can be useful to at least one more person and that the ideas behind the tool may find additional homes.

Thanks in advance to anyone who joins me on this adventure. ‘Till next time! 🏔️
