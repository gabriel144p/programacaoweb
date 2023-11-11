const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const PORT = 3030;
app.listen(PORT, function() {
    console.log(`Aplicação rodando na porta ${PORT}`);
});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: false }));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/dados', function(req, res) {
    let agendamento = {
        nome : req.body.nome,
        endereco : req.body.endereco,
        telefone : req.body.telefone,
        data : req.body.data
    };
   res.render('dados.html', { agendamento });
});