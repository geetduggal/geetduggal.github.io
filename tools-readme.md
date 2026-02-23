# Plain Text Habits Suite

A set of Obsidian plugins built to support a plain text productivity workflow. Each plugin extends Obsidian in a specific way, but together they form a coherent system: tasks and projects live in markdown lists, time and events are visible on a calendar, and images become searchable alongside your notes.

## Why these tools?

Plain text is fast, portable, and future-proof. But raw markdown files benefit from smart interfaces layered on top. These plugins follow a simple principle: **plain text stays clean underneath, while the plugin layers a powerful visual interface on top.** Open the same files in any text editor and they're still just readable, searchable text.

**Kanban Plus** turns markdown lists into draggable boards. It handles cross-file list management so you can move tasks between files, and it integrates directly with Full Calendar Plus so your kanban cards can have dates and appear on your timeline. If you manage projects, areas of responsibility, or daily task lists in Obsidian, this is the backbone.

**Full Calendar Plus** adds a linear year view to the Obsidian Full Calendar plugin. When your notes have date properties in their YAML front matter, every note becomes a calendar event. Projects with start and end dates appear as spans of time on a timeline. Combined with property-based filtering and coloring, you get a view where the calendar and your organizational structure are the same system. The year view lets you see the full landscape of what you're working on and what's coming next.

**Thousand Words** brings image search into Obsidian. Screenshots, photos of notebook pages, diagrams, and other visual captures are increasingly part of a plain text workflow. This plugin makes the text content within your images searchable, so your visual captures are as findable as your written notes.

Together, these three plugins cover the core actions of a plain text productivity system: **manage** (Kanban Plus), **plan and reflect** (Full Calendar Plus), and **capture and find** (Thousand Words).

## Installation via BRAT

All three plugins can be installed using [BRAT (Beta Reviewers Auto-update Tester)](https://github.com/TfTHacker/obsidian42-brat), which makes trying community plugins simple.

### Step 1: Install BRAT

1. Open Obsidian Settings
2. Go to Community Plugins and turn off Restricted Mode if needed
3. Click Browse, search for "BRAT", and install **Obsidian42 - BRAT**
4. Enable the BRAT plugin

### Step 2: Add plugins via BRAT

1. Open Obsidian Settings and go to BRAT
2. Click "Add Beta plugin"
3. Paste the repository URL and click "Add Plugin"
4. Enable the plugin in Community Plugins

Use the following repository URLs:

| Plugin | Repository URL | Status |
|--------|---------------|--------|
| Kanban Plus | `https://github.com/geetduggal/obsidian-kanban` | Available |
| Full Calendar Plus | `https://github.com/geetduggal/obsidian-full-calendar` | Available |
| Thousand Words | | In Development |

BRAT will handle downloading and updating each plugin automatically. When Thousand Words is ready, its repository URL will be added here.
