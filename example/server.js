const express = require('express');
const path = require('path');
//const helmet = require('helmet')
//const cors = require('cors')

const app = express();

// Serve static files from the React app
//app.use(helmet())
//app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Demo App listening on ${port}`);