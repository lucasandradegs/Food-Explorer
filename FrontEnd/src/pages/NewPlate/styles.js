import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;
    
export const Content = styled.div`
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button:nth-child(1) {
        display: flex;
            justify-content: flex-start;

            font-size: 1.6rem;

            margin-top: 1rem;

            svg {
                width: 2.2rem;
                height: 2.2rem;
            }
    }

    h2 {
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }

    label {
        margin-top: 2.4rem;
    }


   
`;