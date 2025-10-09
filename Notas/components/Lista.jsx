import axios from 'axios';
import { useEffect, useState } from 'react'

const Lista = () => {

    const [lista, setLista] = useState([]);


    useEffect(() => {

        const buscaDados = async () => {
            try {
                
                const notas = await axios.get("http://127.0.0.1:8000/notas");

                console.log(notas);
                setLista(notas);
            } catch (erro){
                console.log(erro);
            }
        }

        buscaDados();

    }, []) 

  
}

export default Lista