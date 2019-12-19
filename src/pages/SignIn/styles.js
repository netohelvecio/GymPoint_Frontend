import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  width: 100%;
  max-width: 350px;
  padding: 60px 25px;
  border-radius: 8px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
      width: 160px;
      align-self: center;
    }

    label {
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 8px;
    }

    input {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 20px;

      &::placeholder {
        color: #999999;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
