import { Options } from 'swagger-jsdoc';
import envs from './environment-vars';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API con arquitectura hexagonal'
    },
    servers: [
      {
        url: `http://localhost:${envs.PORT}/api`,
        description: 'Servidor de desarrollo'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: [
    './src/infrastructure/routes/*.ts',
    './src/infrastructure/controller/*.ts',
    './src/domain/*.ts',
    './src/application/*.ts'
  ]
};

export default swaggerOptions;