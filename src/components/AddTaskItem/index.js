import './index.css'

const AddTaskItem = props => {
  const {taskDetails} = props
  const {id, name, description, priority} = taskDetails
  const onClickDelete = () => {
    const {onDelete} = props
    if (onDelete) {
      onDelete(id)
    }
  }

  return (
    <li className="task-list-li">
      <div className="list-of-task-container">
        <h1 className="name">{name}</h1>
        <p className="priority">Priority: {priority}</p>
        <p className="description">Description: {description}</p>
      </div>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          src="https://img.freepik.com/premium-vector/trash-icon-vector-glyph_858082-246.jpg?w=740"
          alt="delete icon"
          className="delete-icon-image"
        />
      </button>
    </li>
  )
}

export default AddTaskItem
