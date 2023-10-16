import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;

    border: 0;
    padding: 0 16px;
    border-radius: 5px;

    font-weight: 100;
    
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &:disabled {
        opacity: 0.5;
    }
`