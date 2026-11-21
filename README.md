# Calculator

This is a simple calculator I built using plain HTML, CSS, and JavaScript — no frameworks, no libraries, just vanilla JS.

## What it does

You type in a math expression and it gives you the answer. That's it.

It supports basic stuff: addition, subtraction, multiplication, division, and decimals. You can type numbers and operators either by clicking the on-screen buttons or just using your keyboard.

## How to use it

Open the index.html file in any browser and start clicking buttons or typing on your keyboard.

Keyboard shortcuts:
- Type numbers and operators (+ - * /) directly
- Press Enter to calculate
- Press Backspace to delete the last character
- Press Escape to clear everything

## How it works

The app grabs whatever you've typed, runs a quick check to make sure it only contains valid characters (numbers and operators), and then uses JavaScript's Function constructor to evaluate the expression. If something is wrong or invalid, it just shows "Error".

## Files

- index.html — the main page with the calculator layout
- style/style.css — all the styling
- src/app.js — all the logic

## Why I made this

This was a practice project to get comfortable with DOM manipulation and event handling in vanilla JavaScript.
