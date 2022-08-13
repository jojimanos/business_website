import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Contact_footer from './components/contact'
import Copyright from './components/copyright'
import Navbar from './components/navbar'

function MyApp({ Component, pageProps }) {
  return <div className={styles.someCSSModulesClass}>
    <Navbar/>
    <Component {...pageProps} />
    <Contact_footer/>
    <Copyright/>
    </div> 
}

export default MyApp
