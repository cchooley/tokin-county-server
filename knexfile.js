module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///weed'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};