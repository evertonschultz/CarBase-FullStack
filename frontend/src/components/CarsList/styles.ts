import styled from "styled-components";

interface CarProps {
  isActived?: boolean;
  isSold?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: var(--title);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Car = styled.div<CarProps>`
    background: ${({isActived}) => isActived ? '#efefef' : '#fff'};
    padding: 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;

      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--title);
        font-weight: bold;
        font-size: 1rem;

        & + p {
          color: var(--text);
          margin-top: 0.3rem;
          font-weight: normal;
        }
      }
    }
`;

export const Icon = styled.div`
  align-self: center;
  margin-right: 1rem;
`;