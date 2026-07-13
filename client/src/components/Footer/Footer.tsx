import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.inner}`}>
        <nav className={style.links}>
          <a href="https://github.com/dtcoops" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dcooper-15895/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dtcooper@sfu.ca">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export { Footer }