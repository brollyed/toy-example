const a = document.getElementById('userCount');
const b = document.getElementById('studentCount');
const c = document.getElementById('sessionCount');
const d = document.getElementById('studentsWithoutSessions');

//  Fetch data from the api
fetch("https://brollyed.github.io/toy-example/api/v1/data.json")
  .then(res => {
    //  parse response body json as javascript object
    return res.json();
  })
  .then(data => {
    //  update the UI elements
    a.innerHTML = data.users;
    b.innerHTML = data.students;
    c.innerHTML = data.sessions;
    d.innerHTML = data.studentsWithoutSession;
})

//  TODO 3.) Create a new card that displays
//  "Most Recent Login: {{date}}"
//  (Use the new user api at .../api/v2/users.json)

//  TODO 4.) Update the "Students without sessions" card 
//  to display the names of all students 
//  who have not yet attended a session.
//  (Use new student and session apis at
//  .../api/v2/students.json and .../api/v2/sessions.json)
