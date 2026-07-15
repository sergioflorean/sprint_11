const root = ReactDOM.createRoot(document.getElementById("root"));

function ApprovedStudents() {
  const students = [
    { id: 1, name: "Ana", grade: 85 },
    { id: 2, name: "Luis", grade: 60 },
    { id: 3, name: "Carla", grade: 92 },
    { id: 4, name: "Mario", grade: 55 },
  ];

  const approved = [];

  // Itera el arreglo de estudiantes para saber si la nota es mayor o igual a 70
  for (const student of students) {
    if (student.grade >= 70) {
      approved.push(student);
    }
  }

  return (
    <ul>
      {approved.map((student) => (
        <li key={student.id}>
          {student.name}: {student.grade}
        </li>
      ))}
    </ul>
  );
}

root.render(
  <>
    <ApprovedStudents />
  </>,
);
