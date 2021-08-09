import { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { BsTagFill } from 'react-icons/bs';
import { RiPencilFill } from 'react-icons/ri';

import { CarsList } from "../CarsList";
import { CarDetails } from "../CarDetails";
import { NewCarModal } from '../NewCarModal';

import {
  Home,
  Header,
  Content,
  Container,
  ContainerAddCar,
  ContainerBody,
  ContainerBodyCarsList,
  ContainerCar,
  Title,
  Spacing,
  DetailsBox,
  Footer,
} from "./styles";
import { api } from '../../services/api';
import { IoWaterOutline } from 'react-icons/io5';

interface CarProps {
  id: string,
  name: string,
  brand: string,
  year: number,
  sold: boolean,
  description: string,
  created_at: Date,
}

export function Dashboard() {
  const [isNewCarModalOpen, setIsNewCarModalOpen] = useState(false);
  const [openModalToNewCar, setOpenModalToNewCar] = useState(false);

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const [carsList, setCarsLIst] = useState<CarProps[]>([]);
  const [carSelected, setCarSelected] = useState<CarProps>({} as CarProps);
  const [carsSearch, setCarsSearch] = useState<CarProps[]>([]);

  function handleOpenCarModal(newCar: boolean) {
    if(newCar){
      setOpenModalToNewCar(true);
    } else {
      setOpenModalToNewCar(false);
    }
    
    setIsNewCarModalOpen(true);
  }

  function handleCloseNewCarModal() {
    setIsNewCarModalOpen(false);
  }

  function carDetailsSelected(car: CarProps) {
    return setCarSelected(car);
  }

  function handleFilterCar(search: string) {
    const filterItem = (query: string) => {
      return carsList.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    const filterSearch = filterItem(search);

    if(filterSearch) {
      setCarsSearch(filterSearch);
    } else {
      setCarsSearch([]);
    }

    search.length === 0 && setCarsSearch(carsList);
  }

  function newCarAdded(){
    setReload(value => !value);
    setCarSelected({} as CarProps);
  }

  useEffect(() => {
    async function handleCars() {
      const response = await api.get('/cars');
  
      setCarsLIst(response.data);
      setCarsSearch(response.data);
    }
    handleCars();

    setLoading(false)
  },[reload]);

  return (
    <Home>
      <Header>
        <Content>
        <div>
            <IoWaterOutline color="#fff" size={40} />
            <p>FULLSTACK</p>
          </div>
          <input placeholder="BUSCA por um veículo" onChange={event => handleFilterCar(event.target.value)} />
        </Content>
          
        </Header>
      
      <Container>
        <ContainerAddCar>
          <p>Veículo</p>
          <button type="button" onClick={() => handleOpenCarModal(true)}>
            <MdAddCircle color="#252525" size={36} />
          </button>
        </ContainerAddCar>
        <ContainerBody>
        { !loading &&
          <ContainerBodyCarsList>
            <Title>Lista de veículos</Title>
            {carsSearch.map(car => (
              <ContainerCar key={car.id} onClick={() => carDetailsSelected(car)} >
                <CarsList carDetails={car} isActived={car.id === carSelected.id} />
              </ContainerCar>
            
            ))}
          </ContainerBodyCarsList>
          }
          
          <Spacing />

          {carSelected.id &&
            <ContainerBodyCarsList>
              <Title>Detalhes</Title>
              <DetailsBox>
                <CarDetails carDetails={carSelected} />
                <Footer>
                  <button type="button" onClick={() => handleOpenCarModal(false)}>
                  <RiPencilFill size={26} color='#fff' />
                  <p>EDITAR</p>
                  </button>
                  <BsTagFill size={26} color={carSelected.sold ? '#090' : '#252525'}/>
                </Footer>
              </DetailsBox>
            </ContainerBodyCarsList>
          }

        </ContainerBody>

        <NewCarModal
          isOpen={isNewCarModalOpen}
          onRequestClose={handleCloseNewCarModal}
          reloadData={newCarAdded}
          data={openModalToNewCar ? undefined : carSelected}
        />
      </Container>
    </Home>
  )
}