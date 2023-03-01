import {useState} from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {_id: '123', title: 'Buy a house', editing: false},
    {_id: '234', title: 'Get transfer to Miami campus', editing: true},
    {_id: '345', title: 'Get boat', editing: false},
  ])
  const [newTodo, setNewTodo] = useState({title: 'New Todo', _id: '543'})
  const onAddTodo = () => {
    newTodo._id = Date.now() + ''
    const newTodos = [
      ...todos,
      newTodo
    ]
    setTodos(newTodos)
  }
  const onEditTodo = (todoToEdit) => {
    // alert('edit todo' + todoToEdit._id)
    console.log(todoToEdit)
    todoToEdit.editing = !todoToEdit.editing

    const newTodos = todos.map((todo) => {
      if(todo._id === todoToEdit._id) {
        return todoToEdit
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }
  const onDeleteTodo = (todoToDelete) => {
    // alert('delete todo ' + todoToDelete._id)
    const newTodos = todos.filter(todo => todo._id !== todoToDelete._id)
    setTodos(newTodos)
  }
  const onTodoTitleChange = (event) => {
    // console.log(event.target.value)
    // const newTodoObject = {
    //   title: event.target.value,
    //   _id: Date.now() + ''
    // }
    // console.log(newTodoObject)
    setNewTodo({title: event.target.value})
  }
  const updateTodo = (event, todoBeingEdited) => {
    const newText = event.target.value
    console.log(newText)
    const updatedTodo = {
      ...todoBeingEdited,
      title: newText
    }
    const newTodos = todos.map((todo) => {
      if(todo._id === updatedTodo._id) {
        return updatedTodo
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }
  return(
    <div className="container">
      <h1>Todo List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={onAddTodo}
            className="btn btn-primary float-end">
            Add
          </button>
          <input
            onChange={onTodoTitleChange}
            value={newTodo.title}
            className="form-control w-75"/>
        </li>
        {
          todos.map(todo =>
            <TodoItem
              todo={todo}
              updateTodo={updateTodo}
              onDeleteTodo={onDeleteTodo}
              onEditTodo={onEditTodo}/>
          )
        }
      </ul>
    </div>
  )
}