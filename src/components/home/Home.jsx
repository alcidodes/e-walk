import Map from './Map'
import MapAside from './MapAside'
import MapNav from './MapNav'
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <main id="content" className={`${styles.mapContainer} ${styles.darkText}`}>
        <Map />
        <MapNav />
      </main>
      <aside className={`${styles.mapAside} ${styles.darkText}`}>
        <MapAside />
      </aside>
    </>
  )
}

export default Home
