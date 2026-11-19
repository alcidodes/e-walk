import { Link } from 'react-router'
import { useState } from 'react'
import { mapIconPath } from '../../constants'
import pageData from '../../data/pageData'
import styles from './MapNav.module.css'

const MapNav = () => {
  const [showNav, setShowNav] = useState(0)

  return (
    <div className={styles.mapNav} style={showNav ? { left: 0 } : {}}>
      <div className={styles.legend}>
        <h2>Legend</h2>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="./lostwheretheforestwouldgrow.html">
              <img src={mapIconPath + "parkland.png"} alt="parkland" />parkland
            </Link>
          </li>
          <li><div><img src={mapIconPath + "waterways.png"} />waterways</div></li>
          <li><div><img src={mapIconPath + "sealed-road.png"} />sealed road</div></li>
          <li><div><img src={mapIconPath + "walking-track.png"} />walking track</div></li>
          {pageData.map(page => MapNavLink(page))}
        </ul>
      </div>
      <button onClick={() => setShowNav(!showNav)}>{showNav ? "<" : ">"}</button>
    </div>
  )
}

const MapNavLink = ({ path, icon, alt }) => {
  return (
    <li key={alt}>
      <Link to={path}>
        <img src={mapIconPath + icon} alt={alt} />{alt}
      </Link>
    </li>
  )
}

export default MapNav
