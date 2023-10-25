import { Container } from "./styles";

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