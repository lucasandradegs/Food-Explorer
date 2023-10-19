import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    height: 11.4rem;
    width: 100%;


    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    @media (min-width: 1023px) {
        padding: 0 12.3rem;
    }

    @media (max-width: 1023px) {
        .leftSideDesktop, .middleSideDesktop, .rightSideDesktop  {
            display: none;
        }
    }
    
    `;

export const Left = styled.div`
    margin-top: 0.8rem;

    @media (min-width: 1023px) {
        
        span {
            display: none;
        }
    }
`;

export const Middle = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    img {
        height: 24px;
        width: 24px;
    }

    h2 {
        font-size: 21px;
    }

    @media (min-width: 1023px) {
        img, h2 {
            display: none;
        }
    }
    
`;


export const Right = styled.div`
    margin-top: 0.8rem;

    p {

        position: absolute;
        top: 53px;
        right: 27px;

        font-weight: 100;
    }

    > label {
        width: 20px;
        height: 20px;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        top: 55px;
        right: 22px;

        position: absolute;
        cursor: pointer;

        input {
            display: none;
        }
    }

    @media (min-width: 1023px) {

        .mobile {
            span {
                display: none;
            }
        }

        p, label, input {
            display: none;
        }
    }
`;