import FakeCarsRepository from '@modules/cars/repositories/fakes/FakeCarsRepository';
import UpdateCarService from './UpdateCarService';

let fakeCarsRepository: FakeCarsRepository;
let updateCar: UpdateCarService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeCarsRepository = new FakeCarsRepository();
    updateCar = new UpdateCarService(
      fakeCarsRepository
    );
  });

  it('should be able to update the car', async () => {
    const car = await fakeCarsRepository.create({
      name: '147',
      brand: 'FIAT',
      year: 1978,
      sold: false,
      description: 'Carro lindo de bonito!'
    });

    const updatedCar = await updateCar.execute({
      car_id: String(car.id),
      name: 'Mareia Turbo',
      brand: 'FIAT',
      year: 2003,
      sold: true,
      description: 'Carro que é uma explosão de lindeza!'
    });

    await expect(updatedCar.name).toBe('Mareia Turbo');
    await expect(updatedCar.brand).toBe('FIAT');
    await expect(updatedCar.year).toBe(2003);
    await expect(updatedCar.sold).toBe(true);
    await expect(updatedCar.description).toBe('Carro que é uma explosão de lindeza!');

  });
});
