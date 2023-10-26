import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <main className="main">
                <div className="title">
                    <img src="/src/assets/explorer.svg" alt="" />
                    <h2>food explorer</h2>
                </div>
                <Form>
                    <div className="form">
                        <h2>Crie sua conta</h2>

                        <p>Seu nome</p>
                        <Input placeholder="Exemplo: Maria da Silva" />
                        <p>Email</p>
                        <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
                        <p>Senha</p>
                        <Input placeholder="No mínimo 6 caracteres" />

                        <Button title="Criar conta" />
                        <Link to="/">
                            <ButtonText className="teste" title="Já tenho uma conta" />
                        </Link>
                    </div>
                </Form>
            </main>
        </Container>
    )
}