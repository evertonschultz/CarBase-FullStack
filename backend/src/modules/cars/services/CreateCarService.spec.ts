import FakeCarsRepository from '../repositories/fakes/FakeCarsRepository';
import CreateCarService from './CreateCarService';

let fakeCarsRepository: FakeCarsRepository;
let createCar: CreateCarService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeCarsRepository = new FakeCarsRepository();
    createCar= new CreateCarService(
      fakeCarsRepository,
    );
  });
  it('should be able to create a new car', async () => {
    const car = await createCar.execute({
      name: '147',
      brand: 'FIAT',
      year: 1978,
      sold: false,
      description: 'Carro lindo de bonito!'
    });

    await expect(car).toHaveProperty('id');
  });
});
