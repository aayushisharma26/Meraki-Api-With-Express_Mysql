const data=require('../saral_data.json')

const db = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "123@Navgurukul",
      database: "meraki",
    },
  })

exports.getAllUsers=(req,res)=>{
    return db
    .select("*")
    .from("Meraki_Table")
    .then(row =>{
        res.send(row)
    })
  }

exports.getbyid=(req,res)=>{
    const id=req.params.id
    console.log(id)
    return db
    .select("*")
    .from("Meraki_Table")
    .where('id',id)
    .then(row=>{
      res.send(row)
    })
    
  }  


  exports.post=((req,res)=>{
    const data_={
      id:req.body.id,
      name:req.body.name,
      logo:req.body.logo,
      days_to_complete:req.body.days_to_complete,
      short_description:req.body.short_description,
      type:req.body.type
  
    }
    return db('Meraki_Table')
  .insert(data_)
  .then(() => console.log("DATA INSERTED"))
  .then((row=>{
    res.send("DATA INSERTED")
  }));
});

    
exports.put=(req, res) => {
  // console.log(req.params,"nnnnn");
  // console.log(req.body,"kkkk");
  const {id }= req.params;
  const changes = req.body;
  const data1={
    //id:req.body.id,
    name:req.body.name,
    logo:req.body.logo,
    days_to_complete:req.body.days_to_complete,
    short_description:req.body.short_description,
    type:req.body.type
  };
  db("Meraki_Table")
    .where("id", changes.id)
    .update(data1)
    .then((data) => {
      console.log("DATA UPDATED");
      res.send("Data UPDATE")
    })
    .catch((err) => {
      console.log(err, "err");
      res.send(err);
    });
};  

exports.delete=(req,res)=>{
  const {id }= req.params;
  //const delete = req.body;
  const data2={
    //id:req.body.id,
    name:req.body.name,
    logo:req.body.logo,
    days_to_complete:req.body.days_to_complete,
    short_description:req.body.short_description,
    type:req.body.type
  };
  db ("Meraki_Table")
  .where({id:id})
  .delete()
    
  .then((data) => {
    console.log("DATA DELETE");
      
    res.send("DATA DELETE")
  })
  .catch((err) => {
    console.log(err, "err");
    res.send(err);
    
  });

};  




 

