let studentMarks = prompt("what is your score?");
function studentGrade () {
    if (studentMarks > 79 && studentMarks <= 100){
        return ("A");
    } else if (studentMarks >= 60 && studentMarks <= 79){
        return ("B");
    } else if (studentMarks > 49 && studentMarks <= 59){
        return ("C");
    } else if (studentMarks >= 40 && studentMarks <= 49){
        return ("D");
    } else if (studentMarks < 40 ){
        return ("E");
    } else {
        return (`Are you sure you scored ${studentMarks}?`);
    }
}
console.log(studentGrade());