const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('App - Star Wars Intro');
});

app.listen(3000, () => console.log('Application is running on port 3000!'));
