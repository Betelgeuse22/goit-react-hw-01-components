import styled from 'styled-components';

export const TransactionTabl = styled.table`
  margin: 50px auto;

  width: 100%;
  max-width: 800px;
  line-height: 2.5;
  font-size: 14px;
  border-radius: 1px;
  th,
  td {
    border-right: 1px solid #e2e8ed;
    border-left: 1px solid #e2e8ed;
  }

  th {
    background-color: rgb(0, 153, 255);
  }
`;

export const TableHeader = styled.thead`
  width: 100%;
  max-width: 800px;
  line-height: 2.5;
  font-size: 14px;
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  th,
  td {
    border-right: 1px solid #e2e8ed;
    border-left: 1px solid #e2e8ed;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  text-align: center;
  color: #8c8c8c;
  text-transform: capitalize;
`;
