import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Singup from '../components/Singup'

export default function SignupPage() {
  return (
   <div className={styles.container}>
        <Header />
        <Singup />
        <Footer />
    </div>
  )
}
