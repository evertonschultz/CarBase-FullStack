import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CarsController from '../controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      brand: Joi.string().required(),
      year: Joi.number().required(),
      sold: Joi.boolean().required(),
      description: Joi.string().required(),
    },
  }),
  carsController.create
);

carsRouter.get('/', carsController.index);

carsRouter.put('/:car_id',
  celebrate({
    [Segments.PARAMS]: {
      car_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      brand: Joi.string().required(),
      year: Joi.number().required(),
      sold: Joi.boolean().required(),
      description: Joi.string().required(),
    },
  }), carsController.update
);

export default carsRouter;
