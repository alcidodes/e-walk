import { Link } from 'react-router'
import { mapIconPath } from '../../constants'
import pageData from '../../data/pageData'
import styles from './MapNav.module.css'

const MapNav = () => {
  return (
    <div className={styles.mapNav}>
      <div className={styles.legend}>
        <h2>Legend</h2>
        <ul>
          <MapNavLink path="./lostwheretheforestwouldgrow" icon="parkland.png"
            name="parkland" style={{ textDecoration: "none" }}
          />
          <MapNavDiv icon="waterways.png" name="waterways" />
          <MapNavDiv icon="sealed-road.png" name="sealed road" />
          <MapNavDiv icon="walking-track.png" name="walking track" />
          {/* <li><div><img src={mapIconPath + "waterways.png"} alt="" />waterways</div></li>
          <li><div><img src={mapIconPath + "sealed-road.png"} alt="" />sealed road</div></li>
          <li><div><img src={mapIconPath + "walking-track.png"} alt="" />walking track</div></li> */}
          {pageData.map(page => MapNavLink(page))}
        </ul>
      </div>
      <div className={styles.warnings}>
        <ul>
          <MapNavDiv icon="warning.png" name="Warning" />
          <MapNavDiv icon="phone.png" name="not recommended for mobile viewing" />
          <MapNavDiv icon="js.png" name="ensure javascript is enabled" />
          {/* <li><div><img src={mapIconPath + "warning.png"} alt="" /><h2>Warning</h2></div></li>
          <li><div><img src={mapIconPath + "phone.png"} alt="" />not recommended for mobile viewing</div></li>
          <li><div><img src={mapIconPath + "js.png"} alt="" />ensure javascript is enabled</div></li> */}
          <MapNavLink path="./bug_spray" icon="bug.png"
            name="insect repellent recommended" style={{ textDecoration: "none" }}
          />
        </ul>
      </div>
    </div>
  )
}

const MapNavLink = ({ path, icon, name, style }) => {
  return (
    <li key={name}>
      <Link to={path} style={style}>
        <img src={mapIconPath + icon} alt="" />{name}
      </Link>
    </li>
  )
}

const MapNavDiv = ({ icon, name }) => {
  return (
    <li key={name}>
      <div>
        <img src={mapIconPath + icon} alt="" />{name}
      </div>
    </li>
  )
}

export default MapNav
