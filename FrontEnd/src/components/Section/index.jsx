import { Container } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react'

export function Section({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            <div className="CardSection">
                <div className="Card">
                    {children}
                </div>
            </div>
        </Container>
    )
}