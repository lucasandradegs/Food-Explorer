import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, Content } from "./styles"
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
                <Content>
                    <section className="BannerImg">
                        <img className="bannerMobile" src="./src/assets/bannerMobile.svg" alt="" />
                        <img className="bannerDesktop" src="./src/assets/banner.svg" alt="" />

                        <div className="mobileTitle">
                            <h2>Food-Explorer</h2>
                        </div>

                        <div className="desktopTitle">
                            <div>
                                <h2>Sabores inigualáveis</h2>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                    </section>

                    {
                        plates.filter(plate => plate.category == "teste").length > 0 &&
                        <Section title="Refeições">
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
                </Content>


            </main>

            <Footer />
        </Container>

    )
}