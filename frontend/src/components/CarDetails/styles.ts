import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  p {
    color: var(--secundary);
  }
`;

export const Main = styled.div`
  padding: 0.5rem;
  padding-bottom: 3rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  justify-content: space-between;

  border-bottom: 1px solid var(--secundary);

  div {
    width: 100%;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    border: 0;

    div {
      flex-direction: column;
    }
    p {
      color: var(--title);
      align-items: center;

      & + p {
        color: var(--text);
      }
    }
  }
`;

export const CarName = styled.p`
  color: var(--title);
  font-size: 1.2rem;
`;
