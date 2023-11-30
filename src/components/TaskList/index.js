import {Component} from 'react'
import Header from '../Header'
import './index.css'

class TaskList extends Component {
  state = {
    taskList: [],
    saveNotification: '',
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

  onClickCheckBox = taskId => {
    const {taskList} = this.state

    const updatedList = taskList.map(task =>
      task.id === taskId
        ? {
            ...task,
            isChecked: !task.isChecked,
            status: !task.isChecked ? 'Completed' : 'Pending',
          }
        : task,
    )

    this.setState({
      taskList: updatedList,
    })
  }

  onDeleteTask = taskId => {
    const {taskList} = this.state

    const updatedList = taskList.filter(task => task.id !== taskId)

    this.setState({
      taskList: updatedList,
    })
  }

  onSave = () => {
    const {taskList} = this.state
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }

  onSave = () => {
    const {taskList} = this.state
    localStorage.setItem('taskList', JSON.stringify(taskList))

    this.setState({
      saveNotification: 'Tasks saved successfully!',
    })
    setTimeout(() => {
      this.setState({
        saveNotification: '',
      })
    }, 6000)
  }

  render() {
    const {taskList, saveNotification} = this.state
    const buttonVisibility = taskList.length > 0

    return (
      <>
        <Header />
        <div className="main-container">
          <div className="task-list-container-responsive">
            <h1 className="heading">Task Manager</h1>
            <ul className="unordered-list">
              {taskList.map(task => (
                <li key={task.id} className="task-manager-list-text">
                  <div className="checkbox-label-container">
                    <div className="arrange-container">
                      <input
                        id={`checkBox${task.id}`}
                        type="checkbox"
                        checked={task.isChecked}
                        onChange={() => this.onClickCheckBox(task.id)}
                        className="check-box-input"
                      />
                      <div className="color-container">
                        <label
                          htmlFor={`checkBox${task.id}`}
                          className={
                            task.isChecked ? 'strikethrough' : 'normal'
                          }
                        >
                          {task.name}
                        </label>
                        <button
                          type="button"
                          onClick={() => this.onDeleteTask(task.id)}
                          className="list-delete-button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="status-container">
                      Status:
                      <span className="Status">
                        {task.isChecked ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
              {buttonVisibility ? (
                <div className="saved-container">
                  <button
                    className="save-task-button"
                    onClick={this.onSave}
                    type="button"
                  >
                    Save
                  </button>
                  <p className="save-notification">{saveNotification}</p>
                </div>
              ) : (
                <p className="caption">
                  Start your productivity journey. Add a task now.
                </p>
              )}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default TaskList
