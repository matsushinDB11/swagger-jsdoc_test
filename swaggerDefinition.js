module.exports = {
  info: {
    // API informations (required)
    openapi: '3.0.0',
    title: 'swagger-jsdoc test', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'testing for swagger-jsdoc', // Description (optional)
  },
  // host: `localhost:${PORT}`, // Host (optional)
  // basePath: '/', // Base path (optional)
  apis: ['./src/index.js']
};