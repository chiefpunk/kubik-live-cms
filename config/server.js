module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '47d8147fdf11dcdf6833243b14e4d818'),
    },
    url: `${env('PUBLIC_URL', '')}/admin`,
  },
});
 