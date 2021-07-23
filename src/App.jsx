import React, { useState } from 'react';

import './App.css';
import ToDoHeader from './Components/Header/toDoHeader';
import OnCreate from './Components/onCreate/onCreate';
import ToDoTemplate from './Components/Template/toDoTemplate';
import ToDoList from './Components/toDo/toDoList';

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, text: '운동하기', done: false },
    { id: 2, text: '공부하기', done: true },
    { id: 3, text: '코딩하기', done: false },
  ]);

  const handleChecked = (list) => {
    const newToDo = toDo.map((item) => {
      if (item.id === list.id) {
        if (item.done === true) {
          item.done = false;
        } else if (item.done === false) {
          item.done = true;
        }
      }
      return item;
    });
    setToDo(() => newToDo);
  };

  const handleDelete = (list) => {
    const newToDo = toDo.filter((item) => item.id !== list.id);
    console.log(newToDo);
    setToDo(() => newToDo);
  };

  return (
    <ToDoTemplate>
      <ToDoHeader toDo={toDo} />
      <ToDoList toDo={toDo} onDelete={handleDelete} onChecked={handleChecked} />
      <OnCreate />
    </ToDoTemplate>
  );
}

export default App;
