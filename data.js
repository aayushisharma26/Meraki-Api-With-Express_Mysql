const express= require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const userRoutes=require('./routes/routes.js')
app.use('/users',userRoutes)

app.listen(5000,()=>{
    console.log("Listerning to the portal")

})

