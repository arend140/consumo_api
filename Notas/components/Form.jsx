import axios from 'axios';
import { useEffect, useState } from 'react'

const Form = () => {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');

    const salvaTitulo = (event) => {
        setTitulo(event.target.value)
    }

    const salvaTexto = (event) => {
        setTexto(event.target.value)
    }

    const criaNota = async () => {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/notas", 
                    {
                        'titulo': titulo,
                        'texto': texto},
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
                
                console.log("Nota criada:", response.data);
                alert("Nota criada com sucesso!");

                setTitulo('');
                setTexto('');
            } catch (erro) {
                console.log(erro);
            }
        }

    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="titulo">Título</label>
            <br />
            <input value={titulo} onChange={salvaTitulo} id='titulo' name='titulo' type="text" required/>
            <br />
            <label htmlFor="texto">Texto</label>
            <br />
            <textarea value={texto} onChange={salvaTexto} id='texto' name='texto' type="text" required/>
            <br />
            <button type='button' onClick={criaNota}>Salvar</button>
        </form>
    );
}

export default Form