import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
    return (
        <Container>
            <main className="main">
                <div className="title">
                    <img src="/src/assets/explorer.svg" alt="" />
                    <h2>food explorer</h2>
                </div>
            <Form>
                <div className="form">
                    <h2>Faça login</h2>
                    <p>Email</p>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <p>Senha</p>
                    <Input placeholder="No mínimo 6 caracteres" />

                    <Button title="Entrar" />
                    <ButtonText title="Criar uma conta" />
                </div>
            </Form>
            </main>
        </Container>
    )
}