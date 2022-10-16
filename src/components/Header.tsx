import styles from './Header.module.css'
import imgLogo from "../assets/logo.svg"

export function Header() {
  return (
        <div className={styles.container}>
            <img src={imgLogo} alt="Logo" />
        </div>
  )
}
