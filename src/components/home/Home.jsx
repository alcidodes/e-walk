import Map from './Map'
import MapAside from './MapAside'
import MapNav from './MapNav'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.darkText}>
      <main id="content" className={styles.mapContainer}>
        <Map />
        <MapNav />
      </main>
      <aside className={styles.mapAside}>
        <MapAside />
      </aside>
    </div>
  )
}

export default Home
