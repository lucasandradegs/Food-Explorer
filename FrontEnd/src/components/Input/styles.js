import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    margin-top: 0.8rem;
    border-radius: 0.8rem;

    > input {
        height: 5.6rem;
        padding: 1.2rem;

        color: ${({theme}) => theme.COLORS.LIGHT_300}; 
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }

        svg {
            margin-left: 16px;
        }
    }
`;