import { Link } from 'react-router'
import { mapImgPath, mapIconPath } from '../../constants'
import pageData from '../../data/pageData'
import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.map}>
      <img src={mapImgPath + "map.png"} alt="" />
      <h1 className={styles.titleText} style={{ top: "10px", left: "1ch" }}>Welcome to the</h1>
      <h1 className={styles.titleText} style={{ top: "40px", left: "3ch" }}>electronic trail</h1>
      {pageData.map(page => MapLink(page))}
    </div>
  )
}

const MapLink = ({ path, icon, name, pos }) => {
  return (
    <Link to={path} key={name} style={{ left: pos.left+'px', top: pos.top+'px' }}>
      <img src={mapIconPath + icon}
        
        alt={name} title={name}
      />
    </Link>
  )
}

export default Map
