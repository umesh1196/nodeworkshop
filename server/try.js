var a = 22
console.log(a);

var b = { 
    name : 'swift',
    model:2015,
    city:'Mumbai',
    cost:100000,
    age: function(y){
        return y-this.model;
    },
}

var calculateNewCost = function(car,year){
    var newCost = 0 ;
    newCost = 
    // 300 ms runtime start
    car.age(year) * car.cost / 100;
    newCost = car.cost - newCost;
    let timeOut = new Date().getTime()  + 3000 ;
    while((new Date().getTime())<timeOut){
        // nothing 
    }
    // end
    return newCost;
}

/*console.log(
"New Cost is (SYNC) :",
 calculateNewCost(b,2020)
    );
*/
//console.log('code after sync')

// async style

var calculateNewCostAsync = 
    function(car,year,next){
        console.log("x")
    let newCost = 
         // 300 ms runtime start
        car.age(year) * car.cost / 100;
        newCost = car.cost - newCost;
        // end
        /*setTimeout(function(){
           next(newCost);        
        },3000); */
        let timeOut = new Date().getTime()  + 3000 ;
        while((new Date().getTime())<timeOut){
            // nothing 
        }
        next(newCost)
    }


var afterCalculation = function(newCost){
    console.log(
        "New Cost is (ASYNC):",newCost
        );
}

//calculateNewCostAsync(b,2020,afterCalculation);
//console.log('code after async')


// JWT stuff below

var jwt = require('jsonwebtoken');
var user ={name:'Omkar'}
var secret = "234567890";
var encoded = jwt.sign(user,secret,
{ expiresIn: '1m' });

console.log('encoded : ',encoded);

//var decoded = jwt.decode(encoded)
//console.log('decoded : ',decoded);

jwt.verify(encoded,secret,function(er,deco){
    if(er == null){
        console.log('success : ',deco)
    }else{
        console.log('invalid token')
    }    
})


 









