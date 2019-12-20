import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 30px auto;
  width: 80%;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }
`;

export const RegisterOptions = styled.div`
  display: flex;

  button {
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    height: 35px;
    padding: 0 25px;
    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${darken(0.05, '#ee4d64')};
    }
  }

  > div {
    height: 35px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    border-radius: 4px;
    border: #999;

    input {
      border: 0;
      width: 100%;
      height: 100%;

      &::placeholder {
        color: #999;
      }
    }

    svg {
      margin-right: 5px;
    }
  }
`;
