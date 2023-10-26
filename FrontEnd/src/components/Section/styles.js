import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 0 2.4rem;

    h2 {
        font-size: 1.8rem;
    }

    .CardSection {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;

        -ms-overflow-style: none;
        scrollbar-width: none;

        .cardSection::-webkit-scrollbar {
        display: none;

    }

    }

    .Card {
        display: flex;
        gap: 1.6rem;


    }

    @media (min-width: 1024px) {
        padding: 0;

        h2 {
            font-size: 3.2rem;
            font-weight: 400;
        }
    }
`;