import styled from 'styled-components'

export const Container = styled.div`

    .Content {
        padding: 0 5.3rem;

        button:nth-child(1) {
            display: flex;
            justify-content: flex-start;

            font-size: 2.4rem;

            margin-top: 3.6rem;

            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }
    }

    .TitleSection {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        text-align: center;

        margin-top: 1.6rem;

        img {
            width: 26.4rem;
            height: 26.4rem;
        }

        h2 {
            margin-top: 1.6rem;
        }

        p {
            margin-top: 2.4rem;
        }
    }

    .IngredientsSection {
        margin-top: 2.4rem;

        span {
            padding: 0.4rem 0.8rem;
            border-radius: 5px;
            background-color: ${({theme}) => theme.COLORS.DARK_1000};
            font-size: 1.4rem;
        }

    }

    .Ingredients {
        display: flex;
        gap: 2.4rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .Details {
        display: flex;
        align-items: center;
        margin-top: 4.8rem;
        
        gap: 1.6rem;
        
        font-size: 2.2rem;

        button {
            width: 18.8rem;
            height: 3.7rem;

            font-size: 0.9rem;

            svg {
                width: 2.1rem;
                height: 2.1rem;
            }

        }
    }
`;