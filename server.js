const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic auth middleware
app.use(basicAuth({
    users: { 'eyeclinic': 'eyecl1n!c#' },
    challenge: true,
}));

// Middleware to get client IP
app.use(request-ip.mw());

// Middleware to log IP and country
app.use((req, res, next) => {
    const ip = requestIp.getClientIp(req);
    const geo = geoip.lookup(ip);

    const country = geo ? geoip.lookup(ip).country : 'Unknown';

    console.log(`[ACCESS] IP: ${ip}, Country: ${country}`);

    next();
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});