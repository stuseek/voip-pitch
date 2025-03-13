const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Set HTTP basic auth credentials
app.use(basicAuth({
    users: { 'eyeclinic': 'eyecl1n!c#' },
    challenge: true,  // Shows browser popup for credentials
}));

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'build')));

// Handle all remaining requests with the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});