const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 3000;

// Routes for projects

app.use('/random-quote-generator', proxy('https://magical-queijadas-8ee93c.netlify.app/'));

app.use('/markdown-previewer', proxy('https://euphonious-mandazi-1b5b65.netlify.app/'));

app.use('/drum-machine', proxy('https://whimsical-kitsune-ec8c9e.netlify.app/'));


// Serve your index.html file at the root path

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle undefined routes (404 Not Found)

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});