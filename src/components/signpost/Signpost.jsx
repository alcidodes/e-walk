import styles from './Signpost.module.css'

const Signpost = ({ style, children }) => {
  return (
    <div className={styles.signpost} style={style}>
      {children}
    </div>
  )
}

export default Signpost
