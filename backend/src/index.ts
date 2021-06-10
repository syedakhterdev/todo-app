import express from 'express';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

import { addTodo, getTodo, deleteTodo, deleteTodoAll, updateTodo } from './utils/Todo';


const app = express();
const port = process.env.PORT || '8000';

app.use(bodyParser.json({ limit: '500mb' }));
app.use(cors());

app.get('/getTodo', getTodo);
app.post('/addTodo', addTodo);
app.delete('/deleteTodo', deleteTodo);
app.post('/deleteTodoAll', deleteTodoAll);
app.put('/updateTodo', updateTodo);


mongoose.connect('mongodb+srv://tododb:tododb123@cluster0.txmxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, 'useCreateIndex': true, useUnifiedTopology: true });
let db = mongoose.connection;
db.once('open', function () {
  console.log('Connected DB');
});

db.on('err', function (err: any) {
  console.log(err);
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});