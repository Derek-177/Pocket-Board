# Pocket Board

A simple sticky-note board built with plain HTML, CSS and JavaScript. No frameworks, no build step, no installs.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure: heading, input form, toolbar and note board |
| `style.css` | All styling, including light and dark themes |
| `script.js` | Adding, finishing, removing and saving notes |

Keep all three files in the same folder.

## How to run

1. Put the three files in one folder.
2. Double-click `index.html` to open it in a browser (Chrome, Edge, Safari or Firefox).

An internet connection is only needed to load the Bricolage Grotesque font. Without it, the page falls back to your system font and works the same.

## How to use

- Type a note and press **Add note** or Enter. It appears as a coloured sticky note.
- Press **Done** on a note to cross it off. Press **Undo** to bring it back.
- Press **Remove** to delete a single note.
- **Clear finished** removes every crossed-off note.
- **Clear all** empties the board after asking you to confirm.

Notes are saved in your browser's local storage, so they stay after you close the page. They are private to that browser and are not sent anywhere.

## Customising

- **Colours:** edit the variables at the top of `style.css` (`--paper`, `--ink`, `--note-1` to `--note-4`). A second block right below sets the dark theme.
- **Note length:** change `maxlength="80"` on the input in `index.html`.
- **Reset all data:** clear this site's data in your browser settings, or run `localStorage.removeItem("pocket-board-notes")` in the browser console.

## Putting it online

Upload the three files to any static host (GitHub Pages, Netlify, Vercel or similar). No server is needed.
