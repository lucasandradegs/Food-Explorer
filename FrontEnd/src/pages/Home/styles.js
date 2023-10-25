import styled from "styled-components"

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_400};

    width: 100%;
    min-height: 100vh;
    position: relative;

`

export const Banner = styled.div`
    display: flex;

    padding: 0 3.2rem;

    margin-top: 4.4rem;
    margin-bottom: 6.2rem;

    width: 100%;
    height: 12rem;
    
    
    img {
        position: absolute;
        left: 2px;
        top: 129px;
        width: 19rem;
        height: 15rem;
    }

    .main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-end;
        

        width: 100%;

        border-radius: 0.8rem;

        background: rgb(9,30,38);
        background: linear-gradient(#091E26, #00131C);
    
        h2 {
            font-size: 1.8rem;
            margin-right: 2rem;
        }

        p {
            font-size: 1.2rem;
            margin-right: 1.1rem;
        }

        @media (max-width: 374px) {
            h2 {
                margin-top: 3rem;
                font-size: 1rem;
            }

            p {
                font-size: 0.7rem;
                margin-top: 2rem;
            }
        }

        @media (min-width: 375px) {
            h2 {
                font-size: 1.33rem;
            }

            p {

                font-size: 0.9rem;
            }
        }
        
        @media (min-width: 425px) {
            h2 {
            font-size: 1.8rem;
            margin-right: 2rem;
        }

        p {
            font-size: 1.2rem;
            margin-right: 1.1rem;
        }
        }
    
    }

    @media (min-width: 1023px) {
        .bannerMobile {
            display: none;
        }
    }

    @media (max-width: 1023px) {
        .bannerDesktop {
            display: none;
        }
    }

`;