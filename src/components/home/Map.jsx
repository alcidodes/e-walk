import { Link } from 'react-router'
import { mapImgPath, mapIconPath } from '../../constants'
import pageData from '../../data/pageData'
import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.map}>
      <img src={mapImgPath + "map.png"} alt="" />
      {pageData.map(page => MapLink(page))}
    </div>
  )
}

const MapLink = ({ path, icon, alt, pos }) => {
  return (
    <Link to={path} key={alt}>
      <img src={mapIconPath + icon}
        style={{ left: pos.left+'px', top: pos.top+'px' }}
        alt={alt} title={alt}
      />
    </Link>
  )
}

export default Map
