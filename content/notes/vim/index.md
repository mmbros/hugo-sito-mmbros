---
title: "Vim"
subtitle: "The ubiquitous text editor"
description: "Vim is a highly configurable text editor for efficiently creating and changing any kind of text. It is included as \"vi\" with most UNIX systems and with Apple OS X."
date: 2020-03-29T23:10:19+02:00
lastmod: 2020-04-09T17:24:26+02:00
categories: ["App", "Linux"]
tags: ["editor", "vim", "text"]
draft: true
---


## FAQ

### Caratteri speciali con Digraphs

Per inserire le vocali accentate ed altri caratteri speciali (euro, copyright, ...)
utilizzare `:digraphs`.

Digraphs si attiva in insert mode premendo <kbd>ctrl</kbd>+<kbd>k</kbd> + due lettere. 
Di seguito alcuni esempi:


|Char|Digraphs|Char|Digraphs|Char|Digraphs|
|:--:|:------:|:--:|:------:|:--:|:------:|
| á  |  `a'`  | α  | `a\*`  | ½  | `12`   |
| é  |  `e'`  | β  | `b\*`  | ¹  | `11`   |
| í  |  `i'`  | γ  | `g\*`  | ²  | `22`   |
| ó  |  `o'`  | δ  | `d\*`  | º  | `-o`   |
| ú  |  `u'`  | α  | `a\*`  | ª  | `-a`   |
| à  |   a\`  | À  |  A\`   | Ⅰ  | `1R`   |
| è  |   e\`  | È  |  E\`   | Ⅱ  | `2R`   |
| ì  |   i\`  | Ì  |  I\`   | Ⅲ  | `3R`   |
| ò  |   o\`  | Ò  |  O\`   | Ⅳ  | `4R`   |
| ù  |   u\`  | Ù  |  U\`   | ±  | `+-`   |

    
### Inserire la stessa stringa su più righe

Credits: [Insert the same string across multiple lines](https://stackoverflow.com/questions/9549729/vim-insert-the-same-characters-across-multiple-lines)

{{< img src="*insert_same_string*" >}}


1. Move the cursor to the start position of the target area.
2. Enter visual block mode (<kbd>Ctrl</kbd>+<kbd>v</kbd>).
3. Move to the last row of the target area.
4. Press <kbd>I</kbd> (capital i).
5. Type in the string. 
   Note: It will only update the screen in the *first* line of the target area -
   until <kbd>Esc</kbd> is pressed, at which point all lines will be updated.
6. Press <kbd>Esc</kbd>.

### Inserire una stringa N volte

if you are OK with leaving INSERT mode only once (at the end), this sequence works:

    Ctrl+o 80i# Esc

- <kbd>Ctrl</kbd>+<kbd>o</kbd> is used to issue normal commands without leaving INSERT mode,
- <kbd>80</kbd> the repetition,
- <kbd>i</kbd> to insert,
- <kbd>#</kbd> the character you want to insert,
- <kbd>Esc</kbd> to leave INSERT mode.



### Sostituire stringhe

#### Replace All

    :%s/foo/bar/g

Find each occurrence of 'foo' (in all lines), and replace it with 'bar'. 

#### Replace for specific lines

    :6,10s/foo/bar/g

Change each 'foo' to 'bar' for all lines from line 6 to line 10 inclusive. 

#### Replace in the current line

	:s/foo/bar/

### Dividere linee

The easiest way to split lines in Vim is the normal mode command `gq` (type both
letters in quick succession in normal or visual mode).

In visual mode, it will split whatever is selected, in normal mode, you follow
`gq` with a motion.

For example, `gql` will split one line to the currently set width. To set the
width of the split lines to be different from your current setting, you can use
`:set textwidth=n`, where `n` is the number of characters you want in a line,
e.g., `10` and change back to your normal width when you're done.



### Clipboard

[How to make vim paste from (and copy to) system's clipboard?](https://stackoverflow.com/questions/11489428/how-to-make-vim-paste-from-and-copy-to-systems-clipboard)

### Commenti con *NERD Commenter*

NERD Commenter lets you easily comment, uncomment or toggle comments in your code.

> For anyone who is confused by the usage, default leader is `\` so
>`10\cc` will comment ten lines and `10\cu` will uncomment those ten lines.

