import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="inside-container">
        <div className="content-container">
          <h1 className="task-managing-heading">Task Managing</h1>
          <p className="task-managing-content">
            Effective task management is crucial for success, providing
            structure, focus, and stress reduction. It ensures tasks are
            organized, prioritized, and deadlines are met. By breaking down
            goals into manageable steps, individuals enhance productivity and
            accountability. Task management brings order, efficiency, and a
            sense of accomplishment to personal and professional endeavors.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/kanban-method-concept-illustration_114360-13016.jpg?w=740&t=st=1701260988~exp=1701261588~hmac=283b85137f33e0656645f08a9a28a734c893a192605fe0aa7c37c8e689833b93"
          alt="task manager"
          className="task-managing-image"
        />
      </div>
    </div>
  </>
)

export default Home
