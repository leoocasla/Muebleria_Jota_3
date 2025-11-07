const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productos');

const app = express();
const PORT = process.env.PORT || 4000;
const mongoUri = process.env.MONGODB_URI;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
});

app.use('/api/productos', productRoutes);

app.use('/media', express.static('media'));

app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocurrió un error en el servidor', error: err.message });
});

console.log("Intentando conectar a MongoDB Atlas...");
mongoose.connect(mongoUri)
  .then(() => {
    console.log("Conectado exitosamente a MongoDB Atlas");
    
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  });