const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000; // Choose a port for your backend

app.use(cors());
app.use(bodyParser.json());

// Simulated student data (replace with your database)
const students = [
  { email: "student@example.com", password: "password123" },
  // Add more student data as needed
];

app.post("/api/student-signin", (req, res) => {
  const { email, password } = req.body;

  // Simulate student authentication (replace with actual authentication logic)
  const student = students.find(
    (user) => user.email === email && user.password === password
  );

  if (student) {
    // Student authenticated successfully
    res.status(200).json({ message: "Student authenticated successfully" });
  } else {
    // Authentication failed
    res.status(401).json({ error: "Invalid email or password" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
