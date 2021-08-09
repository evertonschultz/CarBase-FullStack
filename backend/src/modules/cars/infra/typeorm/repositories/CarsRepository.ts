import { getMongoRepository, MongoRepository } from 'typeorm';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

import Car from '../schemas/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: MongoRepository<Car>;

  constructor() {
    this.ormRepository = getMongoRepository(Car, 'mongo');
  }

  public async create({
    name,
    brand,
    year,
    sold,
    description,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.ormRepository.create({
      name,
      brand,
      year,
      sold,
      description,
    });

    await this.ormRepository.save(car);

    return car;
  }

  public async findAll(){
    const cars = await this.ormRepository.find();

    return cars
  }

  public async findById(id: string): Promise<Car | undefined> {
    const car = await this.ormRepository.findOne(id);

    return car;
  }

  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }
}

export default CarsRepository;
