import { useState } from 'react'
import tltData from '../../data/tltData'
import Nav from '../nav/Nav'
import AsideDetails from '../aside/AsideDetails'
import styles from './TLT.module.css'

const TLT = () => {
  const [expandTabs, setExpandTabs] = useState(false)

  return (
    <div>
      <aside className={styles.tlt}>
        <Nav />
        <h1>The Locked Tomb</h1>
        <AsideDetails>
          <p>
            The Locked Tomb (tlt) is a series of sci-fantasy novels written by Tamsyn Muir.
            there are three books currently out:
            Gideon the Ninth, Harrow the Ninth, and Nona the Ninth, plus three short stories.
          </p>
          <p>tlt is a series about necromancers and cavaliers, love and death, and dykes.</p>
          <p>
            since reading and re-reading tlt, i have accumulated some songs that i think are reminiscent of the characters and events of the series.
            most of them are about Gideon and Harrow, because i'm sappy about them.
          </p>
          <p>
            i've put all the lyrics to these songs on this page along with my thoughts on how i view them in relation to the story, in chronological order.
            each song is colour-coded by the character whose perspective i see the song from.
          </p>
          <p>
            unsurprisingly, <b style={{ textDecoration: "underline" }}>
              everything on this page will contain major spoilers for the series.</b>
          </p>
          <p>
            if you haven't yet read tlt, i highly recommend you do before reading any further!
          </p>
          <p>
            use the signpost to skip to the top or bottom of the page.
            click on song titles or the button below to view the lyrics and my notes~
          </p>
        </AsideDetails>
        <button
          className={styles.expandButton}
          onClick={() => setExpandTabs(expand => !expand)}
        >
          { expandTabs ? "Collapse all" : "Expand all" }
        </button>
      </aside>
      <main id="content" className={styles.tlt}>
        <div className={styles.lyricsContainer}>
          {Lyrics(expandTabs)}

          <h1>List of songs</h1>
          <ul className={styles.songList}>
            {tltData.map((lyrics, ind) => <li key={ind}>{`${lyrics.artist} - ${lyrics.song}`}</li>)}
          </ul>
        </div>
      </main>
    </div>
  )
}

const Lyrics = (expandTabs) => {
  let currBookTitle = ''
  let currHeaderTitle = ''
  return tltData.map(lyrics => {
    let bookTitle = <></>;
    let headerTitle = <></>;

    if (currBookTitle != lyrics.book) {
      currBookTitle = lyrics.book;
      bookTitle = <h1 key={currBookTitle}>{currBookTitle} the Ninth</h1>;
    }
    if (currHeaderTitle != lyrics.header) {
      currHeaderTitle = lyrics.header;
      headerTitle = <h2 key={currHeaderTitle}>{currHeaderTitle}</h2>;
    }

    return (
      <>
        {bookTitle}
        {headerTitle}
        {LyricsInfo(lyrics, expandTabs)}
      </>
    )
  })
}

const LyricsInfo = (lyrics, expandTabs) => {
  const title = `${lyrics.song} - ${lyrics.artist}`
  return (
    <details className={styles.lyrics} key={title} open={expandTabs}>
      <summary>{title}</summary>
      <div className={styles.columnContainer}>
        <div>
          <i>lyrics</i>
          <ul style={{ color: getLyricColour(lyrics.perspective) }}>
            {lyrics.lyrics.map((line, ind) => <li key={ind}>{line}</li>)}
          </ul>
        </div>
        <div>
          <i>notes</i>
          <p>{lyrics.desc}</p>
        </div>
      </div>
    </details>
  )
}

const getLyricColour = (perspective) => {
  switch (perspective) {
    case "Gideon":
    case "Kiriona":
      return "var(--gideon-text-color)";
    case "Harrow":
      return "var(--harrow-text-color)";
    case "Pyrrha":
      return "var(--pyrrha-text-color)";
    case "Nona":
    case "Alecto":
      return "var(--alecto-text-color)";
    default:
      return "var(--john-text-color)";
  }
}

export default TLT
