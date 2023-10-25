import { Button } from "../Button";
import { Container } from "./styles";
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export function Card({ image, title, price }) {
    return (
        <Container>
            <img src="./src/assets/saladaravanello.svg" alt="" />
            <h4>{title}{' >'}</h4>
            <span>R$ {price}</span>
            <div className="QuantitySection">
                <div className="MinusAndPlusButton">
                    <AiOutlineMinus size={24}/>
                    <h4>01</h4>
                    <AiOutlinePlus size={24}/>
                </div>
                <Button title="incluir" />
            </div>
        </Container>
    )
}