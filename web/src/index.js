const express = require('express')
const app = express()
const path = require('path');
const public = path.join(__dirname, 'public');
const port = 3000

app.use('/', express.static('public'));
app.use('/hls', express.static('hls'));

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})