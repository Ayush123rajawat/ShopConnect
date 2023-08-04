const express = require('express');

const app = express();
const port = 7000 || process.env.PORT;

app.get('*',(req,res)=>{
   res.status(404).render('404');
});

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});
