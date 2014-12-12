

var express = require('express');

var app = express();

app.set("view engine",'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('index')
});

var port = process.env.PORT || 8084

app.listen(port,function(){
  console.log('the app is running on http://localhost: ' + port);
  console.log("port is " + port);
})