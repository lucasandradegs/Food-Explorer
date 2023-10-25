import styled from "styled-components"

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK_400};

    width: 100%;
    min-height: 100vh;
    position: relative;

    .SectionCards {
        /* overflow-x: auto;
        scroll-behavior: smooth;

        -ms-overflow-style: none;
        scrollbar-width: none; */

        ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 1024px) {
        padding: 0 11.2rem;
    }
}

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
    

        .Letters {
            display: flex;
            margin-top: 3.6rem;
            align-items: flex-end;
            flex-direction: column;
            width: 215px;
            height: 62px;

            p {
                margin-top: 2rem;
                margin-left: 9.2rem;
            }

            @media (min-width: 320px) {

                h2 {
                    font-size: 1rem;
                }
                p {
                    margin-top: 1.6rem;
                    font-size: 0.8rem;
                }
            }

            @media (min-width: 375px) {
                margin-top: 1.4rem;

                h2 {
                    font-size: 1.5rem;
                }

                p {
                    margin-left: 4rem;
                    font-size: 1rem;
                }
            }

            @media (min-width: 768px) {
                width: 100%;
                height: 8rem;

                h2 {
                    font-size: 2rem;
                    margin-right: 13rem;
                }
                
                p {
                    font-size: 1.1rem;
                    margin-right: 1rem;
                }
            }

            @media (min-width: 1024px) {
                width: 42.2rem;
                height: 8rem;
                margin-bottom: 5rem;
            }

            @media (min-width: 1440px) {
                width: 100%;

                h2 {
                    font-size: 4rem;
                    margin-right: 10rem;
                }

                p {
                    font-size: 1.6rem;
                    margin-right: 3.4rem;
                }
            }

        }

        h2 {
            font-size: 1.8rem;
            margin-right: 2rem;
        }

        p {
            font-size: 1.2rem;
            margin-right: 1.1rem;
        }
        
    }

    @media (min-width: 1024px) {
        .bannerMobile {
            display: none;
        }

        height: 26.0rem;
        margin-top: 16.4rem;
        padding: 0 12.4rem;

        img {
            position: absolute;
            
            width: 63.2rem;
            height: 40.6rem;
            
            top: 13.2rem;
            left: 7rem;
        }
    }

    @media (max-width: 1023px) {
        .bannerDesktop {
            display: none;
        }
    }

`;