var readline = require("readline-sync");
var score = 0;
var userName = readline.question("What's Your Name? ");
console.log("Welcome " + userName + " to My Game");

// play funtion

function play(questions,answer)
{
  var userAnswer = readline.question(questions);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("Correct answer");
    score++;
  }
  else{
    console.log("Wrong Answer");
    score--;
  }
  console.log("Your Score: ", score);
  console.log("-------------------------");
}

var ques = [{
  question: "What's my Full Name? ",
  answer: "Arun choudhary"
},
{
  question: "What's my age? ",
  answer: "23"
},
{
  question: "Where I Live? ",
  answer: "Jodhpur"
},
{
  question: "What's my Dream? ",
  answer: "Web Developer"
}
];

for(i=0; i<ques.length; i++){
  play(ques[i].question, ques[i].answer);
}
console.log("Your Final Score: ",score);