const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Set your desired port number

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    // Handle GET request
    const response_data = {"operation_code": 1};
    res.status(200).json(response_data);
});

app.post('/bfhl', (req, res) => {
    // Handle POST request
    try {
        const data = req.body;

        // Extract data from the input
        const input_data = data.data || [];
        
        // Initialize lists for numbers and alphabets
        const numbers = [];
        const alphabets = [];

        // Initialize a variable to keep track of the highest alphabet
        let highest_alphabet = null;

        // Loop through the data
        for (const item of input_data) {
            if (!isNaN(item)) {
                // If the item is a number, add it to the numbers list
                numbers.push(item);
            } else if (item.match(/[a-zA-Z]/)) {
                // If the item is an alphabet, add it to the alphabets list
                alphabets.push(item);

                // Check if it's the highest alphabet
                if (!highest_alphabet || item > highest_alphabet) {
                    highest_alphabet = item;
                }
            }
        }

        // Create the output object
        const output_data = {
            is_success: true,
            user_id: "Venkata_Naga_Kalyan_Puppala_15102003",
            email: "nagakalyan_puppala@srmap.edu.in",
            roll_number: "AP20110010509",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
        };

        res.status(200).json(output_data);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
