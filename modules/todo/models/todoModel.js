const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {type: String, required: true},
  message: {type: String, required: true},
  
},
{
    toJSON:{
        transform: (_, ret) => {
            ret.id = ret._id;
            
            delete ret._id;
            delete ret._v;
          }
    }
}

);
const Todo = mongoose.model('Todo', schema);

module.exports  = Todo;