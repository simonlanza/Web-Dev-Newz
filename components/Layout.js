import Header from './Header'
import Meta from './Meta'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.conteiner}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout