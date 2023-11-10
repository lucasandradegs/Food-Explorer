import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { InputHeader } from "../../components/InputHeader";
import { FiSearch } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { AiOutlineUpload } from "react-icons/ai"
import { Input } from "../../components/Input";

export function NewPlate() {
    return (
        <Container>
            <Header >
                <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)} />
            </ Header>
            <Content>
                <Link to="/">
                    <ButtonText icon={PiCaretLeftBold} title="voltar" />
                </Link>

                <div className="newPlateSection">
                    <h2>Novo prato</h2>
                    <label htmlFor="plateImage">Imagem do prato</label>
                    <Input icon={AiOutlineUpload} type="file" title="Selecione a imagem"/>
                </div>
            </Content>

            <Footer />
        </Container>
    )
}