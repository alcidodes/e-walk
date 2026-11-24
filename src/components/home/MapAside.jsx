import { useEffect } from 'react'
import { Link } from 'react-router'
import { mapImgPath } from '../../constants'

import changelog from '../../data/changelog'

import miniBrochure from '../../images/svg/miniBrochure.svg'
import powerLine from '../../images/svg/powerLine.svg'

import styles from './MapAside.module.css'

const webringScripts = [
  // "https://cdring.neocities.org/cdring/onionring-variables.js",
  // "https://cdring.neocities.org/cdring/onionring-widget.js",
  "https://kglw.neocities.org/onionring-variables.js",
  "https://kglw.neocities.org/onionring-widget.js"
]

const MapAside = () => {
  webringScripts.forEach(url => LoadExternalScript(url))

  return (
    <>
      <h1>Updates</h1>
      <ul className={styles.changelog}>
        {changelog.map((log, ind) => <li key={ind}><b>{log.date}</b>: {log.desc}</li>)}
      </ul>
        
      <div className={styles.corkboard}>
        <Link className={styles.animatedImg} id={styles.left} to="./kglw"
          style={{ zIndex: 1, alignSelf: "center", rotate: "10deg", boxShadow: "none" }}
        >
          <img src={mapImgPath+"warning-croc.png"} alt="beware of crocodiles" title="beware of crocodiles" />
        </Link>

        <div className={`${styles.animatedImg} ${styles.note}`} id={styles.right}
          style={{ rotate: "-4deg" }}
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

        <img className={styles.animatedImg} id={styles.left}
          src={powerLine} alt="electronic trail logo"
          style={{ alignSelf: "flex-end", marginTop: "-40px", width: "90px", borderRadius: "60px" }}
        />

        <div className={`${styles.note} ${styles.cdr}`} id="cdr"
          style={{ alignSelf: "center", marginTop: "10px" }}
        >
          <div>
            <div>
              <p>This site is part of the <strong><a href="https://cdring.neocities.org/">CDRing</a></strong></p>
              <div className={styles.cdrNav}>
                <a className={styles.cdrPrev} href="https://cyanweb.neocities.org">&lt; Prev</a>
                <a href="https://cdring.neocities.org/">
                  <img className={styles.cdrBadge} src="https://cdring.neocities.org/ringcdimages/kgatlw2.jpg" alt="CDRing badge"/>
                </a>
                <a className={styles.cdrNext} href="https://rawrpawz1.neocities.org">Next &gt;</a>
              </div>
              <p><a href="https://cdring.neocities.org/">Index</a></p>
            </div>
          </div>
        </div>

        <div className={`${styles.note} ${styles.kglw}`} id="kglw-webring"
          style={{ marginTop: "10px" }}
        />

        <div className={styles.note}
          style={{ textAlign: "center", alignSelf: "center", marginTop: "10px" }}
        >
          <a href="https://baccyflap.com/noai/?prv&s=ewa" target="_top">prev</a>
          <div>
            <a href="https://baccyflap.com/noai" target="_blank">no ai webring</a>
            <a href="https://baccyflap.com/noai/?rnd" target="_top" style={{ fontSize: "80%" }}>(random)</a>
          </div>
          <a href="https://baccyflap.com/noai/?nxt&s=ewa" target="_top">next</a>
        </div>
      </div>
    </>
  )
}

const LoadExternalScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script')
  
    script.src = url
    script.async = true
  
    document.body.appendChild(script)
      
    return (() => { document.body.removeChild(script) })
  }, []);
}

export default MapAside
