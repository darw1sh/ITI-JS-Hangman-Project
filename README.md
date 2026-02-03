# 🪢 Hangman Game (JavaScript)

A simple **Hangman-style word guessing game** built using **vanilla JavaScript**, **HTML**, and **CSS**.
The game randomly selects a category and a word, lets the user guess letters, and visually tracks wrong attempts using a hangman figure.

---

## 🎮 How the Game Works

1. Alphabet letters (A–Z) are dynamically generated and displayed as clickable elements.
2. A random category and word are selected on each page load.
3. The word is hidden and displayed as empty letter slots.
4. The player clicks letters to guess:
   - ✅ Correct guesses reveal the letter(s).
   - ❌ Wrong guesses increase the attempt counter and reveal parts of the hangman.
5. The game ends when:
   - 🎉 All letters are guessed → **Win**
   - 💀 Maximum wrong attempts reached → **Game Over**

---

## 📂 Project Structure

```
ITI-JS-Hangman-Project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 Game Logic Overview

### Alphabet Generation
- Converts the alphabet string into an array using `Array.from()`
- Each letter is rendered as a clickable `<span>` in the DOM

### Word & Category Selection
- Categories and words are stored in an object
- A random category and word are selected on each reload

### Guess Handling
- Clicking a letter:
  - Marks it as clicked (disabled)
  - Checks if the letter exists in the selected word
  - Updates guessed letters or wrong attempts accordingly

### Win / Lose Conditions
- **Win:** All letters guessed correctly
- **Lose:** 4 wrong attempts → game over

---

## 🧩 Categories Included

- **Programming:** php, javascript, python, etc.
- **Movies:** inception, interstellar, coco, etc.
- **People:** albert einstein, nikola tesla, etc.
- **Countries:** argentina, egypt, germany, etc.

---

## ⚙️ Key JavaScript Features Used

- `Array.from()`
- DOM manipulation
- Event listeners
- `Math.random()`
- `classList`
- `setTimeout()`

---

## 🚀 How to Run the Game

1. Download or clone the project
2. Open `index.html` in your browser
3. Start guessing letters 🎯

---

## 🔧 Possible Improvements

- Add Category selection page
- Add animations and sounds
- Difficulty levels
- Better UI feedback

---

## 📜 License

Free to use for learning and personal projects.
