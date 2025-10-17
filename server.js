require('dotenv').config();

const SERVER_CONFIG = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000/api/mascotas',
  port: process.env.PORT || 3000,
};

module.exports = SERVER_CONFIG;
