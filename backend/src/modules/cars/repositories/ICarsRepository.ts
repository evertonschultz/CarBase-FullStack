import ICreateCarDTO from '../dtos/ICreateCarDTO';
import Car from '../infra/typeorm/schemas/Car';

export default interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findAll(): Promise<Car[]>;
  findById(id: string): Promise<Car | undefined>;
  save(car: Car): Promise<Car>;
}
