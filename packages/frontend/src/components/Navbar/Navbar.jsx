import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.links}>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/'
          >
            Home Page
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/task'
          >
            Task
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/create'
          >
            Create Task
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
