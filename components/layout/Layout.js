import styles from '../../styles/components/layout.module.css'
import Nav from './Nav.js'
const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Nav />
            <main> 
                {props.children} </main> 
        </div>
    )
}

export default Layout
