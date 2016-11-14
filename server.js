/* Simple image API
 * Author: Lawrence Li
 */

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/emotes/:name', function (req, res) {

  var file = req.params.name;
  var filePath = "/emotes/"+file;
  res.sendFile(filePath, function (err) {
    if (err) {
      console.log(err);
      res.status(404).send('Invalid url.');
    }
    else {
      console.log("Sent:", filePath);
    }
  });

})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Listening at http://%s:%s", host, port)

})
