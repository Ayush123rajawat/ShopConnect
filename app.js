require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
const app = express();
const port = 7000 || process.env.PORT;

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/customer'));

app.get('*',(req,res)=>{
   res.status(404).render('404');
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
