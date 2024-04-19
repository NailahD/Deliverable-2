/*
step 1: prompt user for name
step 2: prompt for 3 or 6 holes of mini golf
step 4: prompt for score for each hole (use for loop)
step 5: keep track of score for each hole (use for loop)
step 6: compare score to par
step 7: if over par
---print aa
if under par
---print bb
if even with par
---print cc
^USE If/Else
*/

let userName = prompt("Welcome to GC mini golf! What is your name?");
let gameLength = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes?");
let score = 0;
let coursePar = gameLength *3; //3*3 or 9*3

for (let i = 1; i <= gameLength; i++) {
let puttNumber = Number(prompt("How many putts for hole " + i + "? (par: 3)"));
score += puttNumber;
}

console.log(coursePar);
console.log(score);

if (score < coursePar) {
    console.log("Great job, " + userName + "! Your total par was: - " + Number(coursePar - score)  + ".");
} else if (score > coursePar) {
    console.log("Nice try, " + userName + "... Your total par was: + " + Number(score - coursePar) + "." );
} else {
console.log("Good game, " + userName + ". Your total par was: 0.");
}