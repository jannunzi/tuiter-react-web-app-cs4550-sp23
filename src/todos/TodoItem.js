export default function TodoItem(
  {
    todo,
    onDeleteTodo,
    onEditTodo,
    updateTodo
  }) {
  return(
    <li key={todo._id} className="list-group-item">
      <button
        onClick={() => onDeleteTodo(todo)}
        className="btn btn-danger float-end">
        Delete
      </button>
      <button
        onClick={() => onEditTodo(todo)}
        className="btn btn-warning float-end">
        {todo.editing ? 'Ok' : 'Edit'}
      </button>
      {
        todo.editing &&
        <input
          onChange={(event) => updateTodo(event, todo)}
          value={todo.title}
          className="form-control w-75"/>
      }
      {
        !todo.editing &&
        <span>{todo.title}</span>
      }
    </li>
  )
}