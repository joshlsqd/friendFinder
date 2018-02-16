const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3003;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

