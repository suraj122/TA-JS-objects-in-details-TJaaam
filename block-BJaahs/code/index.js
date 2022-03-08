// let question1Title = "Where is the capital of Jordan?";
// let question1Options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
// let question1correctAnswerIndex = 1;

// function question1IsAnswerCorrect(answer) {
//   if (answer === question1Options[question1correctAnswerIndex]) {
//     return true;
//   } else return false;
// }

// function question1GetCorrectAnswer() {
//   return question1Options[question1correctAnswerIndex];
// }

// let question1 = {
//   title: "Where is the capital of Jordan?",
//   options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   correctAnswerIndex: 1,
//   isAnswerCorrect: function (answer) {
//     if (answer === question1.options[question1.correctAnswerIndex]) {
//       return true;
//     } else return false;
//   },
//   getCorrectAnswer: function () {
//     return question1.options[question1.correctAnswerIndex];
//   },
// };

function createQues(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (answer) {
    if (answer === this.options[question.correctAnswerIndex]) {
      return true;
    } else return false;
  };
  question.getCorrectAnswer = function () {
    return this.options[question.correctAnswerIndex];
  };
  return question;
}

let question1 = createQues(
  "Where is the capital of Jordan?",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let question2 = createQues(
  "Where is the capital of India?",
  ["Mumbai", "Kolkata", "Delhi", "Punjab"],
  2
);
