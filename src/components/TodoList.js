import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue.trim(), completed: false }]);
            setInputValue('');
        }
    }

    function handleComplete(index) {
        setTodos(todos.map((todo, i) => 
            i === index ? { ...todo, completed: true } : todo
        ));
    }

    function handleEdit(index) {
        setIsEditing(index);
        setEditValue(todos[index].text);
    }

    function handleEditChange(event) {
        setEditValue(event.target.value);
    }

    function handleEditSubmit(index) {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, text: editValue } : todo
        );
        setTodos(updatedTodos);
        setIsEditing(null);
        setEditValue('');
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button className="add-button" onClick={handleSubmit}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? "completed" : "todo-item"}>
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                />
                                <button className="save-button" onClick={() => handleEditSubmit(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button className="complete-button" onClick={() => handleComplete(index)}>Complete</button>
                                <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;



