import jwt from 'jsonwebtoken'

const KEY = process.env.JWT_SECRET_KEY

export const jwtSign = (payload) => jwt.sign(payload,KEY) // crea un token al autenticar

export const jwtVerify = (token) => jwt.verify(token,KEY) // compara token recibido con original