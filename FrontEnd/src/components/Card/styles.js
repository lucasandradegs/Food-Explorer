import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    
    width: 21.0rem;
    height: 29.2rem;
    
    margin-top: 2.4rem;
    padding: 2.4rem;
    
    
    border-radius: 8px;
    margin-bottom: 2.4rem;
    
    
    background-color: ${({theme}) => theme.COLORS.DARK_200};

    a {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    h4 {
        cursor: pointer;
    }

    span {
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
    
    img {
        width: 8.8rem;
        height: 8.8rem;
    }


    .MinusAndPlusButton {
        display: flex;
        justify-content: center;
        
        gap: 1.4rem;
        
        width: 16.2rem;
    }

    .QuantitySection {
        button {
            margin-top: 1.6rem;
            height: 3.2rem;
        }
    }

    @media (max-width: 1023px) {
        h5 {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        width: 30.4rem;
        height: 46.2rem;

        img {
            width: 17.6rem;
            height: 17.6rem;
        }

        h4 {
            font-size: 2.4rem;
        }

        h5 {
            text-align: center;
            font-family: 'Roboto', serif;
            font-size: 1.4rem;
        }

        span {
            font-size: 3.2rem;
        }

        .MinusAndPlusButton {
            align-items: center;
            margin-top: 1.2rem;
        }

        .QuantitySection {
            width: 20.8rem;

            h4 {
                font-size: 2rem;
            }

            display: flex;
            align-items: center;
            justify-content: center;

            button {
                width: 9.2rem;
                height: 4.6rem;
            }
        }
    }
`;  