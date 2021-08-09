import styled from "styled-components";

export const Home = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background: var(--secundary);
  height: 7%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      color: #fff;
      font-size: 2rem;
    }
  }

  input {
    font-size: 1rem;
    width: 99%;
    height: 100%;
    color: var(--secundary);
    background: var(--secundary-dark);
    padding-left: 1%;
  }
`;

export const Container = styled.main`
  background: var(--primary);
  height: 93%;
`;

export const ContainerAddCar = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid var(--secundary);

  p{
    font-size: 2rem;
  }

  button {
    border: 0;
    background: transparent;
  }
`;

export const ContainerBody = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  
  display: flex;
  flex-direction: row;
`;

export const ContainerBodyCarsList = styled.div`
  width: 100%;
`;

export const ContainerCar = styled.button`
  width: 100%;
  border: 0;

  & + button {
      margin-top: 10px;
    }
`;

export const Title = styled.p`
  color: var(--title);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const Spacing = styled.div`
  width: 3rem;
`;

export const DetailsBox = styled.div`
  background: var(--primary-light);
`;


export const Footer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  button {
    width: 10rem;
    height: 3.5rem;
    padding-left: 1rem;
    background: var(--secundary);
    color: #fff;
    display: flex;
    align-items: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    p {
      font-size: 1.2rem;
      margin-left: 1rem;
      color: #fff;
    }
  }
  `;