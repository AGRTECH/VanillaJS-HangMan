const head = document.querySelector(".head");
const arms = document.querySelector(".arms");
const legs = document.querySelector(".legs");
const btn = document.querySelector(".btn-test");
const space = document.querySelector(".space");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const ee = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
const m = document.querySelector(".m");
const n = document.querySelector(".n");
const o = document.querySelector(".o");
const p = document.querySelector(".p");
const q = document.querySelector(".q");
const r = document.querySelector(".r");
const s = document.querySelector(".s");
const t = document.querySelector(".t");
const u = document.querySelector(".u");
const v = document.querySelector(".v");
const w = document.querySelector(".w");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const z = document.querySelector(".z");
const letters = document.querySelectorAll(".letter");
const playBtn = document.querySelector(".play-btn");
const category = document.querySelector(".chosen-category");
const guessWord = document.querySelector(".whats-the-word");
const placeholders = document.querySelector(".placeholders");
const lives = document.querySelector(".lives");
const realWord = document.querySelector(".real-word");
const letterHolder = document.querySelector(".letters-holder");
const placeholderplaceholder = document.querySelector(
  ".placeholderplaceholder"
);

let realWordArr = [];

// random numbers

const categoriesArr = [
  "Animals",
  "States",
  "Jobs",
  "Companies",
  "Programming Language",
];

const animalsArr = ["shrew", "giraffe", "bat"];
const statesArr = ["nevada", "arkansas", "michigan"];
const jobsArr = ["mcdonalds manager", "carpenter", "plumber"];
const companiesArr = ["virgin galactic", "nio", "amazon"];
const programmingArr = ["python", "ruby", "assembly"];

let livesNum = 3;
let temp;
let guessWordArr;

