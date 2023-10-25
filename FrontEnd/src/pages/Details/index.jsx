import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../../components/Button";
import { PiReceipt } from 'react-icons/pi'
import { Footer } from "../../components/Footer";

export function Details({ image, title, description, ingredients }) {
    return (
        <Container>
            <Header />
            <div className="Content">
                <ButtonText icon={PiCaretLeftBold} title="voltar" />
                <div className="TitleSection">
                    <img src="./src/assets/saladaravanello.svg" alt="" />
                    <h2>Salada Ravanello</h2>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                </div>
                <div className="IngredientsSection">
                    <div className="Ingredients">
                        <span>alface</span>
                        <span>cebola</span>
                        <span>pão naan</span>
                        <span>pepino</span>
                        <span>rabanete</span>
                        <span>tomate</span>
                    </div>
                </div>
                <div className="Details">
                    <AiOutlineMinus size={24} />
                    <h4>01</h4>
                    <AiOutlinePlus size={24} />
                    <Button icon={PiReceipt} title="pedir ∙ R$ 25,00" />
                </div>
            </div>
            <Footer />
        </Container>
    )
}