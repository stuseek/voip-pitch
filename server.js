const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');
const geoip = require('geoip-lite');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple middleware to log IP and country to console for each request
app.use((req, res, next) => {
    // Get client IP (works on Heroku and other platforms with proxies)
    const ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress;

    // Clean the IP address (remove IPv6 prefix if present)
    const cleanIp = ip ? ip.replace(/::ffff:/, '').split(',')[0].trim() : 'Unknown';

    // Get country information
    const geo = geoip.lookup(cleanIp);
    const country = geo ? geo.country : 'Unknown';

    // Log to console
    console.log(`[${new Date().toISOString()}] Connection from IP: ${cleanIp}, Country: ${country}`);

    next();
});

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