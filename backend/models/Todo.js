// backend/models/Todo.js

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
 
  productName: String,
  
});


module.exports = mongoose.model('Todo', TodoSchema);
