import { Link } from 'react-router'
import { albumImgPath } from '../../constants'
import musicData from '../../data/musicData'
import styles from './Music.module.css'

// git test

const Music = () => {
  return (
    <>
      <aside>
        <nav><Link to="/">&lt;- home</Link></nav>
        <h1>Welcome to the album gallery</h1>
        <p>here are some albums and soundtracks i love and recommend!</p>
      </aside>
      <main id="content">
        <div>
          {musicData.map(album => AlbumInfo(album))}
        </div>
      </main>
    </>
  )
}

const AlbumInfo = (album) => {
  return (
    <div className={styles.albumContainer} key={album.id}>
      <img className={styles.albumImg} src={`${albumImgPath}${album.id}-Cover-Art.jpg`}/>
      <div className={styles.albumText}>
        <p>
          ★ {album.album} ({album.year})<br/>
          {album.artist}<br/>
          {album.genre}
        </p>
        <div>
          <p>fav tracks:</p>
          <ol>{album.favTracks.map((track, ind) => <li key={`${track}-${ind}`}>{track}</li>)}</ol>
        </div>
        <p>
          notes:<br/>
          {album.notes}
        </p>
      </div>
    </div>
  )
}

export default Music
