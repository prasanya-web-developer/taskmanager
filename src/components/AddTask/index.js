import {Component} from 'react'
import Header from '../Header'
import AddTaskItem from '../AddTaskItem'
import './index.css'

class AddTask extends Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    taskList: [],
    priorityInput: 'low',
    errorMsg: '',
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
      errorMsg: '',
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

  onAddNewTask = event => {
    event.preventDefault()
    const {nameInput, descriptionInput, taskList, priorityInput} = this.state
    if (nameInput === '') {
      this.setState({
        errorMsg: '*Name is required',
      })
      return
    }
    const newTask = {
      id: taskList.length + 1,
      name: nameInput,
      description: descriptionInput,
      priority: priorityInput,
      completed: false,
    }
    this.setState({
      taskList: [...taskList, newTask],
      nameInput: '',
      descriptionInput: '',
      priorityInput: 'low',
      errorMsg: '',
    })
  }

  onDeleteTask = taskId => {
    const {taskList} = this.state
    const updatedTaskList = taskList.filter(eachTask => eachTask.id !== taskId)
    this.setState({
      taskList: updatedTaskList,
    })
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      taskList,
      priorityInput,
      errorMsg,
    } = this.state

    const nothingToShow = taskList.length <= 0

    return (
      <div className="add-task-container">
        <Header />
        <div className="form-new-task-container">
          <form className="form-container" onSubmit={this.onAddNewTask}>
            <h1 className="add-form-task-heading">Add Tasks</h1>
            <label htmlFor="taskName" className="task-name-label">
              NAME
            </label>
            <input
              type="area"
              placeholder="Enter Task Name"
              id="taskName"
              value={nameInput}
              onChange={this.onChangeNameInput}
              className="input-bar"
            />
            <p className="error-msg">{errorMsg}</p>
            <label htmlFor="priority" className="task-name-label">
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
              placeholder="Enter Task Description"
              id="taskDescription"
              value={descriptionInput}
              onChange={this.onChangeDescriptionInput}
              className="input-bar-name"
              name="description"
              rows="4"
              cols="50"
            />
            <button className="add-button" type="submit">
              Add Task
            </button>
          </form>

          <div className="new-task-container">
            <h1 className="add-new-task-heading">New Tasks</h1>
            {nothingToShow ? (
              <div className="nothing-image-container">
                <img
                  src="https://img.freepik.com/free-vector/curiosity-child-concept-illustration_114360-14309.jpg?w=740&t=st=1701344214~exp=1701344814~hmac=bfbc288fe4a1316c81ed80665a5f2883932ae924590e5b67b4c0b84a3efc7728"
                  alt="nothing to show"
                  className="nothing-image"
                />
                <h1 className="nothing-text">Add Your First Task</h1>
              </div>
            ) : (
              <ul className="new-task-list">
                {taskList.map(eachTask => (
                  <AddTaskItem
                    key={eachTask.id}
                    taskDetails={eachTask}
                    onDelete={this.onDeleteTask}
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

export default AddTask
