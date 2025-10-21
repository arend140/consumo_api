import axios from 'axios';
import { useEffect, useState } from 'react'

const Lista = () => {

    const [lista, setLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                setCarregando(true);
                const response = await axios.get("http://127.0.0.1:8000/notas");
                setLista(response.data);
            } catch (erro) {
                console.log(erro);
            } finally {
                setCarregando(false);
            }
        }

        buscaDados();
    }, []);

    if (carregando) {
        return <div>Carregando notas...</div>;
    }

    return (
        <div>
            <h2>Lista de Notas</h2>
            {lista.length === 0 ? (
                <p>Nenhuma nota encontrada</p>
            ) : (
                <div>
                    {lista.map((nota) => (
                        <span key={nota.id}>
                            <h3>{nota.titulo}</h3>
                            <p>{nota.texto}</p>
                            <small>
                                Criado em: {new Date(nota.created_at).toLocaleDateString()}
                            </small>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
  
}

export default Lista