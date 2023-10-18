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

    /* width: 1120px;
    height: 260px; */

    img {
        display: flex;
        position: absolute;
    }

    h2 {
        margin-top: 82px;
        font-weight: 500;
        font-size: 40px;
    }

    p {
        font-size: 16px;
        font-family: 'Roboto', serif;
    }

    .main {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    background: rgb(9,30,38);
    background: linear-gradient(#091E26, #00131C);
`;