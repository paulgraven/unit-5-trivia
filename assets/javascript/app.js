var questions = {
  1: {
    question:
      "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    choices: [
      "A. William and Elizabeth",
      "B. Joseph and Catherine",
      "C. John and Mary",
      "D. George and Anne"
    ],
    answer: "C. John and Mary"
  },
  2: {
    question: "When did the Liberty Bell get its name?",
    choices: [
      "A. when it was made, in 1701",
      "B. when it rang on July 4, 1776",
      "C. in the 19th century, when it became a symbol of the abolition of slavery",
      "D. none of the above"
    ],
    answer:
      "C. in the 19th century, when it became a symbol of the abolition of slavery"
  },
  3: {
    question:
      "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    choices: ["A. Buttermilk", "B. Daisy", "C. Scout", "D. Tulip"],
    answer: "A. Buttermilk"
  },
  4: {
    question:
      "The Daniel Boon museum at the home where he died can best be described how?",
    choices: [
      "A. a log cabin in Kentucky",
      "B. a two-story clapboard house in Tennessee",
      "C. a four-story Georgian-style home in Missouri",
      "D. a three story brick house in Arkansas"
    ],
    answer: "C. a four-story Georgian-style home in Missouri"
  },
  5: {
    question:
      "Which of the following items was owned by the fewest U.S. homes in 1990?",
    choices: [
      "A. home computer",
      "B. compact disk player",
      "C. cordless phone",
      "D. dishwasher"
    ],
    answer: "B. compact disk player"
  },
  6: {
    question:
      "Who holds the record for the most victories in a row on the professional golf tour?",
    choices: [
      "A. Jack Nicklaus",
      "B. Arnold Palmer",
      "C. Byron Nelson",
      "D. Ben Hogan"
    ],
    answer: "C. Byron Nelson"
  },
  7: {
    question:
      "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
    choices: [
      "A. Reggie Jackson",
      "B. Harmon Killebrew",
      "C. Willie Mays",
      "D. Frank Robinson"
    ],
    answer: "C. Willie Mays"
  },
  8: {
    question:
      "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
    choices: ["A. 8", "B. 18", "C. 38", "D. 58"],
    answer: "B. 18"
  },
  9: {
    question:
      "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
    choices: [
      "A. cocker spaniel",
      "B. German shepherd",
      "C. Labrador retriever",
      "D. poodle."
    ],
    answer: "A. cocker spaniel"
  },
  10: {
    question:
      "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
    choices: [
      "A. 10 percent",
      "B. 15 percent",
      "C. 31 percent",
      "D. 51 percent"
    ],
    answer: "C. 31 percent"
  },
  11: {
    question:
      "The first black American pictured on a U.S. postage stamp was who?",
    choices: [
      "A. Frederick Douglass",
      "B. Booker T. Washington",
      "C. Louis Armstrong",
      "D. Joe Louis"
    ],
    answer: "D. Joe Louis"
  },
  12: {
    question: "What did the --D-- in --D-Day-- stand for?",
    choices: ["A. doom", "B. day", "C. Dwight (Eisenhower)", "D. Dunkirk"],
    answer: "B. day"
  },
  13: {
    question:
      "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
    choices: ["A. $1", "B. $5", "C.$10", "D.$20"],
    answer: "A. $1"
  },
  14: {
    question: "Which of these characters turned 40 years old in 1990?",
    choices: [
      "A. Charlie Brown",
      "B. Bugs Bunny",
      "C. Mickey Mouse",
      "D. Fred Flintstone"
    ],
    answer: "A. Charlie Brown"
  },
  15: {
    question:
      "The Philadelphia mint started putting a --P-- mint mark on quarters when?",
    choices: ["A. 1960", "B. 1970", "C. 1980", "D. never"],
    answer: "B. 1980"
  },
  16: {
    question:
      "Before becoming George Bush's Secretary of Defense, what was Dick Cheney's position?",
    choices: [
      "A. congressman from Wyoming",
      "B. governor of New Hampshire",
      "C. secretary of defense under Ronald Reagan",
      "D. retired"
    ],
    answer: "A. congressman from Wyoming"
  },
  17: {
    question:
      "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
    choices: ["A. 1", "B. 57", "C. 571", "D. 200"],
    answer: "B. 57"
  },
  18: {
    question: "In J. Edgar Hoover, what did the J stand for?",
    choices: ["A. James", "B. John", "C. Joseph", "D. Jane"],
    answer: "B. John"
  },
  19: {
    question:
      "Florence Nightingale became known as --the Lady With the Lamp-- during which war?",
    choices: [
      "A. American Civil War",
      "B. Crimean War",
      "C. World War I",
      "D. World War II"
    ],
    answer: "B. Crimean War"
  },
  20: {
    question:
      "What year was it that the Census Bureau first reported that a majority of new mothers  were remaining in the new job market?",
    choices: ["A. 1968", "B. 1978", "C. 1988", "D. 1995"],
    answer: "C. 1988"
  }
};

var intervalId;
var clockRunning = false;
var time = 10;

window.onload = function() {
  $("#newGame").on("click", start);
};

function start() {
  if (!clockRunning) {
    time = 10;
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
  addQuestions();
}

function count() {
  time--;
  $("#timeRemaining").text("Time Remaining: " + time);
  if (time <= 0) {
    stop();
    alert("Time is up!");
  }
}

function stop() {
  clearInterval(intervalId);
  clockRunning = false;
}

function addQuestions() {
  var questionNumber = Math.floor(Math.random() * 20);
  $("#question").text(questions[questionNumber].question);

  var choiceButtonA = $('<input type="radio" id="A" />');
  var choiceTextA = questions[questionNumber].choices[0];
  $("#choiceA").text(choiceTextA);
  choiceButtonA.prependTo("#choiceA");

  var choiceButtonB = $('<input type="radio" name="B" />');
  var choiceTextB = questions[questionNumber].choices[1];
  $("#choiceB").text(choiceTextB);
  choiceButtonB.prependTo("#choiceB");

  var choiceButtonC = $('<input type="radio" name="C" />');
  var choiceTextC = questions[questionNumber].choices[2];
  $("#choiceC").text(choiceTextC);
  choiceButtonC.prependTo("#choiceC");

  var choiceButtonD = $('<input type="radio" name="D" />');
  var choiceTextD = questions[questionNumber].choices[3];
  $("#choiceD").text(choiceTextD);
  choiceButtonD.prependTo("#choiceD");

  // var radio = document.getElementById("radioA").checked;
  // console.log(radio);
  // console.log($("input[name=B]:checked").val());
}
