let container = document.querySelector(".container");

class Question {
  constructor(root, title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.root = root;
  }
  isCorrect(answer) {
    if (answer === this.correctAnswer) {
      return true;
    } else return false;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
  createUI() {
    let h2 = document.createElement("h2");
    h2.innerText = this.title;
    let div = document.createElement("div");
    div.classList.add("options");
    this.options.forEach((option) => {
      let label = document.createElement("label");
      let span = document.createElement("span");
      span.innerText = option;
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      label.append(input, span);
      div.append(label);
    });
    this.root.append(h2, div);
  }
}

let firstQuestion = new Question(
  container,
  "What is HTML?",
  ["HTML", "CSS", "React", "Node"],
  "Node"
);

firstQuestion.createUI();

class Quiz {
  constructor(allQues, activeIndex, score) {
    this.allQues = allQues;
    this.activeIndex = activeIndex;
    this.score = score;
  }
  nextQuestion() {
    return this.allQues[this.activeIndex + 1];
  }
}
