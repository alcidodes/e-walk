import { albumImgPath } from '../../constants'
import musicData from '../../data/musicData'
import currentlyListening from '../../data/currentlyListening'
import Nav from '../nav/Nav'
import AsideDetails from '../aside/AsideDetails'
import LoadedImage from '../image/LoadedImage'
import styles from './Music.module.css'

const toAlbumImgPath = (id) => `${albumImgPath}${id}-Cover-Art.jpg`

const Music = () => {
  return (
    <>
      <aside>
        <Nav />
        <h1>Welcome to the album gallery</h1>
        <p>here are some albums and soundtracks i love and recommend</p>
        <AsideDetails>
          <CurrentlyListening />
          <AlbumStats />
        </AsideDetails>
      </aside>
      <main id="content">
        {musicData.map(album => AlbumInfo(album))}
      </main>
    </>
  )
}

const AlbumInfo = (album) => {
  return (
    <div className={styles.albumContainer} key={album.id}>
      {/* <img className={styles.albumImg} src={toAlbumImgPath(album.id)}/> */}
      <LoadedImage
        className={styles.albumImg}
        src={toAlbumImgPath(album.id)}
        alt={album.album}
      />
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

// const AlbumRec = () => {
//   const randInt = Math.floor(Math.random() * musicData.length)
//   console.log(randInt)
//   const a = musicData[randInt]
//   if (!a) return
//   return (
//     <>
//       <p>★ today's rec</p>
//       <div className={styles.miniAlbumContainer}>
//         <img
//           src={toAlbumImgPath(a.id)}
//           alt={a.album} title={a.album}
//         />
//       </div>
//     </>
//   )
// }

const CurrentlyListening = () => {
  return (
    <>
      <p>★ currently listening to...</p>
      <div className={styles.miniAlbumContainer}>
        {currentlyListening.map(a => 
          <LoadedImage
            key={a.id}
            className={styles.miniAlbumImg}
            src={toAlbumImgPath(a.id)}
            alt={a.album} title={a.album}
          />
        )}
      </div>
    </>
  )
}

const AlbumStats = () => {
  const [albumArtists, albumGenres, albumYears] = [{},{},{}]
  musicData.forEach(a => {
    albumArtists[a.artist] = (albumArtists[a.artist] != null ? albumArtists[a.artist] : 0) + 1
    albumGenres[a.genre] = (albumGenres[a.genre] != null ? albumGenres[a.genre] : 0) + 1
    albumYears[a.year] = (albumYears[a.year] != null ? albumYears[a.year] : 0) + 1
  })
  return (
    <div className={styles.stats}>
      <p>★ stats</p>
      <p>total albums: {musicData.length}</p>
      <p>top artists:</p>
      <CountedStat obj={albumArtists} num={5} />
      <p>top genres:</p>
      <CountedStat obj={albumGenres} num={5} />
      <p>top years:</p>
      <CountedStat obj={albumYears} num={5} />
    </div>
  )
}

const CountedStat = ({obj, num}) => {
  const sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, num)
  if (!sortedObj) return <></>
  const maxVal = sortedObj[0][1]
  return (
    <table>
      <tbody>
        {sortedObj.map(el => 
          <tr key={`stat-${el[0]}`}>
            <td>{(el[0] == "King Gizzard & The Lizard Wizard" ? "KGLW" : el[0])}</td>
            <td>
              <div
                className={styles.bar}
                style={{ width: Math.floor(el[1] / maxVal * 100)+'%' }}
                title={`(${el[1]})`}
              />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Music
