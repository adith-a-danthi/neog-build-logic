// Q1
// Given an array of objects of student's marks:
const studentData = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

const getTotalMarks = (student) => {
  return student.maths + student.science + student.english + student.computer;
};

// Print the name and total marks of each student.
const printStudentDetails = (studentDetails) =>
  studentDetails.map((student) => {
    const totalMarks = getTotalMarks(student);
    console.log(`${student.name} - ${totalMarks}`);
  });
printStudentDetails(studentData);

// Print the name of student whose total marks is highest.
const printHighestMarksStudent = (studentDetails) =>
  studentDetails.reduce(
    (acc, student) => {
      const totalMarks = getTotalMarks(student);
      if (totalMarks > acc.totalMarks) {
        acc = {
          ...student,
          totalMarks,
        };
      }
      return acc;
    },
    { totalMarks: 0 }
  ).name;
console.log(printHighestMarksStudent(studentData));

// Print the name of student whose total marks is lowest.
const printLowestMarksStudent = (studentDetails) =>
  studentDetails.reduce(
    (acc, student) => {
      const totalMarks = getTotalMarks(student);
      if (totalMarks < acc.totalMarks) {
        acc = {
          ...student,
          totalMarks,
        };
      }
      return acc;
    },
    { totalMarks: Infinity }
  ).name;
console.log(printLowestMarksStudent(studentData));

// Print the average marks of the class in computer subject.
const printAverageMarksComputer = (studentDetails) =>
  studentDetails.reduce((acc, student) => acc + student.computer, 0) / studentDetails.length;
console.log(printAverageMarksComputer(studentData));

// Print the grades of all students:
// - Grade A if total marks is higher than or equal to 75%,
// - Grade B if higher than or equal to 60%,
// - Grade C if higher than or equal to 35%,
// - Grade D if lower than 35%.
const printGrades = (studentDetails) => {
  studentDetails.forEach((student) => {
    const totalMarks = getTotalMarks(student);
    if (totalMarks >= 0.75 * 400) {
      console.log(`${student.name} - Grade A`);
    } else if (totalMarks >= 0.60 * 400) {
      console.log(`${student.name} - Grade B`);
    } else if (totalMarks >= 0.35 * 400) {
      console.log(`${student.name} - Grade C`);
    } else {
      console.log(`${student.name} - Grade D`);
    }
  });
};
printGrades(studentData);

// Print the total number of students passed and their names. Pass when total marks is greater than 35%.
const printPassedStudents = (studentDetails) => {
  const passedStudents = studentDetails.filter(
    (student) => getTotalMarks(student) >= 0.35 * 400
  );
  console.log(`${passedStudents.length} students passed`);
  printStudentDetails(passedStudents);
};
printPassedStudents(studentData);
