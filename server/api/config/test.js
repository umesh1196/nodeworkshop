db.users.insert({
    name:'Krish Advani',
    email:'krish@drcaos.com'
})

db.users.find({name:/[a-zA-Z]/})

db.users.update(
    {
        name:/Utsav/
    },
    {
        email:'Utsav@sample.com'
    },
    {
        upsert:true,
        multi:true
    }
);

db.users.remove({email:/009/})

db.users.drop();

db.users.update(
    {
        email:/omkar/
    },
    {   
        $set:{
            name:'Omkar Dusane'
        }
    },
    {
        upsert:false
    }
);


