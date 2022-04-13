import { Response } from 'express';
import { controller, Controller, httpGet, response } from 'inversify-express-utils';

@controller('/api/v1/products')
export class ProductsController implements Controller {
  @httpGet('/')
  getAllProducts(@response() res: Response) {
    return res.status(200).json({
      success: true,
    });
  }
}
