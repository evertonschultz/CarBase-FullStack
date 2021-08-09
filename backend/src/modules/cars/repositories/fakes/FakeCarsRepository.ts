import { uuid } from 'uuidv4';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';

import Car from '../../infra/typeorm/schemas/Car';

class CarsRepository implements ICarsRepository {
  private cars: Car[] = [];

  public async create({
    name,
    brand,
    year,
    sold,
    description
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, { id: uuid(), name, brand, year, sold, description });

    this.cars.push(car);

    return car;
  }

  public async findAll(): Promise<Car[]> {
    const cars = this.cars;

    return cars;
  };

  public async findById(id: string): Promise<Car | undefined> {
    const findCar = await this.cars.find(car => String(car.id) === id);

    return findCar;
  }

  public async save({id, name, brand, year, sold, description}: Car): Promise<Car> {

    const car = new Car;

    Object.assign(car, { id, name, brand, year, sold, description});

    this.cars.push(car);

    return car;
  }
}

export default CarsRepository;
