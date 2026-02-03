var abcde = "abcdefghijklmnopqrstuvwxyz";

var abcdeAray = Array.from(abcde);

var abcdeContainer = document.getElementById("abcde-container");

console.log(abcdeContainer);

//Create abcde letters and add them to the DOM (abcde container) as spans located to each other.

abcdeAray.forEach(function (letter) {

    var letterSpan = document.createElement("span");

    var letterTextNode = document.createTextNode(letter);

    letterSpan.appendChild(letterTextNode);

    letterSpan.className = 'letter-box';

    abcdeContainer.appendChild(letterSpan);
});

// Object of lists (each list contain plenty of words).

var words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people: ["albert einstein", "isaac newton", "marie curie", "galileo galilei", "nikola tesla", "charles darwin"],
    counwrongAttempts: ["argentina", "belgium", "brazil", "denmark", "egypt", "finland", "germany", "hungary"]
};

// Generate random category and word.

var wordCategories = Object.keys(words);
// console.log(wordCategories);
randomCategoryName = wordCategories[Math.floor(Math.random() * wordCategories.length)];
// console.log(randomCategoryName);
randomCategoryList = words[randomCategoryName];
// console.log(randomCategoryName);
randomWord = randomCategoryList[Math.floor(Math.random() * randomCategoryList.length)];
console.log(randomWord);

// Insert the random category name into the DOM
var categorySpan = document.querySelector(".game-info .category span");
categorySpan.textContent = randomCategoryName;

// Create guessed letters spans
var gussedLettersContainer = document.getElementById("gussedletters-container");

insertGussedLetters(randomWord);

function insertGussedLetters(randomWord) {
    for (var i = 0; i < randomWord.length; i++) {
        var span = document.createElement("span");
        if (randomWord[i] === ' ') { // if space mark it
            span.className = 'space';
        } else { // if letter mark it
            span.className = 'letter';
        }
        gussedLettersContainer.appendChild(span); // insert it into the DOM ("gussedletters-container")
    }
}

// Assign Event listener to each letter from abcde container 
var letterSpans = document.getElementsByClassName("letter-box");

for (var i = 0; i < abcdeAray.length; i++) {
    letterSpans[i].addEventListener("click", doLogic);
}

// Fire when letter box is clicked!

var guessedLetters = document.querySelectorAll(".letters-guess .letter")
console.log(guessedLetters);

var wrongAttemptsElement = document.querySelector(".game-info .wrongAttempts span")

var wordWithNoSpace = randomWord.split(" ").join("");
var wordWithNoSpaceArray = Array.from(wordWithNoSpace); // To sync indeces as guessedLetters span indeces!!
var wrongAttempts = 0;
var successAttempts = wordWithNoSpaceArray.length;

function doLogic(e) {

    var theClickedLetterValue = e.target.textContent;
    // console.log(theClickedLetter);
    e.target.classList.add("clicked"); // Make it not pointable anymore as it's clicked!

    if (wordWithNoSpace.includes(theClickedLetterValue)) {
        // console.log("found");
        wordWithNoSpaceArray.forEach(function (letterValue, index) {
            if (letterValue == theClickedLetterValue) {
                successAttempts -= 1;
                // console.log(letterValue + " index: " + index);
                guessedLetters[index].textContent = letterValue;
                if (successAttempts == 0) {
                    setTimeout(() => {
                        alert("You've won the game!!");
                        location.reload();
                    }, 100);
                }
            }
        })
    } else {
        wrongAttempts += 1;
        wrongAttemptsElement.textContent = wrongAttempts;
        checkWrongAttempts(wrongAttempts);
    }
}

var theManParts = document.querySelectorAll(".man div")

function checkWrongAttempts(wrongAttempts) {
    if (wrongAttempts == 1) theManParts[0].style.visibility = "visible";
    if (wrongAttempts == 2) theManParts[1].style.visibility = "visible";
    if (wrongAttempts == 3) theManParts[2].classList.add("is-visible");
    if (wrongAttempts == 4) {
        theManParts[3].classList.add("is-visible");
        setTimeout(() => {
            alert("You have used all the available attempts, Game over!");
            location.reload();
        }, 100);
    }
}



