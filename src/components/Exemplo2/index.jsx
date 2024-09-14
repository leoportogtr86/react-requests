import {useEffect} from "react";

const Exemplo2 = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }, []);
    return (
        <>
        </>
    )
}

export default Exemplo2;