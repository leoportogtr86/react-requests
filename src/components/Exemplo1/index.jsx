import {useEffect, useState} from "react";

const Exemplo1 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(`Erro ao buscar os dados: ${err}`))
    }, []);

    return (
        <>
            <h1>Dados da API</h1>
            {data ?
                (
                    <pre>
                        {JSON.stringify(data[0], null, 2)}
                    </pre>
                ) : <p>Carregando os dados...</p>
            }
        </>
    )
}

export default Exemplo1;