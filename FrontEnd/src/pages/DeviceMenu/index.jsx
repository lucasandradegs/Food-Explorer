import { HeaderMenu } from "../../components/HeaderMenu";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { Footer } from "../../components/Footer";

import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth";

export function DeviceMenu() {
    const { user } = useAuth()

    return (
        <Container>
            <HeaderMenu />
            {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <div className="main">
                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                    <h2>Sair</h2>
                </div>
            }
            {[USER_ROLE.ADMIN].includes(user.role) &&
                <div className="main">
                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                    <h2>Novo prato</h2>
                    <h2>Sair</h2>
                </div>
            }
            <Footer />
        </Container>
    )
}