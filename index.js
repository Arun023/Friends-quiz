var readline = require("readline-sync");
const chalk = require('chalk');
var score = 0;
var userName = readline.question("What's Your Name? ");
console.log(chalk.yellowBright("\nWelcome " + userName + " Let's get Started how well do you know me?"));
console.log(chalk.yellowBright("Here I will Ask Some Question About me\n"));

// play funtion

function play(questions,answer)
{
  var userAnswer = readline.question(questions);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("Correct answer\n"));
    score++;
  }
  else{
    console.log(chalk.red("Wrong Answer"));
    console.log(chalk.green("Correct Answer is: "+ answer + "\n"))
  }
  console.log("Your Score: ", score);
  console.log("-------------------------\n");
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
  answer: "Rajasthan"
},
{
  question: "What's my Dream? ",
  answer: "Web Developer"
}
];

for(i=0; i<ques.length; i++){
  play(ques[i].question, ques[i].answer);
}
console.log(chalk.magenta("Your Final Score: ",score));