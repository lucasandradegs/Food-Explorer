import { Button } from "../Button";
import { Container, Left, Middle, Right } from "./styles";
import { PiReceipt } from 'react-icons/pi'
import { GoSignOut } from 'react-icons/go'
import { FiMenu } from "react-icons/fi";

export function Header({ children }) {
    return (
        <Container>
            <Left>

                <span><FiMenu size={24} /></span>

                <div className="leftSideDesktop">
                    <img src="/src/assets/explorer.svg" alt="" />
                    <h2>food explorer</h2>
                </div>

            </Left>

            <Middle>
                <div className="middleSideDesktop">
                    {children}
                </div>

                <img src="/src/assets/explorer.svg" alt="" />
                <h2>food explorer</h2>

            </Middle>

            <Right>

                <span><PiReceipt size={26} /></span>
                <label htmlFor="npedidos">
                    <input
                        id="npedidos"
                    />
                </label>
                <p>0</p>

                <div className="rightSideDesktop">
                    <Button icon={PiReceipt} title="Pedidos (0)" />
                    <span><GoSignOut size={22} /></span>
                </div>
            </Right>

        </Container>
    )
}