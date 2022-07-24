import styles from '../../styles/components/layout.module.css'
import Nav from './Nav.js'
const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Nav />
            <main> 
                {props.children} </main> 
            <footer className={styles.footer}>
          Made by <span className={styles.ellie}> Elliot & Ellie </span> 
      </footer>
        </div>




    )
}

export default Layout
