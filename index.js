const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000;

app.set('view engine','handlebars');
app.engine('handlebars',handlebars.engine({
    layoutDir: `${__dirname}/views/layouts`
}));

names =()=>(
        {
        firstname:"Likhitha",
        lastname :"Tunuguntla",
    
});

hobbies =()=>{
    return[
        "dancing",
        "singing",
        "chess",
        "sudoko"
    ]
}

app.get('/',(req,res)=>{
    res.render('home',{
        layout:'main',
        names:names(),
        name: "Rakesh",
        hobbies:hobbies(),
        isNameExists: true,
        Enabled: false
    });
})

app.listen(port,()=>{
    console.log("App listening")
})