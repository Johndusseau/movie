var total_seconds = 60;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
function checkTime() {
  document.getElementById("QuizTimer").innerHTML =
    "Time Left: " + c_minutes + " minutes " + c_seconds + " seconds ";
  if (total_seconds <= 0) {
    setTimeout(submitAnswers(), 100);
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    setTimeout("checkTime()", 1000);
  }
}
setTimeout("checkTime()", 1000);

function submitAnswers() {
  var total = 10;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;
  var q6 = document.forms["quizForm"]["q6"].value;
  var q7 = document.forms["quizForm"]["q7"].value;
  var q8 = document.forms["quizForm"]["q8"].value;
  var q9 = document.forms["quizForm"]["q9"].value;
  var q10 = document.forms["quizForm"]["q10"].value;

  // for(i=1; i <= total; i++){
  //     if(eval('q'+1) == null|| eval('q'=i) ==''){
  //         alert("you missed question "+i);
  //         return false;
  // }
  // }

  var answers = ["d", "d", "b", "d", "c", "b", "c", "a", "d", "b"];

  for (i = 1; i <= 10; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++;
    }
  }
  var results = document.getElementById("results");
  results.innerHTML =
    "<h3>You Scored <span>" +
    score +
    "</span> out of <span>" +
    total +
    "</span></h3>";

  return false;
}
