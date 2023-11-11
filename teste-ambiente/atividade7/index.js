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
        cpf : req.body.cpf,
        dataNascimento : req.body.dataNascimento,
        endereco : req.body.endereco,
        uf : req.body.uf,
        cep : req.body.cep,
        email : req.body.email,
        telefone : req.body.telefone,
        especialidade : req.body.especialidade,
        dataConsulta : req.body.dataConsulta,
        horaConsulta : req.body.horaConsulta,
        medicamentosAlergicos : req.body.medicamentosAlergicos,
        informacoesAdicionais : req.body.informacoesAdicionais
    };
   res.render('dados.html', { agendamento });
});