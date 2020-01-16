const knex = require('knex');

const envir = process.env.DB_ENV || 'development'
const config = require('../knexfile.js')[envir];

module.exports = knex(config);
