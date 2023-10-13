const TodoCounter = ({ completed, total }) => {
    return (
        completed === total 
        ?
            <h1>Has completado todo tus TODOs 👽✌️🔥</h1>
        :
            <h1>Has completado <br />
                <span>{completed}</span> de <span>{total}</span> TODOs
            </h1>
    )
}

export { TodoCounter };