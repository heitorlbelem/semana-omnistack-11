/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o símbolo "?" (servem para Filtros, paginação...) => acessível através do request.query
 * Route Params: parâmetros utilizados para identificar recursos => acessível através do request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos => acessível através de request.body
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() ... => KNEX
  */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors()); // Por enquanto, permite que todas as aplicações front-end acessem a API

app.use(express.json()); // Necessário para o app que será utilizado o JSON para o corpo das requisições
app.use(routes);
app.use(errors());

module.exports = app;






