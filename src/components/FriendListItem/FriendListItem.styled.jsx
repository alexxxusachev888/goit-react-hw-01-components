import styled from '@emotion/styled';

export const Friend = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    padding-left: 20px;
    width: 150px;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #ccc;
`
export const Avatar = styled.img`
    padding-left: 20px;
    border-radius: 50%;
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
`

export const StatusOnline = styled.p`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #00CF91;
`

export const StatusOffline = styled.p`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #FF005C;
`