const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist/admin'));
// Start the app by listening on the default
// Heroku port

console.log("file called...");
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/admin/index.html'));
});
app.listen(process.env.PORT || 8080);