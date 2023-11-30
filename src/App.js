import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import TaskList from './components/TaskList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/task-list" component={TaskList} />
      <Route exact path="/add-task" component={AddTask} />
      <Route exact path="/edit-task" component={EditTask} />
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
