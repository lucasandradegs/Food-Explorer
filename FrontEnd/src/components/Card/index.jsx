import { Button } from "../Button";
import { Container } from "./styles";
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export function Card({ title, price, quantity }) {
    return (
        <Container>
            <img src="./src/assets/saladaravanello.svg" alt="" />
            <p><AiOutlineHeart size={32} /></p>
            <div className="cardHeader">
                <div className="title">
                    {title}
                    <span><MdKeyboardArrowRight /></span>
                </div>
            </div>
            <div className="middlePrice">
                {price}
            </div>
            <div className="cardFooter">
                <span><AiOutlineMinus size={24} /></span>
                {quantity}
                <span><AiOutlinePlus size={24} /></span>
                <Button title="incluir" />
            </div>
        </Container>
    )
}