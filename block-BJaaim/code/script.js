let questionElem = document.querySelector(".question-elem");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let show = document.querySelector(".show");

class Question {
  constructor(title, options, correctIndex) {
    this.title = title;
    this.options = options;
    this.correctIndex = correctIndex;
  }
  isCorrect(answer) {
    if (this.options[this.correctIndex] === answer) {
      return true;
    } else return false;
  }
  getCorrectAnswer() {
    return this.options[this.correctIndex];
  }
}

class Quiz {
  constructor(allQuestion = [], score = 0) {
    this.allQuestion = allQuestion;
    this.activeIndex = 0;
    this.score = score;
  }
  incrementScore() {
    this.score = this.score + 1;
    // this.createUI();
  }
  addQuestion(title, options = [], correctIndex) {
    let question = new Question(title, options, correctIndex);
    this.allQuestion.push(question);
  }
  nextQuestion() {
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  prevQuestion() {
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
  }
  handleButton() {
    if (this.activeIndex === 0) {
      prev.style.visibility = "hidden";
    } else if (this.activeIndex === this.allQuestion.length - 1) {
      next.style.display = "none";
      show.style.display = "inline-block";
    } else {
      prev.style.visibility = "visible";
      next.style.display = "inline-block";
      show.style.display = "none";
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(input.value, input.checked);
  }
  createUI() {
    questionElem.innerHTML = "";
    let activeQuestion = this.allQuestion[this.activeIndex];

    let div = document.createElement("div");
    div.classList.add("single-ques");
    let h2 = document.createElement("h2");
    h2.innerText = activeQuestion.title;
    let form = document.createElement("form");
    form.classList.add("options");
    activeQuestion.options.forEach((option) => {
      let label = document.createElement("label");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option;
      let span = document.createElement("span");
      span.innerText = option;
      label.append(input, span);
      form.append(label);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          if (activeQuestion.isCorrect(input.value)) {
            this.incrementScore();
          }
        }
      });
    });
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Submit";
    button.type = "submit";

    this.handleButton();
    form.append(button);
    div.append(h2, form);
    questionElem.append(div);
  }
}

let myQuiz = new Quiz([], 0);
myQuiz.addQuestion("What is title?", ["HTML", "CSS", "JS", "Node"], 1);
myQuiz.addQuestion("What is HTML?", ["HTML", "CSS", "JS", "Node"], 3);
myQuiz.addQuestion("What is JavaScript?", ["HTML", "CSS", "JS", "Node"], 2);
myQuiz.addQuestion(
  "At what degree celsius does water boil?",
  ["100", "37", "50", "0"],
  0
);
myQuiz.addQuestion(
  "What is capital of India",
  ["Raxaul", "Darbhanga", "Chhapra", "Delhi"],
  3
);
myQuiz.createUI();

next.addEventListener("click", myQuiz.nextQuestion.bind(myQuiz));
prev.addEventListener("click", myQuiz.prevQuestion.bind(myQuiz));
show.addEventListener("click", () => {
  alert(`Your score is ${myQuiz.score}`);
});
