import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  width: 40%;
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

export const AnswerTable = styled.table`
  width: 100%;
  margin-top: 20px;
  background: #fff;
  padding: 30px 30px;
  border-radius: 8px;

  thead {
    color: #444;
    text-align: left;
    padding-bottom: 10px;

    th {
      & + th {
        text-align: center;
        vertical-align: middle;
      }
    }
  }

  td {
    font-size: 16px;
    color: #666;
    text-align: left;
    line-height: 20px;

    & + td {
      padding: 12px 0;

      text-align: center;
      vertical-align: middle;
    }

    div {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;

      a {
        background: none;
        border: 0;
        font-size: 14px;
        padding: 6px;
        color: #4d85ee;
      }
    }
  }
`;

export const Pagination = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  span {
    color: #666;
    font-size: 16px;
  }

  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    background: #ee4d64;
    color: #fff;
    padding: 8px;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
