import styles from './AsideDetails.module.css'

const AsideDetails = ({ children }) => {
  return (
    <div className={styles.asideDetails}>
      {children}
    </div>
  )
}

export default AsideDetails
