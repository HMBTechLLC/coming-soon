import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-hmb.svg" alt="HMB Logo" className={styles.logo} />
      </footer>
    </>
  )
}
