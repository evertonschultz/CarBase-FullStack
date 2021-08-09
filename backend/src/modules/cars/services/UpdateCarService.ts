import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/schemas/Car';
import ICarsRepository from '../repositories/ICarsRepository';

interface IRequest {
  car_id: string;
  name: string;
  brand: string;
  year: number;
  sold: boolean;
  description: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({
    car_id,
    name,
    brand,
    year,
    sold,
    description
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car not found');
    }

    car.name = name;
    car.brand = brand;
    car.year = year;
    car.sold = sold;
    car.description = description;

    return this.carsRepository.save(car);
  }
}

export default UpdateProfileService;
