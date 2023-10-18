import { Button } from "../Button";
import { Container, Left, Middle, Right } from "./styles";
import { PiReceipt } from 'react-icons/pi'
import { GoSignOut } from 'react-icons/go'

export function Header({ children }) {
    return (
        <Container>
            <Left>
                <img src="/src/assets/explorer.svg" alt="" />
                <h2>food explorer</h2>
            </Left>
            <Middle>
            {children}
            </Middle>
            <Right>
                <Button icon={PiReceipt} title="Pedidos (0)" />
                <span><GoSignOut size={22}/></span>
            </Right>
        </Container>
    )
}