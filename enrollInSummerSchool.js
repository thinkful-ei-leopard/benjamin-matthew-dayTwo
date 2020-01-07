function enrollInSummerSchool(students) {
    for(let i = 0; i < students.length; i++) {
        students[i].status = 'In Summer School';
    }
    return students;
}

let arr = enrollInSummerSchool([
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology'
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics'
    }
  ]);

  console.log(arr[0]);
  console.log(arr[1]);