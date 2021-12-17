import styled from '@emotion/styled';

export const Table = styled.table`
  width: 344px;
  margin: 20px auto 0;
  table {
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
  }
  th,
  td:first-of-type {
    background: #afcde7;
    color: white;
    padding: 10px 20px;
  }
  th,
  td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    text-align: center;
  }
  td {
    background: #d8e6f3;
  }
  th:first-of-type,
  td:first-of-type {
    text-align: left;
  }
`;
