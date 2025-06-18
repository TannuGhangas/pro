//1.   Use express.json() middleware and create a POST /register route to 
// accept user data (name, email) in JSON format and respond with a success message.

//2.   Create a route GET /user/:id that responds with:
// "User ID is: <id>"

const express = require('express');
const app = express();

// Middleware to handle JSON and form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST /register route
app.post('/register', (req, res) => {
  const { name, email } = req.body;

  // Log data to terminal
  console.log("Received:", req.body);

  res.json({
    message: 'Success',
    data: {
      name,
      email
    }
  });
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});


app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});