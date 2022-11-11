import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from './components/banner'
import Help from './components/help'
import Short_intro from './components/short_intro'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content="Έφη Αμπατζόγλου, Ψυχολόγος, CBT, Ψυχοθεραπεία, psycologos, ampatzoglou," />
        <title>Ψυχολόγος-Έφη Αμπατζόγλου</title>
        <meta name="description" content="Παροχή είδικών Ψυχοθεραπευτικών Υπηρεσιών από την ψυχολόγο Αμπατζόγλου Έφη σε χαμηλές τιμές." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className='bg-gradient-to-b from-pink-100 to-white p-4 sm:p-10'>
        <Banner/>
        <div className='p-2'>
        <Short_intro/>
        </div>
      </div>
      <Help/>
      </main>
    </div>
  )
}
