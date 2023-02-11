import styled from '@emotion/styled';

export const Table = styled.table`
    border-collapse: collapse;
    width: 600px;
    margin: 20px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

export const TabHeader = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    font-family: Arial, sans-serif;
    vertical-align: middle;
    text-align: center;
    padding: 15px 0;
    font-weight: 300;
    font-size: 14px;
    color:#f2f2f2;
    text-transform: uppercase;
    background-color: #51EAFF;
    border-radius: 10px;
`
export const TabData = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #333333;
    vertical-align: middle;
    text-align: center;
    border-radius: 10px;
` 
export const TabRow =styled.tr`
    &:nth-of-type(even) {
    background-color: #f2f2f2;
}
    &:hover {
        background-color: #f5f5f5;
        cursor: pointer;
      }

`