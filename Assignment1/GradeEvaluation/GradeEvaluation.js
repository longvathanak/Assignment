function evaluateGrade() {
  var grade = document.getElementById('gradeInput').value;
  var message = '';

  if (grade < 50) {
      message = "You have failed";
  } else if (grade >= 50 && grade < 75) {
      message = "You have passed";
  } else if (grade >= 75) {
      message = "You have excelled";
  }

  document.getElementById('result').innerText = message;
}
