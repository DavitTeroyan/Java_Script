 const students = [
      { name: "Aram",   grade: 85 },
      { name: "Lilit",  grade: 42 },
      { name: "Karen",  grade: 91 },
      { name: "Nare",   grade: 55 },
      { name: "Tigran", grade: 78 },
    ];

var name = students.filter(student => student.grade >= 60);
console.log(name);     
var only_name = students.map(string => string.name );
console.log(only_name);
var mid_grade = students.reduce((sum,student) => sum + student.grade, 0) / students.length;
console.log(mid_grade);