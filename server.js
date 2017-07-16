// includes express
const express = require('express');
// instantiates an app
const app = express();

const albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

const taquerias = [
  {name: "La Taqueria"},
  {name: "El Farolito"},
  {name: "Taqueria Cancun"}
];

// allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));

// define a response for GETs to '/'
app.get('/', (req, res) => {
  // send our client a friendly greeting
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/api/taquerias', (req, res) => res.json(taquerias));

app.get('/api/albums', (req, res) => {
  res.json(albums);
})

// listen on either $PORT env variable if it exists, otherwise defaults to 3000
app.listen(process.env.PORT || 3000, () => {
  // inform whoever started server where we're listening
  console.log('Example app listening at http://localhost:3000/');
})
