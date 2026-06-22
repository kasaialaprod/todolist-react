import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Todo = {
  text: string;
  color: string;
};

export function TodoList() {
    const { id } = useParams();

    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem(`todos-${id}`);
        return saved ? JSON.parse(saved) : [];
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem(`todos-${id}`, JSON.stringify(todos));
    }, [todos, id]);

    const ajouterTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue.trim(), color: '#fff' }]);
            setInputValue(''); 
        }
         
    };
    const supprimerTodo = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
    }

    const changerCouleur = (index: number) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, color: '#00ff00'}: todo))
    };

    return (
        <>
        
        <div className="container-todo">
            <div className="input-section">
                <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nouvelle tâche"
                />
                <button className="ajouter-btn" onClick={ajouterTodo}>Ajouter</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                <li key={index} style={{ backgroundColor: todo.color }}>
                    <span>{todo.text}</span>
                    <button className="fait-btn" onClick={() => changerCouleur(index)}>Fait</button>
                    <button className="supprimer-btn" onClick={() => supprimerTodo(index)}>Supprimer</button>
                </li>
                ))}
            </ul>
        </div>

        </>
    );
}
export function TodoId() {
  const { id } = useParams();

  return {id};
}
