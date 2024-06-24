import db from '../database/db_connect.js'
import bcrypt from 'bcryptjs'

export const register = ({ email, password, rol, lenguage }) => db('INSERT INTO usuarios (id, email, password, rol, lenguage) VALUES (DEFAULT,$1,$2,$3,$4);',[email, bcrypt.hashSync(password),rol,lenguage])

export const login = ({ email, password }) => db('SELECT email FROM usuarios WHERE email = $1 and password = $2;', [email, password])

export const findUser = (id) =>  db('SELECT email, rol, lenguage FROM usuarios WHERE id = $1;', [id])