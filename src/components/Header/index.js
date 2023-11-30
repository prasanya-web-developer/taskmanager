import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <Link to="/" className="logo-heading-link">
        <h1 className="logo-heading">ACT</h1>
      </Link>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpOw9zrxiazfSNFetIJcU9HJK6UtkdBxhfjBrky656Hd06kbuV4SKnYbAuhN8Ed_2-To&usqp=CAU"
        alt="logo"
        className="logo-image"
      />
    </div>
    <ul className="header-list">
      <li className="route-item">
        <Link to="/" className="list-item">
          <p className="home-text">Home</p>
        </Link>
      </li>
      <li className="route-item">
        <Link to="/task-list" className="list-item">
          <p className="home-text">Task List</p>
        </Link>
      </li>
      <li className="route-item">
        <Link to="/add-task" className="list-item">
          <p className="home-text">Add Task</p>
        </Link>
      </li>
      <li className="route-item">
        <Link to="/edit-task" className="list-item">
          <p className="home-text">Edit Task</p>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
