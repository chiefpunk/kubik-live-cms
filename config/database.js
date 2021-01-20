module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('STRAPI_DATABASE_HOST', '127.0.0.1'),
        port: env.int('STRAPI_DATABASE_PORT', 5432),
        database: env('STRAPI_DATABASE_NAME', 'kubik'),
        username: env('STRAPI_DATABASE_USERNAME', 'admin'),
        password: env('STRAPI_DATABASE_PASSWORD', 'postgres'),
        ssl: {
          rejectUnauthorized: false // For self-signed certificates
        },
      },
      options: {
        ssl: env('STRAPI_DATABASE_SSL', false),
      }
    },
  },
});
