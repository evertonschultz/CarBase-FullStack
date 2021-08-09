import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  textarea {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #d0d0d0;
    font-family: sans-serif;
    font-weight: 400;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  div {
    height: 8rem;

    label {
      padding-left: 0.5rem;
    }

    input {
      width: 90%;
      padding-left: 0.5rem;
      height: 3rem;

      border: 0;
      background: transparent;

      border-bottom: 2px solid #d0d0d0;
      background: '#0f0';
      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: var(--text);
      }
    }
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  flex-direction: row;

  span {
    margin-top: 0.4rem;
    margin-left: 1rem;
    color: var(--text);
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  float: right;

  button {
    width: 7rem;
    height: 3rem;
    background: var(--secundary);
    color: #fff;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;