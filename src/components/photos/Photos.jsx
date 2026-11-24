import { photoImgPath } from '../../constants'
import photoData from '../../data/photoData'
import Nav from '../nav/Nav'
// import AsideDetails from '../aside/AsideDetails'
import LoadedImage from '../image/LoadedImage'
import styles from './Photos.module.css'

const Photos = () => {
  return (
    <div>
      <aside>
        <Nav />
        <h1>Welcome to the photo gallery</h1>
        <p>these where taken by me using my phone</p>
      </aside>
      <main id="content" className={styles.photoContainer}>
        {photoData.map(photo => Photo(photo))}
      </main>
    </div>
  )
}

const Photo = (photo) => {
  return (
    <figure key={photo.id}>
      <LoadedImage
        className={styles.figureImg}
        src={`${photoImgPath}${photo.id}.jpg`}
        alt={`a photo taken on ${photo.id}`}
      />
      <figcaption><i>{photo.id}</i></figcaption>
    </figure>
  )
}

export default Photos
