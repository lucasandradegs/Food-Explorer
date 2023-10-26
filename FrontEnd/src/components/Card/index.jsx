import { Button } from "../Button";
import { Container } from "./styles";
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from "react-router-dom";

export function Card({ image, title, description, price }) {
    return (
        <Container>
            <img src="./src/assets/saladaravanello.svg" alt="" />
            <Link to="/details/1">
                <h4>{title}{' >'}</h4>
            </Link>
            <h5>{description}</h5>
            <span>R$ {price}</span>
            <div className="QuantitySection">
                <div className="MinusAndPlusButton">
                    <AiOutlineMinus size={24} cursor="pointer" />
                    <h4>01</h4>
                    <AiOutlinePlus size={24} cursor="pointer" />
                </div>
                <Button title="incluir" />
            </div>
        </Container>
    )
}