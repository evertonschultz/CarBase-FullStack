import { BsTagFill } from 'react-icons/bs';
import { Car, Icon } from "./styles";

interface CarProps {
  id: string,
  name: string,
  brand: string,
  year: number,
  sold: boolean,
  description: string,
  created_at: Date,
}

interface CarProps {
  isActived?: boolean;
  isSold?: boolean;
}

interface CarsListProps {
  carDetails: CarProps,
  isActived?: boolean,
}

export function CarsList({ carDetails, isActived }: CarsListProps) {
  return (
    <>
      <Car isActived={isActived}>
          <div>
            <p>{carDetails.brand}</p>
            <p>{carDetails.name}</p>
            <p>{carDetails.year}</p>
          </div>
          <Icon>
            <BsTagFill size={26} color={carDetails.sold ? '#090' : '#252525'} />
          </Icon>
        </Car>
    </>
  )
}