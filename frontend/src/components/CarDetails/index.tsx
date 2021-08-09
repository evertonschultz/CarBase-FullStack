import { Container, Main, CarName } from "./styles";

interface CarProps {
  id: string,
  name: string,
  brand: string,
  year: number,
  sold: boolean,
  description: string,
  created_at: Date,
}

interface CarDetailsProps {
  carDetails: CarProps,
}

export function CarDetails({carDetails}: CarDetailsProps) {

  return (
    <Container>
        <Main>
          <CarName>{carDetails.name}</CarName>
          <div>
            <div>
              <p>Marca</p>
              <p>{carDetails.brand}</p>
            </div>
            <div>
              <p>Ano</p>
              <p>{carDetails.year}</p>
            </div>
          </div>
          <p>{carDetails.description}</p>
        </Main>
    </Container>
  )
}