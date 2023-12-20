const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 3000;

// Routes for projects
//app.use('/', proxy('https://sergiocreates.com'));
app.use('/random-quote-generator', proxy('https://magical-queijadas-8ee93c.netlify.app/'));
app.use('/markdown-previewer', proxy('https://euphonious-mandazi-1b5b65.netlify.app/'));
app.use('/drum-machine', proxy('https://whimsical-kitsune-ec8c9e.netlify.app/'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});