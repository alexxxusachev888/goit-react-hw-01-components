import styled from '@emotion/styled';
import {getRandomHexColor} from '../RandonColorFn/RandomeColorFn'

export const Section = styled.section`
    width: 500px;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f2f2;
`
export const Title = styled.h2`
    padding: 40px 0;
    font-size: 24px;
    font-weight: bold;
`
export const StatList = styled.ul`
    display: flex;  
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 20px;
    background-color: ${getRandomHexColor};

    &:first-of-type {
        border-bottom-left-radius: 10px;

    &:last-of-type {
        border-bottom-right-radius: 10px;
    }
`
export const Label = styled.span`
    font-size: 16px;
    color: #E5F0FF;
`
export const Percentage = styled.span`
    margin-top: 5px;;
    font-size: 18px;
    color: #E5F0FF;
`