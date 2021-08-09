import styled from 'styled-components'

export const Container = styled.header`
  background: var(--secundary);

  max-width: 1120px;
  margin: 0 auto;

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
    height: 4rem;
    padding-left: 1%;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

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
    height: 4rem;
    padding-left: 1%;
  }
`;