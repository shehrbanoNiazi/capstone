const express = require('express');
const app = express();
const port = process.env.PORT || '5502' ;

app.get('/', (req,res) => {
    res.send('Hello There');
}
 )

 app.post('/',(req,res) => {
    let data = req.body;
    res.send('Data recived:' +JSON.stringify(data));
 })
 
 app.listen(port, () =>{
    console.log('listening on port', port);
 })