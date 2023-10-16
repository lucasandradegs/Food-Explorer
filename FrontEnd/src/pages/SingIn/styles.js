import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 158px 65px;

    .title {
        display: flex;
        align-items: center;
        
        
        gap: 11px;
        margin-bottom: 41px;

        h2 {
            font-size: 34px;
        }

        img {
            width: 43px;
            height: 43px;
        }
    }

`;

export const Form = styled.form`
    input {
        width: 316px;
    }

    P {
        margin-top: 32px;
    }

    button {
        margin-top: 32px;
    }
`;