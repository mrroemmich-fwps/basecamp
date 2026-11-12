# Page sources for 8/9 Collab Basecamp

The subject pages (math8/, science9/, …) are generated from the files in this folder.
GitHub Pages does not publish folders that start with "_", so this stays private-ish (it is still visible in the repository).

- `build.py` — page shell, unit lists, and which units are open. Run `python3 _build/build.py` (or `python3 _build/build.py math8`) to rebuild.
- `<subject>-unitN.html` — the content for one unit. Short-hands: `<!--MC [...]-->` quick check, `<!--NUM maker | $-->` number practice, `<!--CH maker-->` choice practice, `<!--EXP Title | text-->` Expedition, `<!--SIM coin|dice-->` simulator, `<!--CHEAT uN-->…<!--/CHEAT-->` printable cheat sheet.
- `<subject>-cheat.html` — page-level cheat sheet for pages built before per-unit cheat sheets.
