import styled from '@emotion/styled';


export const Wrapper = styled.div`
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #f2f2f2;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`; 

export const Descr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
`;
export const Name = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;
export const Tag = styled.p`
    font-size: 0.9rem;
    color: gray;
    margin-bottom: 0.5rem;
`;
export const Location = styled.p`
    font-size: 0.9rem;
    color: gray;
`;
export const Stats = styled.ul`
    margin-top: 20px;
    padding: 0;
    display: flex;
    border-top: 1px solid #D7E1E9;
    border-radius: 10px;
`;
export const StatsItem = styled.li`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 70px;
    background-color: #E5F0FF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:not(:last-child) {
        border-right: 1px solid #D7E1E9;
    }
`;
export const StatsLabel = styled.span`
    font-size: 1.0rem;
    color: gray;
    letter-spacing: 0.5px;
`;
export const StatsQty = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
`;