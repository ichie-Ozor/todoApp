import React, { useState } from 'react'
import check from './images/icon-check.svg'

function TodoInput({day}) {
   const [todo, setTodo] = useState('')
   const [ischeck, setIscheck ] = useState(false)
   const [todoList, setTodoList ] = useState([])

const onClickHandler = (e) => {
    if(todo !== ""){
      setTodoList((prev) => [...prev, todo])
      setTodo('')
  }
 }
// console.log(todoList)
const checkHandler = () => setIscheck(!ischeck)


const render = todoList.map((todoItem, index) => {
  console.log(todoItem)
  return (
  <div 
  className={day ? 'input-light1' : 'input-dark1'} 
  key={`${todoItem}_${index}`}
  >
    <p className='input-light'>
    {todoItem}
    </p>
  </div>
  )
})
// console.log(render, "render")
  return (
    <div>
        <div className={day ? 'input-light' : 'input-dark'}>
          <div className={day? 'checkbox' : 'checkbox1'} onClick={checkHandler}>
            <img src={check} alt='' className={ischeck ? 'active' : 'inactive'} />
          </div>

          <input 
          type='text' 
          placeholder='Create a new todo' 
          className={day? 'light-input' : 'dark-input'} 
          name='todo'
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          />

          <button onClick={onClickHandler} className='click'>
            click
          </button>
        </div>

        <div className='render'>{render}</div>
    </div>
  )
}

export default TodoInput
