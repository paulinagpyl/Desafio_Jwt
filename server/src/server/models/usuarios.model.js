import db from '../database/db_connect.js'
import bcrypt from 'bcryptjs'

export const register = ({ email, password, rol, lenguage }) => db('INSERT INTO usuarios (id, email, password, rol, lenguage) VALUES (DEFAULT,$1,$2,$3,$4);',[email, bcrypt.hashSync(password),rol,lenguage])

export const login = async ({ email }) =>  await db('SELECT password FROM usuarios WHERE email = $1;', [email])

export const findUser = (email) =>  db.query('SELECT email, rol, lenguage FROM usuarios WHERE email = $1;', [email])