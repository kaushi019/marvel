const express = require('express')
const md5 = require('md5')
const router = express.Router()


router.get('/hash',(req,res)=>{
    let ts = Date.now()
    let hash = ts + process.env.privateKey + process.env.publicKey
    res.send({
        result:"ok",
        body:{
            hash:md5(hash),
            ts: ts,
            api: process.env.publicKey
        }
    })
})






module.exports = router