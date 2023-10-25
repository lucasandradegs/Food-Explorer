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

    }

    .Card {
        display: flex;
        gap: 1.6rem;
    }
`;