import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, Banner } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { InputHeader } from "../../components/InputHeader"
import { Footer } from "../../components/Footer"

export function Home() {
    return (
        <Container>
            <Header >
                <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
            </ Header>
            <Banner>

                <img className="bannerMobile" src="./src/assets/bannerMobile.svg" alt="" />
                <img className="bannerDesktop" src="./src/assets/banner.svg" alt="" />

                <div className="main">
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com <br /> ingredientes selecionados.</p>
                </div>
            </Banner>

            <Footer />
        </Container>

    )
}