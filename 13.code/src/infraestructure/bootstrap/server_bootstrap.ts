import http from 'http';
import express from 'express';
import envs from '../config/environment-vars';

export default class ServerBootstrap {
  //Atributos, propiedades o caracteristicas
  private app: express.Application;
  constructor(app: express.Application) {
    this.app = app;
  }


  init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      const PORT = envs.PORT;

      server.listen(PORT)
        .on('listening', () => {
          console.log(`El servidor empezo en el puerto ${PORT} link: http://localhost:${PORT}`);
          console.log(`📚 Swagger docs disponible en: http://localhost:${PORT}/api/docs`);
          resolve(true);
        })
        .on('error', (err) => {
          console.error(`Error iniciando el server ${err}`);
          reject(false);
        });
    });
  }
}