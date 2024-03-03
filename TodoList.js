import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([""]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo || /^\s*$/.test(newTodo)) {
      return;
    };const todo = {
      id: Date.now(),
      text: newTodo,
      isComplete: false
    };


    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    setNewTodo("");
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        //updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
