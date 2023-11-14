import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    width: 100%;
    min-height: 100vh;
    position: relative;
    grid-template-rows: 10.5rem auto 12.7rem;
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

    overflow-y: auto;



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

    .Preview {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h4 {
        margin-top: 2.4rem;
        margin-bottom: 1.6rem;
    }

    button {
        margin-top: 2.4rem;
    }

    select, textarea {
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;

        border-radius: 0.8rem;
        padding: 0 1.4rem;

        width: 100%;
        height: 5.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_300}; 
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    textarea {
        resize: none;
        width: 100%;
        height: 17.2rem;

        padding: 1.4rem;
    }
   

   .Ingredients {
        margin-top: 2.4rem;
        height: auto;
        display: flex;
        padding: 4px 8px 8px;
        gap: 10px;
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        border-radius: 10px;
        flex-wrap: wrap;
   }
`;