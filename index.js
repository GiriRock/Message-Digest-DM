const express = require('express');
const dotenv = require('dotenv')
var HashMap = require('hashmap');
dotenv.config()
const app = express()
var md5 = require('md5-slim');
var map = new HashMap();

const sourceSysChannel = 'ONL'
const secretCode = '123456789012'


app.post('/msgdigest', (req,res)=>{
    const msgId = req.query['msgId']
    const SECURE_SECRET =  'O4UGgzQ5GkMefyb01oQ1299565704666'
    const msgConcat = msgId.concat(sourceSysChannel.concat(secretCode));
    res.json({
        "MsgId" : msgId,
        "MsgDigest": md5(msgConcat.concat(SECURE_SECRET)).toUpperCase()
    })
})

app.get('/', (req,res) => {
    res.send({"message":"alive"})
    })
    
app.listen(process.env.PORT,()=>{console.log("server up and running in "+ process.env.PORT)})