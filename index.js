const express = require('express');
const app = express();
const { clasificacao } = require('./app/models');
clasificacao.create({id_campeonato : 123, id_time: 456, pontos : 40});

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Manipulando as classificações
app.get('/classificacao', async(req, res) => {
    const classificacao = await classificacao.find()
    return res.json(classificacao)
}); //Listar todos

app.post('/classificacao/register', async (req, res) => {
    const clasificacao = await classificacao.create(req.params);
    return res.json(clasificacao)
}); // Criar

app.get('/classificacao/:id', async(req, res) => {
    const clasificacao = await clasificacao.findById(req.params.id)
    return res.json(clasificacao)
}); //Buscar

app.put('/classificacao/:id', async(req, res) => {
    const classificacao = await classificacao.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.json(classificacao)   
}); //Editar

app.delete('/classificacao/:id', async(req, res) => {
  await clasificacao.findByIdAndDelete(req.params.id)
  return res.json({message: "Tabela de classificação deletada com sucesso"})
}); //Deletar

//Ouvindo a porta 3000
app.listen(3000);