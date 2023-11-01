import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, Banner } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { InputHeader } from "../../components/InputHeader"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { MdKeyboardArrowRight } from 'react-icons/md'

import { api } from "../../services/api"
import { useState, useEffect } from "react"

export function Home() {
    const [plates, setPlates] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates?name=${search}`);
            setPlates(response.data);
        }

        fetchPlates();
    }, [search])

    return (
        <Container>
            <Header >
                <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
            </ Header>
            <main>

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

                    {
                        plates.filter(plate => plate.category == "teste").length > 0 &&
                        <Section title="Pratos Principais">
                            {
                                plates.filter(plate => plate.category == "teste").map(plate => (
                                    <Card
                                        key={String(plate.id)}
                                        data={plate}
                                    />
                                ))
                            }
                        </Section>
                    }

                    {
                        plates.filter(plate => plate.category == "Refeição").length > 0 &&
                        <Section title="Pratos">
                            {
                                plates.filter(plate => plate.category == "Refeição").map(plate => (
                                    <Card
                                        key={String(plate.id)}
                                        data={plate}
                                    />
                                ))
                            }
                        </Section>
                    }

                </div>
            </main>
            <Footer />
        </Container>

    )
}