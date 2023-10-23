import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_200};

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    max-width: 210px;
    height: 292px;

    padding: 2.4rem;
    border-radius: 0.8rem;

    span {
        position: absolute;
    }

    img {
        width: 88px;
        height: 88px;
    }


    .cardHeader {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 1.2rem;

        img {
            margin-bottom: 1.2rem;
        }

        
        .title {
            span {
                margin-top: 3px;
            }
        }
    }

    .middlePrice {
        display: flex;
        justify-content: center;
    }

    
    .cardFooter {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.2rem;

        span {
            cursor: pointer;
        }
        
        span:nth-child(1) {
            margin-right: 7rem;
        }

        span:nth-child(2) {
            margin-left: 7rem;
        }

    }

    button {
        margin-top: 1.6rem;
        height: 3.2rem;
    }
`;
