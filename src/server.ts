import * as bodyParser from 'body-parser';
import { NextFunction, Request, Response } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import SuperError from './exceptions/superError';
import container from './container/container';

import './controllers/products-controller';

const server = new InversifyExpressServer(container);
server.setConfig(app => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(bodyParser.json());
});

server.setErrorConfig(app => {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof SuperError) {
      return res.status(500).send(`super vacilão ${error}`);
    }
    return res.status(500).send(`vacilão ${error}`);
  });
});

const app = server.build();

app.use((_: Request, res: Response) => res.status(404).send('not found'));

app.listen(process.env.PORT, () => {
  console.log(`listen to ${process.env.PORT}`);
});
