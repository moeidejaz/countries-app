import React from 'react'
import styles from'../css/footer.module.css'

const Footer = () => {
  return (
    <footer>
  <div>
    <a href="https://github.com/moeidejaz" target="_blank" title="GitHub" className={`${styles.icon} ${styles.github}`}><i className="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/moeidejaz" target="_blank" title="LinkedIn" className={`${styles.icon} ${styles.linkedin}`}><i className="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/moeidejaz" target="_blank" title="Twitter" className={`${styles.icon} ${styles.twitter}`}><i className="fab fa-twitter"></i></a>
  </div>
</footer>

  
  )
}

export default Footer