import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, Banner } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { InputHeader } from "../../components/InputHeader"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { MdKeyboardArrowRight } from 'react-icons/md'

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
                    <div className="Letters">

                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </Banner>
            <div className="SectionCards">

            <Section title="Refeições">
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
            </Section>
            <Section title="Pratos principais">
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
            </Section>
            <Section title="Pratos principais">
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
                <Card title="Salada Ravanello" price="49,97" quantity="01" />
            </Section>
            </div>
            <Footer />
        </Container>

    )
}