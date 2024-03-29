import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <input placeholder='Buscar tarea'
    value={searchValue}
    onChange={e => setSearchValue(e.target.value)}
    />
  )
}

export { TodoSearch };