/* Simple Node.js server to serve the frontend */

var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000;

//Prerender
app.use(
    require('prerender-node')
        .set('prerenderToken', process.env.PRERENDER_TOKEN)
        .whitelisted([
            /** Match root route (empty string) */
            '^(?![sS])',
            /** Match root route with trailing slash */
            '///ig',
            /** Match static routes exactly */
            '^/info$',
            '^/junction-week$',
            '^/volunteer$',
            '^/team$',
            '^/partners$',
            '^/terminal$',
            '^/transportation$',
            '^/live$',
            '^/demo$',
            '^/hardware$',
            '^/jobs$',

            /** Match dynamic routes so that they allow stuff to come after, e.g. challenges/cyber-challenge */
            '^/challenges'
        ])
        .blacklisted(['.html'])
);

// Serve any static files
app.use(express.static(path.join(__dirname, 'app/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

app.listen(port);
console.log('Listening on port', port);
