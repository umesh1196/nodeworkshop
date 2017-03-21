var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

var dbconn = require('./api/config/connection.js')

app.get('/signin',function(req,res){
    console.log(req.query);
    if(req.query.email && req.query.password){
      dbconn.get().users.find({
        email:req.query.email,
        password:req.query.password        
      }).toArray(function(error,docsArray){
        console.log(docsArray)
        if(docsArray.length ==1){
            res.json({ok:true,message:'valid user! enjoy'})
        }else{
            res.json({ok:false,message:'in-valid user! try again'})
        }
      });
    }else{
      res.json({ok:false,message:'Missing params'})
    }
    

});

;app.use('/', express.static('public'))
app.use('/ops', express.static('ops_site'))
dbconn.connect(function(){
  var r_api = require('./api/r_api');
  app.use('/api/',r_api);

  app.listen(1337,function(){
    console.log("listening on 1337");
  });
});
