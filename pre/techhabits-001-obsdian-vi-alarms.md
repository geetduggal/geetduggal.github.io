# Tech Habits: Obsidian Live Preview, Vi Focus Mode, & Alarms for Calendar Events

[](https://medium.com/@geetduggal?source=post_page-----8c42976be5af--------------------------------)

![Geet Duggal](https://miro.medium.com/v2/resize:fill:88:88/0*NUf7cKjbrdEqk8cC.)

[Geet Duggal](https://medium.com/@geetduggal?source=post_page-----8c42976be5af--------------------------------)

5 min read

·

Just now

_Creating my own shiny new apps by piecing together existing tools._

I find that I often collect tidbits of tech tips and tricks that don’t warrant a more in-depth writing treatment, but would like to share nonetheless. I’ll therefore occasionally group together these thoughts and share as a part of a series that I call ‘Tech Habits’. Hope it is occasionally interesting and useful and look forward to learning more from you all. ☕️

I recently wrote a somewhat longer piece of text describing a lens through which I view productivity tools called ‘Weather Resistant Productivity’ 🏔️:

[](https://medium.com/@geetduggal/weather-resistant-productivity-2a90c4357068?source=post_page-----8c42976be5af--------------------------------)

## Weather Resistant Productivity

### Arm yourself with the finest, battle-tested productivity tools of all time.

medium.com

This post will cover three ‘tech habits’ that exemplify how some of my tried-and-true tools can be used in new and weather resistant ways.

# Harnessing the power of Obsidian Live Preview Mode

Obsidian is neither the first nor the only editor to attempt to deliver a ‘[what you see is what you get](https://en.wikipedia.org/wiki/WYSIWYG)’ experience for editing Markdown (eg. Typora, Mark Text, StackEdit). Obsidian with Live Preview Mode, however, is certainly the  _best_  in my experience. It is perfect for viewing images & other media, editing plain text, editing tables, and harnessing the power of the occasional plugin to enhance the whole experience.

I don’t like to clutter my vault with too many plugins, but here are a few essentials that I think work well with Live Preview Mode while keeping my setup weather resistant:

-   **Advanced Tables.**  Not only is it easy to edit tables in live preview mode, but the output in plain text also looks nice and clean and easy to edit in other editors when you like. See the animation  [here](https://github.com/tgrosinger/advanced-tables-obsidian?tab=readme-ov-file#formulas-and-spreadsheets-in-markdown)  to see how it reformats your text to look pretty. (Note that I do  _not_  like to use this plugin for formulas etc. as I think it’s a bit clunky.)
-   **Paste Image Rename.**  As a part of my weather resistant setup, I want the convenience of being able to paste or use the iOS share sheet to quickly store and view media in my vault in a simple and portable way. At the moment, that means prefixing all file names for media stored in my ‘Attachments/’ directory with a timestamp, something like: ‘20240612081039.Image-Name.png’. This plugin is useful so I can name my files in a way that is also consistent with  [the way I use iOS shortcuts to quickly capture media](https://medium.com/@geetduggal/the-most-useful-ios-shortcut-for-obsidian-and-beyond-revisited-9692e62c993a).
-   **Gallery.** Possibly the most motivating and useful way to review my  [‘me feed’](https://medium.com/@geetduggal/your-obsidian-workflow-is-missing-a-physical-notebook-2e99866edcfc)  is to see images that I have captured via the methods above in a nice  [masonry layout](https://github.com/lucaorio/obsidian-image-gallery?tab=readme-ov-file#examples). Sorting my files by descending name acheives this goal in a beautiful way right in my markdown file. With live preview mode on, it is pretty much no effort to get this view.

```img-gallery
path: Log/Attachments
type: horizontal
sort: desc
sortby: name
```

# Creating a minimalist focus mode for writing in Vi

(with no plugins and a minimal modification to your config)

While I love apps like iA Writer and Live Preview Mode as described above, there is no better way for me to focus on code or text than with  [Vi in a terminal](https://medium.com/@geetduggal/editor-first-vs-terminal-first-for-development-efea6b02d294)  for me. I have, however, found it a bit unsatisfying to write longer pieces of text.

I try to avoid plugins when possible, though there are some out there (eg. see  [vim-iawriter](https://www.reddit.com/r/vim/comments/ha6dp0/i_made_a_focus_mode_that_combines_a_few_plugins/)). Mainly, I like to generally use this simple  [vimrc](https://gist.github.com/geetduggal/d9702695b96b13532a291d74f7a38e38)  in any environment and expand on it only for more high-intensity coding setups. After a bit of trial-and-error, I found the following command very simple and elegant to write longer sections of text:

function! Write()
  set foldcolumn=8
  set columns=100
  set linebreak
endfunction
command! Write call Write()

Simply type in ‘:Write’ to get a view like what you see below (if you combine it with my color scheme settings in the vimrc above):

![](https://miro.medium.com/v2/resize:fit:1400/1*hOfhG7zpI5AW1ON_XtbHIA.png)

Screenshot of my full screen terminal and Vi optimized the way I like it for writing.

# Embracing the iOS native alarms and calendar experience

In another longer piece, I wrote that I find that alarms tend to work well for events or tasks that really need to get done. These are events that I generally call ‘sacred’:

[](https://medium.com/@geetduggal/discipline-absorbs-chaos-try-this-game-changing-simple-way-to-manage-your-time-14e262ca05bc?source=post_page-----8c42976be5af--------------------------------)

## Discipline Absorbs Chaos. Try This Game-Changing & Simple Way to Manage Your Time.

### You choose your favorite apps, papers & pens. The ‘Frontier’ time blocking method takes care of the rest.

medium.com

By ‘alarm’, I literally mean the native alarm on my phone and / or watch bugging me until I eg. pump the tires on all our bikes every Wednesday night, or check the fridge for needed groceries every Thursday evening.

I have not been impressed with the UX of Apple’s native alarms and went on a bit of an expedition to see if another app will scratch that itch. I will spare you the details and summarize it with these two points:

1.  The  [‘Due’ app](https://www.dueapp.com/)  is probably the most polished alarm alternative, but it comes at a cost, and I don’t prefer it over the native iOS experience. As described in the article above, I like to use calendars directly and want calendar events tied to them.
2.  Todoist now has a calendar view that  [syncs with Google calendar](https://todoist.com/help/articles/experimental-features-AoHSTbqoX?utm_source=todoist&utm_medium=email&utm_campaign=2024_08_experimentalist_newsletter#calendar-today-mobile). This excited me at first because I absolutely adore Todoist’s approach to thoughtful and minimal design. I also use Google Calendar as the cloud that backs all of my calendars. However, Todoist does not support creating an event in a calendar and having it turn into a task with reminders. Furthermore, those reminders aren’t ‘pesty’ like alarms in the sense that they keep bugging me until I actually finish them.

I therefore have converged on the  [following straightforward iOS shortcut](https://www.icloud.com/shortcuts/170c6c72ddc74c6294ac794d5aabbb7c) which is surprisingly useful. Coupled with an Automation where it is run every time I navigate away from my Calendar app on my phone, it essentially clears out all the cluttered alarms on my iOS device and, crucially,  **uses my Calendar as the source of truth for one-off and recurring alarms**. I can’t emphasize that last point enough. I finally have a simple way to have my calendar encode all of my alarms and not accumulate a bunch of old alarms in the process, which is apparently the default behavior for Apple’s native app.

Some brief final thoughts:

-   I ressurrected a  [personal home page](https://geetduggal.com/)  recently. It’s meant to be just for my own satisfaction. I’ll probably write more about home pages in depth at some point. See this particularly fun  _New Yorker_  piece called ‘[The Revenge of the Home Page](https://www.newyorker.com/culture/infinite-scroll/the-revenge-of-the-home-page)’ for a tasty treatment.
-   The third installment of my Bullet Journaling experience (links for:  [1](https://medium.com/@geetduggal/bullet-journals-and-obsidian-15c52584cd83)  and  [2](https://medium.com/@geetduggal/your-obsidian-workflow-is-missing-a-physical-notebook-2e99866edcfc)) is coming hopefully soon!
-   I’m increasingly enjoying Apple native apps for Mail and Calendar backed by Google cloud for the most seamless experience.
-   I’m loving the Moleskine  [Volant Journal](https://www.moleskine.com/en-us/shop/notebooks/journals/volant-journals/)s for their rugged, ‘tear and share’ experience.
-   Check out Ellane’s  [recent post](https://medium.com/produclivity/ptpl-119-how-to-be-plain-text-enlightened-and-still-use-apples-reminders-d5cc314484dd)  that helps to shed some light on the pros and cons of a more traditional ‘iOS Reminders’ app for tasks after an interesting two-month stint with a plain text approach.

‘Till next time! 🏙️
