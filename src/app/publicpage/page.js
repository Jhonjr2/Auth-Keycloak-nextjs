import React from 'react'
import styles from "../page.module.css";


const PublicPage = () => {
  return (
    <div className={styles.container}>
        <h1>PublicPage</h1>
        <br/>
        <h4>This is a public page, you can find information about using keycloak.</h4>
    </div>
  )
}

export default PublicPage