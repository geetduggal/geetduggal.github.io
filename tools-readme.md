# Plain Text Habits Suite

A set of tools built on plain text foundations, designed to work together. Each tool extends a different part of the workflow, but together they form a coherent system: tasks and projects live in markdown lists, time and events are visible on a calendar, and ephemeral daily work is captured and routed into your knowledge system.

## Why these tools?

Plain text is fast, portable, and future-proof. But raw markdown files benefit from smart interfaces layered on top. These tools follow a simple principle: **plain text stays clean underneath, while the tool layers a powerful interface on top.** Open the same files in any text editor and they're still just readable, searchable text.

**Kanban Plus** turns markdown lists into draggable boards. It handles cross-file list management so you can move tasks between files, and it integrates directly with Full Calendar Plus so your kanban cards can have dates and appear on your timeline. If you manage projects, areas of responsibility, or daily task lists in Obsidian, this is the backbone.

**Full Calendar Plus** adds a linear year view to the Obsidian Full Calendar plugin. When your notes have date properties in their YAML front matter, every note becomes a calendar event. Projects with start and end dates appear as spans of time on a timeline. Combined with property-based filtering and coloring, you get a view where the calendar and your organizational structure are the same system.

**Thousand Words** bridges ephemeral daily work to your knowledge system. Meaningful decisions, progress, and relationship-building happen in Slack conversations and disappear. This tool is AI-first: you point it at a markdown note containing screenshots of conversations, and it proposes mutations to your people, projects, and spaces notes. You review and accept or reject each change interactively. It follows the [Superpowers skill pattern](https://github.com/obra/superpowers) and runs as an AI agent skill, not as an Obsidian plugin.

## Installation

### Kanban Plus and Full Calendar Plus via BRAT

Both Obsidian plugins can be installed using [BRAT (Beta Reviewers Auto-update Tester)](https://github.com/TfTHacker/obsidian42-brat).

1. Open Obsidian Settings, go to Community Plugins, turn off Restricted Mode if needed
2. Click Browse, search for "BRAT", install and enable **Obsidian42 - BRAT**
3. Open BRAT settings, click "Add Beta plugin", paste the repository URL, click "Add Plugin"
4. Enable the plugin in Community Plugins

| Plugin | Repository URL |
|--------|---------------|
| Kanban Plus | `https://github.com/geetduggal/obsidian-kanban` |
| Full Calendar Plus | `https://github.com/geetduggal/obsidian-full-calendar` |

### Thousand Words via git clone

```bash
git clone https://github.com/geetduggal/thousand-words
```

Then symlink `skills/thousand-words` to your agent's skills directory and invoke the `thousand-words` skill. See the [repo README](https://github.com/geetduggal/thousand-words) for platform-specific instructions.
