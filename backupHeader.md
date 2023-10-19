import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 12.3rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    `;

export const Middle = styled.div`
    flex: 1;
    padding: 0 3.2rem;
`;


export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 3rem;
    }

`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    span {
        margin-top: 6px;
        cursor: pointer;
    }

    button {
        width: 21.6rem;
    }
`;




** HOME **

import styled from "styled-components"

export const Container = styled.div`
    
    background: ${({theme}) => theme.COLORS.DARK_400};

    width: 100%;
    height: 100%;

`

export const Banner = styled.div`
    display: flex;

    padding: 0 123px;

    margin-top: 16.4rem;

    width: 100%;
    height: 260px;

    img {
        position: absolute;
        left: 53px;
        top: 130px;
    }


    .main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-end;

        width: 100%;

        border-radius: 8px;

        background: rgb(9,30,38);
        background: linear-gradient(#091E26, #00131C);
    }
    
    h2 {
        /* margin-top: 82px; */
        font-weight: 500;
        font-size: 40px;
        margin-right: 12.4rem;
    }

    p {
        font-size: 16px;
        font-family: 'Roboto', serif;
        margin-right: 12.4rem;
    }

    

    
`;