playBtn.addEventListener("click", (e) => {
  playBtn.remove();
  let randomNumZeroToFour = Math.floor(Math.random() * 5);
  let randomNumZeroToTwo = Math.floor(Math.random() * 3);
  category.textContent = `The chosen category is ${categoriesArr[randomNumZeroToFour]}`;

  if (category.textContent.includes("Animals")) {
    guessWord.textContent = animalsArr[randomNumZeroToTwo];
    for (let i = 1; i <= guessWord.textContent.length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.className = "letterplaceholder";
      placeholderplaceholder.append(letterDiv);
    }
  }

  if (category.textContent.includes("States")) {
    guessWord.textContent = statesArr[randomNumZeroToTwo];
    for (let i = 1; i <= guessWord.textContent.length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.className = "letterplaceholder";
      placeholderplaceholder.append(letterDiv);
    }
  }

  if (category.textContent.includes("Jobs")) {
    guessWord.textContent = jobsArr[randomNumZeroToTwo];
    for (let i = 1; i <= guessWord.textContent.length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.className = "letterplaceholder";
      placeholderplaceholder.append(letterDiv);
    }
  }

  if (category.textContent.includes("Companies")) {
    guessWord.textContent = companiesArr[randomNumZeroToTwo];
    for (let i = 1; i <= guessWord.textContent.length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.className = "letterplaceholder";
      placeholderplaceholder.append(letterDiv);
    }
  }

  if (category.textContent.includes("Programming")) {
    guessWord.textContent = programmingArr[randomNumZeroToTwo];
    for (let i = 1; i <= guessWord.textContent.length; i++) {
      let letterDiv = document.createElement("div");
      letterDiv.className = "letterplaceholder";
      placeholderplaceholder.append(letterDiv);
    }
  }

  guessWordArr = guessWord.textContent.split("");
  for (let i = 0; i < guessWordArr.length; i++) {
    temp = document.createElement("div");
    temp.className = `letter-${i} hide-letter`;
    temp.textContent = guessWordArr[i];
    letterHolder.append(temp);
  }
  const hiddenLetter = document.querySelectorAll(".hide-letter");

  letters.forEach((letter) => {
    letter.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("a") &&
        guessWord.textContent.includes("a")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "a") {
            letter.classList.add("show-letter");
          }
        });
        a.remove();
      } else if (
        e.target.classList.contains("a") &&
        !guessWord.textContent.includes("a")
      ) {
        incorrectGuess(a);
      } else if (
        e.target.classList.contains("b") &&
        guessWord.textContent.includes("b")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "b") {
            letter.classList.add("show-letter");
          }
        });
        b.remove();
      } else if (
        e.target.classList.contains("b") &&
        !guessWord.textContent.includes("b")
      ) {
        incorrectGuess(b);
      } else if (
        e.target.classList.contains("c") &&
        guessWord.textContent.includes("c")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "c") {
            letter.classList.add("show-letter");
          }
        });
        c.remove();
      } else if (
        e.target.classList.contains("c") &&
        !guessWord.textContent.includes("c")
      ) {
        incorrectGuess(c);
      } else if (
        e.target.classList.contains("d") &&
        guessWord.textContent.includes("d")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "d") {
            letter.classList.add("show-letter");
          }
        });
        d.remove();
      } else if (
        e.target.classList.contains("d") &&
        !guessWord.textContent.includes("d")
      ) {
        incorrectGuess(d);
      } else if (
        e.target.classList.contains("e") &&
        guessWord.textContent.includes("e")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "e") {
            letter.classList.add("show-letter");
          }
        });
        ee.remove();
      } else if (
        e.target.classList.contains("e") &&
        !guessWord.textContent.includes("e")
      ) {
        incorrectGuess(ee);
      } else if (
        e.target.classList.contains("f") &&
        guessWord.textContent.includes("f")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "f") {
            letter.classList.add("show-letter");
          }
        });
        f.remove();
      } else if (
        e.target.classList.contains("f") &&
        !guessWord.textContent.includes("f")
      ) {
        incorrectGuess(f);
      } else if (
        e.target.classList.contains("g") &&
        guessWord.textContent.includes("g")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "g") {
            letter.classList.add("show-letter");
          }
        });
        g.remove();
      } else if (
        e.target.classList.contains("g") &&
        !guessWord.textContent.includes("g")
      ) {
        incorrectGuess(g);
      } else if (
        e.target.classList.contains("h") &&
        guessWord.textContent.includes("h")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "h") {
            letter.classList.add("show-letter");
          }
        });
        h.remove();
      } else if (
        e.target.classList.contains("h") &&
        !guessWord.textContent.includes("h")
      ) {
        incorrectGuess(h);
      } else if (
        e.target.classList.contains("i") &&
        guessWord.textContent.includes("i")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "i") {
            letter.classList.add("show-letter");
          }
        });
        i.remove();
      } else if (
        e.target.classList.contains("i") &&
        !guessWord.textContent.includes("i")
      ) {
        incorrectGuess(i);
      } else if (
        e.target.classList.contains("j") &&
        guessWord.textContent.includes("j")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "j") {
            letter.classList.add("show-letter");
          }
        });
        j.remove();
      } else if (
        e.target.classList.contains("j") &&
        !guessWord.textContent.includes("j")
      ) {
        incorrectGuess(j);
      } else if (
        e.target.classList.contains("k") &&
        guessWord.textContent.includes("k")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "k") {
            letter.classList.add("show-letter");
          }
        });
        k.remove();
      } else if (
        e.target.classList.contains("k") &&
        !guessWord.textContent.includes("k")
      ) {
        incorrectGuess(k);
      } else if (
        e.target.classList.contains("l") &&
        guessWord.textContent.includes("l")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "l") {
            letter.classList.add("show-letter");
          }
        });
        l.remove();
      } else if (
        e.target.classList.contains("l") &&
        !guessWord.textContent.includes("l")
      ) {
        incorrectGuess(l);
      } else if (
        e.target.classList.contains("m") &&
        guessWord.textContent.includes("m")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "m") {
            letter.classList.add("show-letter");
          }
        });
        m.remove();
      } else if (
        e.target.classList.contains("m") &&
        !guessWord.textContent.includes("m")
      ) {
        incorrectGuess(m);
      } else if (
        e.target.classList.contains("n") &&
        guessWord.textContent.includes("n")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "n") {
            letter.classList.add("show-letter");
          }
        });
        n.remove();
      } else if (
        e.target.classList.contains("n") &&
        !guessWord.textContent.includes("n")
      ) {
        incorrectGuess(n);
      } else if (
        e.target.classList.contains("o") &&
        guessWord.textContent.includes("o")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "o") {
            letter.classList.add("show-letter");
          }
        });
        o.remove();
      } else if (
        e.target.classList.contains("o") &&
        !guessWord.textContent.includes("o")
      ) {
        incorrectGuess(o);
      } else if (
        e.target.classList.contains("p") &&
        guessWord.textContent.includes("p")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "p") {
            letter.classList.add("show-letter");
          }
        });
        p.remove();
      } else if (
        e.target.classList.contains("p") &&
        !guessWord.textContent.includes("p")
      ) {
        incorrectGuess(p);
      } else if (
        e.target.classList.contains("q") &&
        guessWord.textContent.includes("q")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "q") {
            letter.classList.add("show-letter");
          }
        });
        q.remove();
      } else if (
        e.target.classList.contains("q") &&
        !guessWord.textContent.includes("q")
      ) {
        incorrectGuess(q);
      } else if (
        e.target.classList.contains("r") &&
        guessWord.textContent.includes("r")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "r") {
            letter.classList.add("show-letter");
          }
        });
        r.remove();
      } else if (
        e.target.classList.contains("r") &&
        !guessWord.textContent.includes("r")
      ) {
        incorrectGuess(r);
      } else if (
        e.target.classList.contains("s") &&
        guessWord.textContent.includes("s")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "s") {
            letter.classList.add("show-letter");
          }
        });
        s.remove();
      } else if (
        e.target.classList.contains("s") &&
        !guessWord.textContent.includes("s")
      ) {
        incorrectGuess(s);
      } else if (
        e.target.classList.contains("t") &&
        guessWord.textContent.includes("t")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "t") {
            letter.classList.add("show-letter");
          }
        });
        t.remove();
      } else if (
        e.target.classList.contains("t") &&
        !guessWord.textContent.includes("t")
      ) {
        incorrectGuess(t);
      } else if (
        e.target.classList.contains("u") &&
        guessWord.textContent.includes("u")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "u") {
            letter.classList.add("show-letter");
          }
        });
        u.remove();
      } else if (
        e.target.classList.contains("u") &&
        !guessWord.textContent.includes("u")
      ) {
        incorrectGuess(u);
      } else if (
        e.target.classList.contains("v") &&
        guessWord.textContent.includes("v")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "v") {
            letter.classList.add("show-letter");
          }
        });
        v.remove();
      } else if (
        e.target.classList.contains("v") &&
        !guessWord.textContent.includes("v")
      ) {
        incorrectGuess(v);
      } else if (
        e.target.classList.contains("w") &&
        guessWord.textContent.includes("w")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "w") {
            letter.classList.add("show-letter");
          }
        });
        w.remove();
      } else if (
        e.target.classList.contains("w") &&
        !guessWord.textContent.includes("w")
      ) {
        incorrectGuess(w);
      } else if (
        e.target.classList.contains("x") &&
        guessWord.textContent.includes("x")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "x") {
            letter.classList.add("show-letter");
          }
        });
        x.remove();
      } else if (
        e.target.classList.contains("x") &&
        !guessWord.textContent.includes("x")
      ) {
        incorrectGuess(x);
      } else if (
        e.target.classList.contains("y") &&
        guessWord.textContent.includes("y")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "y") {
            letter.classList.add("show-letter");
          }
        });
        y.remove();
      } else if (
        e.target.classList.contains("y") &&
        !guessWord.textContent.includes("y")
      ) {
        incorrectGuess(y);
      } else if (
        e.target.classList.contains("z") &&
        guessWord.textContent.includes("z")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === "z") {
            letter.classList.add("show-letter");
          }
        });
        z.remove();
      } else if (
        e.target.classList.contains("z") &&
        !guessWord.textContent.includes("z")
      ) {
        incorrectGuess(z);
      } else if (
        e.target.classList.contains("space") &&
        guessWord.textContent.includes(" ")
      ) {
        hiddenLetter.forEach((letter) => {
          if (letter.innerHTML === " ") {
            letter.classList.add("show-letter");
          }
        });
        space.remove();
      } else if (
        e.target.classList.contains("space") &&
        !guessWord.textContent.includes(" ")
      ) {
        incorrectGuess(space);
      }

      if (
        document.querySelectorAll(".show-letter").length === guessWordArr.length
      ) {
        let youWinDiv = document.createElement("div");
        let tryAgainBtn = document.createElement("btn");
        youWinDiv.className = "youwindiv";
        youWinDiv.textContent = "You Win!";
        tryAgainBtn.className = "tryagainbtn";
        tryAgainBtn.textContent = "Play Again?";
        document.body.append(youWinDiv);
        youWinDiv.append(tryAgainBtn);
        tryAgainBtn.addEventListener("click", () => {
          window.location.reload();
        });
      }
    });
  });
});

const incorrectGuess = (l) => {
  livesNum--;
  lives.textContent = `Lives Remaining: ${livesNum}`;
  if (livesNum === 2) {
    head.classList.add("show-hangman");
  } else if (livesNum === 1) {
    arms.classList.add("show-hangman");
  } else if (livesNum === 0) {
    legs.classList.add("show-hangman");
    let gameOverDiv = document.createElement("div");
    let tryAgainBtn = document.createElement("btn");
    gameOverDiv.className = "gameoverdiv";
    gameOverDiv.textContent = "Game Over!";
    tryAgainBtn.className = "tryagainbtn";
    tryAgainBtn.textContent = "Try Again?";
    document.body.append(gameOverDiv);
    gameOverDiv.append(tryAgainBtn);
    tryAgainBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
  l.remove();
};
