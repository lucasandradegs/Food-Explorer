import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    
    width: 21.0rem;
    height: 29.2rem;
    
    margin-top: 2.4rem;
    padding: 2.4rem;
    
    
    border-radius: 8px;
    margin-bottom: 2.4rem;
    
    
    background-color: ${({theme}) => theme.COLORS.DARK_200};
    
    span {
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
    
    img {
        width: 8.8rem;
        height: 8.8rem;
    }

    .MinusAndPlusButton {
        display: flex;
        justify-content: center;
        
        gap: 1.4rem;
        
        width: 16.2rem;
    }

    .QuantitySection {
        button {
            margin-top: 1.6rem;
            height: 3.2rem;
        }
    }
`;  