import { Button } from "../Button";
import { Container } from "./styles";
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Card({ data, ...rest }) {
    const imageURL = `${api.defaults.baseURL}/files/${data.image}`
    const { user } = useAuth()

    return (
        <Container {...rest}>
            <img src={imageURL} alt="" />
            <Link to="/details/1">
                <h4>{data.name}{' >'}</h4>
            </Link>
            <h5>{data.description}</h5>
            <span>R$ {data.price}</span>
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