import './index.css'

const EditTaskItem = props => {
  const {onEdit, editedTaskDetails} = props
  const {id, name, description, priority} = editedTaskDetails

  const handleEditClick = () => {
    onEdit(id)
  }

  return (
    <li className="task-list-li">
      <div className="list-of-task-container">
        <h1 className="name">{name}</h1>
        <p className="priority">Priority: {priority}</p>
        <p className="description">{description}</p>
      </div>
      <button type="button" className="edit-button" onClick={handleEditClick}>
        <img
          src="https://img.freepik.com/premium-vector/edit-text-icon-pencil-icon-sign-up-icon-pen-ballpoint-with-square-box-vector-illustration_399089-2806.jpg?w=740"
          alt="edit"
          className="edit-icon"
        />
      </button>
    </li>
  )
}

export default EditTaskItem
