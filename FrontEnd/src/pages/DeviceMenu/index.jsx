import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { Footer } from "../../components/Footer";

export function DeviceMenu() {
    return (
        <Container>
            <Header />
            <div className="main">
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                <h2>Sair</h2>
            </div>
            <Footer />
        </Container>
    )
}