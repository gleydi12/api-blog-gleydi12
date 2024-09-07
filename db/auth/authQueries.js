import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../../config.js';

import dotenv from 'dotenv';

dotenv.config();

const queryLogin = (data) => {
    const { email, password } = data;
    
    console.log(data)

    return new Promise((resolve, reject) => {
       const sql = 'SELECT id,name,email,password FROM users WHERE email = ? LIMIT 1';

       config.query(sql, [email], async (err, filas) => {
           console.log(filas)
           if (err) {
               console.log(err);
               reject(err);
           } else if (filas.length > 0) {
               const usuario = filas[0];
               // Compare the password
               const passwordCompareResult = bcrypt.compare(password, usuario.password);
               if (!passwordCompareResult) {
                   reject('Email o contraseña incorrectos');
               }
               const token = await jwt.sign({
                   id: usuario.id,
                   email: usuario.email,
                   name: usuario.name,
                   tipo: usuario.tipo // Tipo de usuario
               }, process.env.SECRET_TOKEN);
               resolve(token);
           } else {
               reject('Usuario no encontrado');
           }
       });
    });
}

export {
    queryLogin
}
