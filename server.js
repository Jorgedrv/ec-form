const express = require('express'); //Line 1
const app = express(); //Line 2

// This displays message that the server running and listening to specified port
app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});