import { injectable, inject } from 'tsyringe';

import Car from '../infra/typeorm/schemas/Car';
import ICarsRepository from '../repositories/ICarsRepository';

@injectable()
class ListProvidersService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(): Promise<Car[]> {
    let cars = await this.carsRepository.findAll();

    return cars;
  }
}

export default ListProvidersService;
