const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define the POST endpoint
app.post('/bfhl', (req, res) => {
  // Extract data from the request
  const requestData = req.body;

  // Generate the user ID in the specified format
  const { full_name, dob, college_email, college_roll, numbers, alphabets } = requestData;
  const userId = `${full_name}_${dob.replace(/-/g, '')}`;

  // Find the highest alphabet in the input array of alphabets
  const highestAlphabet = Math.max(...alphabets.map(a => a.charCodeAt(0)));

  // Create a response object
  const response = {
    status: 'Success',
    user_id: userId,
    college_email,
    college_roll,
    numbers,
    alphabets,
    highest_alphabet: String.fromCharCode(highestAlphabet),
  };

  // Send the response
  res.json(response);
});

// Define the GET endpoint
app.get('/bfhl', (req, res) => {
  // This endpoint doesn't require user input, so you can return a hardcoded operation code
  const operationCode = 1;

  // Send the response with a 200 HTTP status code
  res.status(200).json({ operation_code: operationCode });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
