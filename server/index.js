var express = require('express');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

var dbconn = require('./api/config/connection.js')
var secret = "234567890";
         
app.get('/signin',function(req,res){
    console.log(req.query);
    if(req.query.email && req.query.password){
      /*
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
      */
      dbconn.get().users.count({
        email:req.query.email,
        password:req.query.password        
      },function(err,count){
        if(count==1){
           var encoded = jwt.sign(
              {
                email:req.query.email
              }
              ,secret,
            { expiresIn: 60 });
           res.json({
            ok:true,
            message:'valid user! enjoy',
            token:encoded
           })       
        }
        else{
           res.json({ok:false,message:'No such user! bye'})    
        }
      });

    }else{
      res.json({ok:false,message:'Missing params'})
    }
});

app.get('/r/get',function(req,res){
  console.log('Someone is asking for all restraunts');
  var rs = [{name:'dadar t stall'},{name:'omkar foods'}];
  if(req.query.token || req.headers.token){
    let token = req.query.token || req.headers.token ;
    jwt.verify(token,secret,function(er,deco){
        if(er == null){
            console.log('success : ',deco)
            res.json({
              ok:true,
              rs:rs
            })
        }else{
            console.log('invalid token')
            res.json({ok:false,message:'you are fraud'})
        }    
    });    
  }else{
       res.json({ok:false,message:'No token'})
  }
})

app.use('/', express.static('public'))
//app.use('/ops', express.static('ops_site'))
dbconn.connect(function(){
  //var r_api = require('./api/r_api');
  //app.use('/api/',r_api);

  app.listen(1337,function(){
    console.log("listening on 1337");
  });
});
