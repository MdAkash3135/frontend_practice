import React, { useState } from "react";
import NewTodos from "./NewTodo";

const Todos = () => {
  const [todos, setTodos] = useState(["title", "description this is akash"]); // Manage todos as state

  const handleNewToDo = (newData) => {
    console.log('*******************************************')
    console.log(newData);
    
    // Append the new todo data to the existing todos
    setTodos([...todos, newData.formdata.name]); // Accessing name property from formdata
  };

  return (
    <>
      <div>
        <NewTodos onChangeNewData={handleNewToDo}/>
      </div>

      <div className="box">
        {todos.map((todo, index) => (
          <div key={index} className="semibox">
            <p>{todo}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
