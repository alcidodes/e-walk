import { bugImgPath } from '../../constants'
import bugData from '../../data/bugData'
import Nav from '../nav/Nav'
import AsideDetails from '../aside/AsideDetails'
import LoadedImage from '../image/LoadedImage'
import styles from './Bugs.module.css'

const Bugs = () => {
  return (
    <>
      <aside>
        <Nav />
        <h1>Welcome to the bug gallery</h1>
        <p>these guys were drawn by me using coloured pencil</p>
        <AsideDetails>
          <p>beetles are insects in the order coleoptera</p>
          <p>they the largest order of insects and make up 25% of all known animal species</p>
          <p>they play important roles in their ecosystem as pollinators, decomposers, and food sources</p>
          <p>i love beetles, they vary so widely in form and colour that i never get bored of drawing them</p>
        </AsideDetails>
      </aside>
      <main id="content" className={styles.bugContainer}>
        {bugData.map(bug => Bug(bug))}
      </main>
    </>
  )
}

const Bug = (bug) => {
  return (
    <div className={styles.figureBorder} key={bug.id}>
      <figure>
        <LoadedImage
          className={styles.figureImg}
          src={`${bugImgPath}${bug.id}-${bug.name.replace(' ', '-')}.png`}
          alt={bug.name}
        />
        <figcaption><i>{bug.name}</i></figcaption>
      </figure>
    </div>
  )
}

export default Bugs
