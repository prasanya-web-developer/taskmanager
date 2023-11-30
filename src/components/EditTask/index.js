import {Component} from 'react'
import Header from '../Header'
import EditTaskItem from '../EditTaskItem'
import './index.css'

class EditTask extends Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    taskList: [],
    priorityInput: 'low',
    editingTaskId: null,
  }

  componentDidMount() {
    const storedTasks = localStorage.getItem('taskList')
    if (storedTasks) {
      this.setState({taskList: JSON.parse(storedTasks)})
    }
  }

  componentDidUpdate() {
    const {taskList} = this.state
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onChangeDescriptionInput = event => {
    this.setState({
      descriptionInput: event.target.value,
    })
  }

  onChangePriorityInput = event => {
    this.setState({
      priorityInput: event.target.value,
    })
  }

  onSubmitEditedTask = event => {
    event.preventDefault()
  }

  onEditTask = taskId => {
    const {taskList} = this.state
    const taskToEdit = taskList.find(task => task.id === taskId)

    if (taskToEdit) {
      this.setState({
        nameInput: taskToEdit.name,
        descriptionInput: taskToEdit.description,
        priorityInput: taskToEdit.priority,
        editingTaskId: taskId,
      })
    }
  }

  onUpdateTask = () => {
    const {
      taskList,
      editingTaskId,
      nameInput,
      descriptionInput,
      priorityInput,
    } = this.state

    if (editingTaskId !== null) {
      const updatedList = taskList.map(task =>
        task.id === editingTaskId
          ? {
              ...task,
              name: nameInput,
              description: descriptionInput,
              priority: priorityInput,
            }
          : task,
      )

      this.setState({
        taskList: updatedList,
        editingTaskId: null,
      })
    }
  }

  render() {
    const {nameInput, descriptionInput, taskList, priorityInput} = this.state
    const noEditTask = taskList.length <= 0

    return (
      <div className="task-container">
        <Header />
        <div className="form-new-task-container">
          <form className="form-container" onSubmit={this.onSubmitEditedTask}>
            <h1 className="add-form-task-heading">Manage Editing</h1>
            <label htmlFor="taskName" className="task-name-label">
              NAME
            </label>
            <input
              type="text"
              placeholder="Enter Task Name"
              id="taskName"
              value={nameInput}
              onChange={this.onChangeNameInput}
              className="input-bar"
            />

            <label htmlFor="priority" className="priority-label">
              PRIORITY
            </label>
            <select
              id="priority"
              value={priorityInput}
              onChange={this.onChangePriorityInput}
              className="input-bar"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <label htmlFor="taskDescription" className="task-name-label-des">
              DESCRIPTION
            </label>
            <textarea
              type="text"
              placeholder="Enter Task Description"
              id="taskDescription"
              value={descriptionInput}
              onChange={this.onChangeDescriptionInput}
              rows="4"
              cols="50"
              className="input-bar-name"
            />
            <button
              className="add-button"
              type="button"
              onClick={this.onUpdateTask}
            >
              Edit Task
            </button>
          </form>
          <div className="new-task-container">
            <h1 className="add-new-task-heading">Edited Tasks</h1>
            {noEditTask ? (
              <div className="no-edit-task-image-container">
                <img
                  src="https://img.freepik.com/free-vector/editing-body-text-concept-illustration_114360-5671.jpg?w=740&t=st=1701346017~exp=1701346617~hmac=d68e10fef1f340b798718f6269c16f3bf9827a873266e0fdc89ea87136537071"
                  alt="no edited task"
                  className="no-edited-image"
                />
                <h1 className="start-edit">Start Editing Your Task</h1>
              </div>
            ) : (
              <ul className="adding-task-list">
                {taskList.map(eachTask => (
                  <EditTaskItem
                    key={eachTask.id}
                    editedTaskDetails={eachTask}
                    onEdit={this.onEditTask}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditTask
