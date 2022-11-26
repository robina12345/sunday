const express=require('express');
const app=express();

    app.get('',(req,res)=>{
        res.send(`<h1>Hello,this is Home page</h1>
        <a href="/about">go to about page</a>`);
    });


app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="username" value="${req.query.name}"/>
         <button>click me</button> 
         <a href="/">go to Home page</a>    
    `);
})


app.get('/login',(req,res)=>{
    res.send([{
        name:"Om",
        email:"Om@gmail.com"
    },
    {
        name:"Som",
        email:"Som@gmail.com"
    }
]);
})

app.listen(8080);