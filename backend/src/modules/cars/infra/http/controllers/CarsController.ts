import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCarService from '@modules/cars/services/CreateCarService';
import ListCarsService from '@modules/cars/services/ListCarsService';
import UpdateCarService from '@modules/cars/services/UpdateCarService';

export default class CarController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, year, sold, description } = request.body;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      name,
      brand,
      year,
      sold,
      description
    });

    return response.json(car);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCars = container.resolve(ListCarsService);

    const cars = await listCars.execute();

    return response.json(cars);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { car_id } = request.params;
    const { name, brand, year, sold, description } = request.body;

    const updateCar = container.resolve(UpdateCarService);

    const car = await updateCar.execute({car_id, name, brand, year, sold, description});

    return response.json(car)
  }
}
