import { Link } from 'react-router'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.compactNav}>
      <p>e-walk</p>
      <Link to="/">home</Link>
      <Link to="/about">info</Link>
    </nav>
  )
}

export default Nav
