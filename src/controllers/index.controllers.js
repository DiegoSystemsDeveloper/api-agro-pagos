const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgresql',
    password: 'postgresql',
    database: 'agro-pagos',
    port: '5432'
})

const objProducto = require('./models/productos.controller');
const producto = new objProducto(pool);

module.exports = {
    producto
}