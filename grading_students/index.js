function gradingStudents(grade) {
  return grade.map(item => item >= 38 && item % 5 >= 3 ? item = item + 5 - (item % 5) : item )
}
console.log(gradingStudents([73, 67, 38, 33]));
