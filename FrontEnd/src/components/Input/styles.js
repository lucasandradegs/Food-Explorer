import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    margin-top: 8px;
    border-radius: 8px;

    > input {
        height: 56px;
        padding: 12px;

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