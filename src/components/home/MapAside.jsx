import { Link } from 'react-router'
import { mapImgPath } from '../../constants'

import changelog from '../../data/changelog'

import badge from '../../images/svg/badge.svg'
import miniBrochure from '../../images/svg/miniBrochure.svg'

import Signpost from '../signpost/Signpost'

import styles from './MapAside.module.css'

const MapAside = () => {
  return (
    <>
      <h1>Updates</h1>
      <ul className={styles.changelog}>
        {changelog.map((log, ind) => <li key={ind}><b>{log.date}</b>: {log.desc}</li>)}
      </ul>
        
      <div className={styles.corkboard}>
        <Link className={styles.animatedImg} id={styles.left} to="./kglw"
          style={{ zIndex: 1, alignSelf: "center", rotate: "10deg" }}
        >
          <img src={mapImgPath+"warning-croc.png"} alt="beware of crocodiles" title="beware of crocodiles" />
        </Link>

        <div className={`${styles.animatedImg} ${styles.note}`} id={styles.right}
          style={{ display: "flex", flexDirection: "row", rotate: "-4deg" }}
        >
          <p style={{ marginRight: "1ch" }}>feeling:</p>
          <a href="https://www.imood.com/users/e_walk" target="_blank">
            <img src="https://moods.imood.com/display/uname-e_walk/trans-1/imood.gif" alt="current mood" />
          </a>
        </div>

        <p className={`${styles.animatedImg} ${styles.note}`} id={styles.left}
          style={{ alignSelf: "flex-end", marginTop: "10px", width: "150px", rotate: "2deg" }}
        >
          scroll down for webrings
        </p>

        <Link className={styles.animatedImg} id={styles.left} to="./about"
          style={{ alignSelf: "center", marginTop: "25px", marginLeft: "70px", height: "150px", rotate: "-5deg" }}
        >
          <img src={miniBrochure} alt="a brochure" />
        </Link>

        <Link className={`${styles.animatedImg} ${styles.photo}`} id={styles.left} to="./photos"
          style={{ zIndex: 1, marginTop: "-60px", rotate: "-8deg" }}
        >
          <img src={mapImgPath+"photo.png"} alt="nature photo" />
        </Link>

        <div className={styles.note} id="cdr"
          style={{ alignSelf: "center", marginTop: "10px" }}
        >
          <p>cd ring</p>
          {/* <script type="text/javascript" src="https://cdring.neocities.org/cdring/onionring-variables.js"></script>
          <script type="text/javascript" src="https://cdring.neocities.org/cdring/onionring-widget.js"></script> */}
        </div>

        <Signpost style={{ width: "35px" }}>
          <div id="kglw-webring">
            <p>kglw webring</p>
            {/* <script type="text/javascript" src="https://kglw.neocities.org/onionring-variables.js"></script>
            <script type="text/javascript" src="https://kglw.neocities.org/onionring-widget.js"></script> */}
          </div>

          <div>
            <a href="https://baccyflap.com/noai/?prv&s=ewa" target="_top">prev</a><p>|</p>
            <div>
              <a href="https://baccyflap.com/noai" target="_blank">no ai webring</a>
              <a href="https://baccyflap.com/noai/?rnd" target="_top" style={{ fontSize: "80%" }}>(random)</a>
            </div>
            <p>|</p><a href="https://baccyflap.com/noai/?nxt&s=ewa" target="_top">next</a>
          </div>
        </Signpost>
      </div>
    </>
  )
}

export default MapAside
