/* const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Here, you can handle the data (e.g., save to a database or send an email)
    console.log('Contact Form Data Received:', req.body);

    // Respond back to the frontend
    res.json({
        success: true,
        message: 'Your message has been received!',
        data: { name, email, phone, message },
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); */