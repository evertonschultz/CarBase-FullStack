import { injectable, inject } from 'tsyringe';

import Car from '../infra/typeorm/schemas/Car';
import ICarsRepository from '../repositories/ICarsRepository';

interface IRequest {
  name: string;
  brand: string;
  year: number;
  sold: boolean;
  description: string;
}

@injectable()
class CreateCarServices {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({
    name,
    brand,
    year,
    sold,
    description,
  }: IRequest): Promise<Car> {

    const car = await this.carsRepository.create({
      name,
      brand,
      year,
      sold,
      description,
    });

    return car;
  }
}

export default CreateCarServices;
