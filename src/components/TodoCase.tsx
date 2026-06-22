import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

type TodoListType = {
  id: number;
  name: string;
};

export function TodoCase() {
  const [lists, setLists] = useState<TodoListType[]>(() => {
    const savedLists = localStorage.getItem("todoLists");
    return savedLists ? JSON.parse(savedLists) : [];
  });

  function addTodoCase() {
    const value = window.prompt("Donne un nom à ta liste :");

    if (value === null) return;

    const cleanName = value.trim().toUpperCase();

    if (cleanName === "") return;

    const newList: TodoListType = {
      id: Date.now(),
      name: cleanName,
    };

    setLists((prevLists) => [...prevLists, newList]);
  }

  function removeTodoCase(id: number) {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="todo-container">
      {lists.map((list) => (
        <div className="todoCase" key={list.id}>
          <NavLink to={`todo/${list.id}`}>
            <div className="todo-case">
              <div className="remove-btn" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeTodoCase(list.id);
              }}>
                X
              </div>
            </div>
          </NavLink>
          <p className="case-name">{list.name}</p>
        </div>
      ))}

      <div className="todoCase">
        <div className="todo-case" onClick={addTodoCase}>+</div>
      </div>
    </div>
  );
}
