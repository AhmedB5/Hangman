const laters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let latersArray = Array.from(laters);

let lattersContainer = document.querySelector(".letters");

latersArray.forEach((latter) => {
  let span = document.createElement("span");

  let theLatter = document.createTextNode(latter);

  span.appendChild(theLatter);

  span.className = "letter-box";

  lattersContainer.appendChild(span);
});

const words = {
  programiing: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
    "java",
    "ruby",
    "swift",
    "c++",
    "c#",
    "typescript",
    "kotlin",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
    "The Godfather",
    "The Shawshank Redemption",
    "Forrest Gump",
    "The Dark Knight",
    "Schindler's List",
    "Fight Club",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander the Great",
    "Cleopatra",
    "Mahatma Gandhi",
    "Leonardo da Vinci",
    "Marie Curie",
    "Napoleon Bonaparte",
    "Rosa Parks",
    "Nelson Mandela",
  ],
  countries: [
    "Syria",
    "Palestine",
    "Yemen",
    "Egypt",
    "Bahrain",
    "Qatar",
    "Iraq",
    "Germany",
    "France",
    "Brazil",
    "Japan",
    "Australia",
    "Canada",
  ],
};

let allkeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randomPropName = allkeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];
document.querySelector(".game-info .category span ").innerHTML = randomPropName;
let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "with-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});

let guessSpan = document.querySelectorAll(".letters-guess span");

WrongAttemps = 0;
let theDrow = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStautes = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    theChosenWord.forEach((wordLetter, WordIndex) => {
      if (theClickedLetter == wordLetter) {
        theStautes = true;

        guessSpan.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    //outside loop

    if (theStautes !== true) {
      WrongAttemps++;

      theDrow.classList.add(`wrong-${WrongAttemps}`);

      if (WrongAttemps === 8) {
        endGame();
        lattersContainer.classList.add("finished");
      }

      //Play Fail Sound
      document.getElementById("fail").play();
    } else {
      //      //Play Success Sound

      document.getElementById("Success").play();
    }
  }
});

function endGame() {
  let div = document.createElement("div");

  let divText = document.createTextNode(
    `Game Over, The Word Is (${randomValueValue})`
  );

  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);

  setTimeout(() => {
    let newGame = document.createElement("button");
    div.appendChild(newGame);
    newGame.innerHTML = "New Game";
    newGame.className = "newGamed";

    // إضافة الحدث click بعد إضافة الزر
    newGame.addEventListener("click", function () {
      location.reload();
    });
  }, 1500);
}
