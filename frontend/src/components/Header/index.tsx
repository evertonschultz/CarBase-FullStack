import { IoWaterOutline } from 'react-icons/io5';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
        <div>
          <IoWaterOutline color="#fff" size={40} />
          <p>FULLSTACK</p>
        </div>
        <input placeholder="BUSCA por um veículo" />
    </Container>
  )
}