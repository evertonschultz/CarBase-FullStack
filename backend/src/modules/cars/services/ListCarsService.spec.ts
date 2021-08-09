import FakeCarsRepository from '@modules/cars/repositories/fakes/FakeCarsRepository';
import ListCarsService from './ListCarsService';

let fakeCarsRepository: FakeCarsRepository;
let listCars: ListCarsService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeCarsRepository = new FakeCarsRepository();
    listCars = new ListCarsService(
      fakeCarsRepository
    );
  });

  it('should be able to list the cars', async () => {
    const car1 = await fakeCarsRepository.create({
      name: '147',
      brand: 'FIAT',
      year: 1978,
      sold: false,
      description: 'Carro lindo de bonito!'
    });

    const car2 = await fakeCarsRepository.create({
      name: 'Mareia Turbo',
      brand: 'FIAT',
      year: 2003,
      sold: true,
      description: 'Carro que é uma explosão de lindeza!'
    });

    const cars = await listCars.execute();

    await expect(cars).toEqual([car1, car2]);
  });
});
