var letters = "abcdefghijklmnopqrstuvwxyz";

var lettersAray = Array.from(letters);

var lettersContainer = document.getElementsByClassName("letters");

console.log(lettersAray);

lettersAray.forEach(function (letter) {
    var span = document.createElement("span");

    var theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.className = 'letter-box';

    lettersContainer[0].appendChild(span);
});

var words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people: ["albert einstein", "isaac newton", "marie curie", "galileo galilei", "nikola tesla", "charles darwin"],
    countries: ["argentina", "belgium", "brazil", "denmark", "egypt", "finland", "germany", "hungary"]
};

var allKeys = Object.keys(words);

console.log(allKeys);

randomPropertyName = allKeys[Math.floor(Math.random() * allKeys.length)];

console.log(randomPropertyName);

randomPropertyValue = words[randomPropertyName];

console.log(randomPropertyValue);

randomWord = randomPropertyValue[Math.floor(Math.random() * randomPropertyValue.length)];

console.log(randomWord);

var categorySpan = document.querySelector(".game-info .category span");

categorySpan.textContent = randomPropertyName;

var lettersGuessContainer = document.querySelector(".letters-guess");

var lettersAndSpace = Array.from(randomWord);

console.log(lettersAndSpace);

lettersAndSpace.forEach(function (arrElement) {
    var span = document.createElement("span");
    if (arrElement === ' ') {
        span.className = 'space';
    } else {
        span.className = 'letter';
    }
    lettersGuessContainer.appendChild(span);
});
var lettersSpan = document.querySelectorAll(".letter-box");

var triesElement = document.querySelector(".game-info .tries span")

var guessedLetters = document.querySelectorAll(".letters-guess .letter")
// console.log(guessedLetters[2].textContent);
// console.log(lettersSpan);
for (var i = 0; i < lettersAray.length; i++) {
    lettersSpan[i].addEventListener("click", doLogic);
}

var tries = 0;

function doLogic(e) {
    var theClickedLetter = e.target.textContent;
    console.log(theClickedLetter);
    e.target.classList.add("clicked");
    // console.log(lettersAndSpace);
    var wordWithNoSpace = randomWord.split(" ").join("");
    var wordWithNoSpaceArray = Array.from(wordWithNoSpace);
    // console.log(wordWithNoSpace);
    if (wordWithNoSpace.includes(theClickedLetter)) {
        console.log("found");
        wordWithNoSpaceArray.forEach(function (arrElement, index) {
            if (arrElement == theClickedLetter) {
                // console.log(arrElement + " index: " + index);
                guessedLetters[index].textContent = arrElement;
            }
        })
    }else{
        tries +=1;
        triesElement.textContent = tries;
    }
}
