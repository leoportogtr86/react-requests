import {useEffect} from "react";

const ExemploPost = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: 'Novo Post',
                body: 'Este é o conteúdo do post.',
                userId: 1
            })
        })
            .then((res) => res.json())
            .then((data) => console.log("Dados enviados com sucesso: " + data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <>
        </>
    )
}

export default ExemploPost;