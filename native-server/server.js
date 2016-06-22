var app = require('./app.js')
var db = require('./db.js')
db.connect(function(err){
  if(!err)
  app.listen(3000);
});
