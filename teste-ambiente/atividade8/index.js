const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

const PORT = 3030;
app.listen(PORT,function(){
    console.log(`Aplicação rodando na porta ${PORT}`);
});

app.engine('html',mustacheExpress());
app.set('view engine','html');
app.set('views',__dirname+'/src/views');

app.use(express.urlencoded({extended:true}));

app.use('/', require('./src/routes/calculadoraRoutes'));