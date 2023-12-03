const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2'); // Importa el paquete mysql2

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Santyago_9321',
    database: 'ingenitec'
});

db.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL: ' + err.message);
    } else {
      console.log('Conexión exitosa a MySQL');
    }
});

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));


//RUTAS
app.use('/api/operaciones', require('./routes/operaciones.routes'))

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port " + app.get('port'));
});
