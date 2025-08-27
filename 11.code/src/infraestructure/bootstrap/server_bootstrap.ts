import http from 'http';
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import envs from '../config/environment-vars';
import swaggerOptions from '../config/swagger.config';

export default class ServerBootstrap {
  //Atributos, propiedades o caracteristicas
  private app: express.Application;
  constructor(app: express.Application) {
    this.app = app;
  }


  // Método para configurar Swagger
  private setupSwagger(): void {
    if (envs.ENVIRONMENT === 'development') {
      try {
        const specs = swaggerJsdoc(swaggerOptions);

        this.app.use(
          '/api/docs',
          swaggerUi.serve,
          swaggerUi.setup(specs, {
            explorer: true,
            customCss: '.swagger-ui .topbar { display: none }',
            customSiteTitle: 'API Documentation - Hexagonal Architecture'
          })
        );

        console.log('📚 Swagger configurado correctamente');
      } catch (error) {
        console.error('❌ Error configurando Swagger:', error);
      }
    }
  }

  init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      const PORT = envs.PORT;

      server.listen(PORT)
        .on('listening', () => {
          console.log(`El servidor empezo en el puerto ${PORT} link: http://localhost:${PORT}`);
          resolve(true);
        })
        .on('error', (err) => {
          console.error(`Error iniciando el server ${err}`);
          reject(false);
        });
    });
  }
}