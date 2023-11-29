import React, { useState } from 'react'
import check from './images/icon-check.svg'

function TodoInput({props}) {
   const [todo, setTodo] = useState('')
   const [ischeck, setIscheck ] = useState(false)
   const [todoList, setTodoList ] = useState([])

const onClickHandler = (e) => {
    e.preventDefault()
    if(todo !== ""){
    setTodoList((prev) =>{
      return [...prev, todo]
      // return [...prev, {todo: e.target.value}]
    })
  } else {
    return
  }
    setTodo('')
  // setTodoList(...todo, todo)
 }
 console.log(todoList)
const checkHandler = (e) => {
  e.preventDefault()
  if(!ischeck){
    setIscheck(true)
  } else {
    setIscheck(false)
  }
}
console.log(todoList)
const render = todoList.map((todoItem, index) => {
  console.log(todoItem)
  return <div className={props ? 'input-light' : 'input-dark'} key={index}>{todoItem}</div>
  
})
console.log(render, "render")
  return (
    <div>
        <div className={props ? 'input-light' : 'input-dark'}>
          <div className={props? 'checkbox' : 'checkbox1'} onClick={checkHandler}>
            <img src={check} alt='' className={ischeck ? 'active' : 'inactive'} />
          </div>
          <input type='text' placeholder='Create a new todo' 
          className={props? 'light-input' : 'dark-input'} 
          name='todo' value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
          />
          <button onClick={onClickHandler} className='click'>click</button>
        </div>
        <div className='render'>{render}</div>
    </div>
  )
}

export default TodoInput
