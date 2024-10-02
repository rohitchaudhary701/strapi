module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // The port is automatically set by Render or your hosting provider
  app: {
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
});
