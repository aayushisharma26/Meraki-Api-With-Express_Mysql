const express=require('express')
const router=express.Router()
const control=require('../controller/controller')
router.get('/get',control.getAllUsers)
router.get('/',(req,res)=>{
    res.send("welcome")
})
router.get('/:id',control.getbyid)
router.post('/:data',control.post)
router.put('/:data1',control.put)
router.delete('/:id',control.delete)

module.exports=router 