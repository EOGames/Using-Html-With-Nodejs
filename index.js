const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

const ResponseFillter = (req,resp,next)=>
{
    if (!req.query.age)
    {
        resp.send('Please Enter Age');
    }
    else
    if (req.query.age < 18)
    {
        resp.send('Sorry You Are 18 below')
    }
    else
    {
        next();
    }
}

//middleware to modify response data like checking user age or he is logged in or not

app.use(ResponseFillter);

//it will send files with .html extension 
//app.use(express.static(publicPath)); 

//to remove .html from showing in webpages.

//conecting home page with server
app.get('',(req,res)=>
{
    res.sendFile(publicPath+'/index.html');
});

app.get('/about',(req,res)=>
{
    res.sendFile(publicPath+'/about.html');
});

app.get('/help',(req,res)=>
{
    res.sendFile(publicPath+'/help.html');
});

app.get('*',(req,res)=>
{
    res.sendFile(publicPath+'/404.html');
});

app.listen(5500,()=>
{
    console.log("Server Online At 5500 port");
});