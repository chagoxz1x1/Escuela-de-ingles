const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

app.use(cors());

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Santyago9321',
  database: 'Escuela_de_ingles',
});

// Conecta a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Configura middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Ruta API para crear un nuevo usuario
app.post('/api/usuarios/usuarios', (req, res) => {
  const { nombre, email, contrasena } = req.body;

  // Verificar si el correo electrónico ya está registrado
  const emailExistsQuery = 'SELECT COUNT(*) AS count FROM usuarios WHERE email = ?';

  db.query(emailExistsQuery, [email], (emailErr, emailResult) => {
    if (emailErr) {
      console.error('Error al verificar la existencia del correo electrónico: ', emailErr);
      res.status(500).json({ error: 'Error al verificar la existencia del correo electrónico' });
    } else {
      const emailCount = emailResult[0].count;

      if (emailCount > 0) {
        // El correo electrónico ya está registrado, enviar una respuesta de error
        res.status(400).json({ error: 'El correo electrónico ya está registrado' });
      } else {
        // El correo electrónico no está registrado, proceder con la inserción
        const sql = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)';

        db.query(sql, [nombre, email, contrasena], (insertErr, insertResult) => {
          if (insertErr) {
            console.error('Error al crear un nuevo usuario: ', insertErr);
            res.status(500).json({ error: 'Error al crear un nuevo usuario' });
          } else {
            // Genera un token JWT para enviar en el correo de verificación
            const secreto = 'Santyago_2002'; // Cambia por tu secreto
            const token = jwt.sign({ email }, secreto, { expiresIn: '1h' });

            // Envía el correo de verificación
            enviarCorreoVerificacion(email, token);

            res.status(201).json({ mensaje: 'Usuario creado exitosamente' });
          }
        });
      }
    }
  });
});

// Ruta API para iniciar sesión
app.post('/api/iniciar-sesion', (req, res) => {
  const { email, contrasena } = req.body;

  // Verifica las credenciales del usuario en la base de datos
  const sql = 'SELECT * FROM usuarios WHERE email = ? AND contrasena = ?';

  db.query(sql, [email, contrasena], (err, result) => {
    if (err) {
      console.error('Error al verificar las credenciales: ', err);
      res.status(500).json({ error: 'Error al verificar las credenciales' });
    } else {
      if (result.length > 0) {
        // Credenciales válidas, genera un token JWT
        const secreto = 'Santyago_2002'; // Cambia por tu secreto
        const token = jwt.sign({ email }, secreto, { expiresIn: '1h' });

        // Envía el token como respuesta
        res.status(200).json({ token, verificado: result[0].cuenta_verificada === 0 });
      } else {
        // Credenciales inválidas, responde con un error adecuado
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    }
  });
});


// Función para enviar el correo de verificación
function enviarCorreoVerificacion(destinatario, token) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'chagoxz1x1@gmail.com',
      pass: 'bnbg xzjb jbzy ohfa',
    },
  });

  const mailOptions = {
    from: 'chagoxz1x1@gmail.com',
    to: destinatario,
    subject: 'Verificación de registro',
    text: `Su cuenta se ha creado correctamente. Haga clic en el enlace de verificación para activar su cuenta: http://localhost:4200/Registro/verificar?token=${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo de verificación: ', error);
    } else {
      console.log('Correo de verificación enviado: ', info.response);
    }
  });
}

// Resto de las rutas y lógica relacionada con la autenticación y verificación de token...

app.post('/api/verificar-usuario', (req, res) => {
  const { email } = req.body;

  // Consultar la base de datos para verificar si el usuario ya existe
  const sql = 'SELECT COUNT(*) AS count FROM usuarios WHERE email = ?';

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error('Error al verificar la existencia del usuario: ', err);
      res.status(500).json({ error: 'Error al verificar la existencia del usuario' });
    } else {
      const count = result[0].count;

      if (count > 0) {
        // El usuario ya existe, enviar una respuesta JSON que indique que el usuario existe
        res.status(200).json({ existe: true });
      } else {
        // El usuario no existe, enviar una respuesta JSON que indique que el usuario no existe
        res.status(200).json({ existe: false });
      }
    }
  });
});

// Deja solo esta línea para iniciar el servidor en el puerto especificado en la variable 'port':
app.listen(port, () => {
  console.log(`Servidor Node.js en funcionamiento en el puerto ${port}`);
});
