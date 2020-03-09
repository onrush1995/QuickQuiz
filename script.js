/**
 *                 To-Do list
 * 1.Made all the answer & question for the program.
 * 2.Compare input with if/else if statment.
 * 3.Finally award based on the correct answer.
 */

//1961,Fortran,intel,1995,Javascript
// Declare all the answer and question for the program
let score;
const ques1 = prompt("Which Year first web page was invented: ");
const ques2 = prompt("What was the first commercially avaiable language: ");
const ques3 = prompt("Which company first introduces the microprocessor: ");
const ques4 = prompt("Which year javascript was invented: ");
const ques5 = prompt("Which programming languages used in most popular websites: ");

const input1 = +ques1;
const input2 = ques2.toUpperCase();
const input3 = ques3.toUpperCase();
const input4 = ques4.toUpperCase();
const input5 = ques5.toUpperCase();

const answer1= 1961;
const answer2= "FORTRAN";
const answer3= "INTEL";
const answer4= 1995;
const answer5= "JAVASCRIPT";

if(answer1 !== input1){
    document.writeln(`1.You have typed the wrong answer,the correct answer is ${answer1}.`);
}else {
    document.writeln(`1.You have typed the correct answer.`);
}

if(answer2 !== input2){
    document.writeln(`2.You have typed the wrong answer,the correct answer is ${answer2}.`);
}else {
    document.writeln(`2.You have typed the correct answer.`);
}

if(answer3 !== input3){
    document.writeln(`3.You have typed the wrong answer,the correct answer is ${answer3}.`);
}else {
    document.writeln(`3.You have typed the correct answer.`);
}

if(answer4 !== input4){
    document.writeln(`4.You have typed the wrong answer,the correct answer is ${answer4}.`);
}else {
    document.writeln(`4.You have typed the correct answer.`);
}
if(answer5 !== input5){
    document.writeln(`5.You have typed the wrong answer,the correct answer is ${answer5}.`);
}else {
    document.writeln(`5.You have typed the correct answer.`);
}


