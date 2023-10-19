import styled from 'styled-components'

export const Container = styled.div`
    .main {
        padding: 0 2.8rem;
        margin-top: 3.6rem;

        h2 {
            padding-bottom: 1rem;
            margin-top: 3.6rem;

            font-size: 24px;
            font-weight: 300;

            border-bottom-width: 0.1rem;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
        }

    }

`;