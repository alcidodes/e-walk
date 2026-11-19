import Map from './Map'
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
        <p>aside here</p>
        <p>and here</p>
      </aside>
    </>
  )
}

export default Home
