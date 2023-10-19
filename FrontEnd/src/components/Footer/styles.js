import styled from 'styled-components'

export const Container = styled.div`
    grid-area: footer;

    width: 100%;
    height: 7.7rem;
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 0 2.8rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: space-between;
    
    span {
        font-size: 1rem;
    }

    .foodexplorer {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-weight: 700;
        font-size: 1rem;

        font-family: 'Roboto', serif;
        
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        
        img {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }


    background-color: ${({theme}) => theme.COLORS.DARK_600};
`;