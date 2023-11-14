import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { InputHeader } from "../../components/InputHeader";
import { FiSearch, FiUpload } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { AiOutlineUpload } from "react-icons/ai"
import { Input } from "../../components/Input";
import { useRef, useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify'
import { IngredientPlate } from "../../components/IngredientPlate";

export function NewPlate() {
    const [imagePreview, setImagePreview] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")


    const inputRef = useRef()

    function handleAddIngredient() {

        if (newIngredient === "") {
            return toast.error('Não é possível adicionar um ingrediente vazio!', {
                theme: "colored"
            })
        }

        setIngredients(prevState => [...prevState, newIngredient])

        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }



    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setImagePreview(reader.result)
            }

            reader.readAsDataURL(file)
        } else {
            setImagePreview(null)
        }
    }

    const handleCostumInputClick = () => {
        inputRef.current.click()
    }


    return (
        <Container>
            <Header >
                <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)} />
            </ Header>
            <Content>
                <Link to="/">
                    <ButtonText icon={PiCaretLeftBold} title="voltar" />
                </Link>
                <ToastContainer />
                <div className="newPlateSection">
                    <h2>Novo prato</h2>
                    {imagePreview && (
                        <div className="Preview">
                            <h4>Preview da Imagem</h4>
                            <img src={imagePreview} alt="Preview" style={{ maxWidth: '50%', maxHeight: '200px' }} />
                        </div>
                    )}
                    <label htmlFor="imageInput">Imagem do prato</label>
                    <Input icon={FiUpload} placeholder="Selecione a Imagem" onClick={handleCostumInputClick} readOnly />
                    <input
                        type="file"
                        id="imageInput"
                        accept=".png"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        ref={inputRef}
                    />

                    <h4>Nome</h4>
                    <Input placeholder="Ex: Bolo de Cenoura" />

                    <h4>Categoria</h4>
                    <select>
                        <option value="">Selecione uma opção</option>
                        <option value="Refeições">Refeições</option>
                        <option value="Sobremesas">Sobremesas</option>
                        <option value="Bebidas">Bebidas</option>
                    </select>

                        <h4>Ingredientes</h4>
                    <div className="Ingredients">

                        {
                            ingredients.map((ingredient, index) => (
                                <IngredientPlate 
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                />
                            ))
                        }

                        <IngredientPlate 
                            isNew
                            placeholder="Adicionar"
                            onChange={e => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            onClick={handleAddIngredient}
                        />
                    </div>

                    <h4>Preço</h4>
                    <Input placeholder="R$ 00,00" />

                    <h4>Descrição</h4>
                    <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

                    <Button title="Salvar alterações" />
                </div>
            </Content>

            <Footer />
        </Container>
    )
}