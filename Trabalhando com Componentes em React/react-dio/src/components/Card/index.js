import { useState } from "react"
import Button from "../Button"



const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar() {
        setValor(valor + 1)
    }

    function Remover() {
        setValor(valor - 1)
    }

    return (
        <div Class="card">
            <div Class="card-header">
                Isso é um Card
            </div>
            <div Class="card-body">
                <p>{valor}</p>

                <Button
                    className="btn btn-success"
                    onClick={Adicionar}>
                    Adiciona
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}>
                    Remove
                </Button>
            </div>
        </div>
    )
}

export default Card