const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio']
  },
  descripcion: {
    type: String,
    default: 'Sin descripción'
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'El stock no puede ser negativo']
  },
  imagenUrl: {
    type: String,
    default: '/media/placeholder.png'
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;