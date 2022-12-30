import React from 'react'
import Hello from './Hello'
import Header from './Header'
import Tester from './Tester'
import Todo from './Todo'
import Todoitems from './Todoitems'

function App() {
  const allTask = Todoitems.map((item) => <Todo key ={item.id} item={item}/>);
  const done = Todoitems.filter((dat)=> (dat.completed)).map((item) => <Todo key ={item.id} item={item}/>);
  const undone = Todoitems.filter((dat)=> (dat.completed == false)).map((item) => <Todo key ={item.id} item={item}/>);
  return (
    <>
    <Header />
    <Hello  />
    <Tester />
    <h1>All Task</h1>
    {allTask}
    <h1>The task I have completed</h1>
    {done}
    <h1>The task I have not done</h1>
    {undone}
    </>
  );
}

export default App;
