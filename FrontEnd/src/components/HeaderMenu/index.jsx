import { Button } from "../Button";
import { Container, Left } from "./styles";
import { AiOutlineClose } from "react-icons/ai"
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";

export function HeaderMenu() {
    return (
        <Container>
            <Left>
                <Link to="/">
                    <ButtonText icon={AiOutlineClose} title="Menu"/>
                </Link>

            </Left>
        </Container>
    )
}