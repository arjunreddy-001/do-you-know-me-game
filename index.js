// ex15: print the final score to the user

var readlineSync = require('readline-sync');

var score = 0;

function greetUser() {
    var user = readlineSync.question("What is your name? ");
    console.log("Welcome " + user + " to play quiz on How Much Do You Know Me?\n");

    readlineSync.question("Press any key to start quiz... ");
    console.clear();
}

function play(question, answer) {
    var userAnswer = readlineSync.question(question + " ");

    userAnswer = userAnswer.toUpperCase();
    answer = answer.toUpperCase();

    if (userAnswer === answer) {
        console.log("Right!");
        score = score + 1;
    }
    else {
        console.log("Wrong!");
    }
}

var highScores = [
    {
        name: "Arjun",
        score: 10
    },
    {
        name: "Niranjan",
        score: 9
    },
    {
        name: "Mythri",
        score: 7
    }
];

var questionList = [
    {
        question: "What is my last name?",
        answer: "Reddy"
    },
    {
        question: "What is my favorite colour?",
        answer: "Grey"
    },
    {
        question: "What is my favorite dish?",
        answer: "Idly"
    },
    {
        question: "Who is my childhood best friend?",
        answer: "Bibhu"
    },
    {
        question: "Do I like Cars?",
        answer: "Yes"
    },
    {
        question: "Do I own an Electric Vehicle?",
        answer: "Yes"
    },
    {
        question: "How many siblings do I have?",
        answer: "1"
    },
    {
        question: "Where do I live?",
        answer: "Bengaluru"
    },
    {
        question: "Which month did I born?",
        answer: "April"
    },
    {
        question: "Do I have any Diesel Vehicle?",
        answer: "No"
    }
];

function quiz() {
    for (var i = 0; i < questionList.length; i++) {
        play(questionList[i].question, questionList[i].answer)
    }
}

function showResult() {
    console.log("\nYour score: " + score + " / " + questionList.length + "\n");

    console.log("===============\n  High Scores\n===============");
    for (var i = 0; i < highScores.length; i++) {
        console.log("Name: " + highScores[i].name);
        console.log("Score: " + highScores[i].score);
        console.log("---------------");
    }
}

greetUser();
quiz();
showResult();

console.log("\nPlease send your score screenshot :)");