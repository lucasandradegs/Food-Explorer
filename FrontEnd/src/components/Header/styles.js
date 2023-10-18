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