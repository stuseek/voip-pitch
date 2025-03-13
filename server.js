const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy settings (important for Heroku)
app.set('trust proxy', true);

// Basic Auth middleware
app.use(basicAuth({
    users: { 'eyeclinic': 'eyecl1n!c#' },
    challenge: true,
}));

// IP and country logging middleware
app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const geo = geoip.lookup(ip);
    const country = geo ? geo.country : 'Unknown';

    console.log(`[ACCESS] IP: ${ip}, Country: ${country}`);
    next();
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Serve React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});