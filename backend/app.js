//app.js
const {MongoClient, ObjectId} = require("mongodb");
async function connect(){
  if(global.db) return global.db;
    const conn = await MongoClient.connect("mongodb+srv://viniciusfonseca132:29Ttp8flWjalESb5@cluster0.pb98djz.mongodb.net/");
  if(!conn) return new Error("Can't connect");
    global.db = await conn.db("Caca-palavras");
  return global.db;
}

const express = require('express');
const app = express();
const port = 3030; //porta padrão

app.use(require('cors')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definindo as rotas
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// GET dog
router.get('/dog', async function(req, res, next) {
  try{
    const apidog = await fetch('https://dog.ceo/api/breed/hound/list');
    res.json(await apidog.json());
  }
  catch(ex){
    console.log(ex);
    res.status(400).json({erro: `${ex}`});
  }
})

/* GET palavra */
router.get('/palavra/:categoria?', async function(req, res, next) {
  try{
    const db = await connect();
    if (req.params.categoria) {
      // Se um parâmetro de categoria foi fornecido na URL, filtre por essa categoria
      res.json(await db.collection("palavra").find({ Categoria: req.params.categoria }).toArray());
  } else {
      // Caso contrário, retorne todos os documentos
      res.json(await db.collection("palavra").find().toArray());
  }
}catch(ex){
    console.log(ex);
    res.status(400).json({erro: `${ex}`});
  }
})

// POST /palavra
router.post('/palavra', async function(req, res, next){
    try{
      const palavra = req.body;
      const db = await connect();
      res.json(await db.collection("palavra").insertOne(palavra));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

// PUT /palavra/{id}
router.put('/palavra/:id', async function(req, res, next){
    try{
      const palavra = req.body;
      const db = await connect();
      res.json(await db.collection("palavra").updateOne({_id: new ObjectId(req.params.id)}, {$set: palavra}));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

// DELETE /palavra/{id}
router.delete('/palavra/:id', async function(req, res, next){
    try{
      const db = await connect();
      res.json(await db.collection("palavra").deleteOne({_id: new ObjectId(req.params.id)}));
    }
    catch(ex){
      console.log(ex);
      res.status(400).json({erro: `${ex}`});
    }
})

app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
