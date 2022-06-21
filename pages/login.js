import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

export default function LoginPage() {
  return (
   <div className={styles.container}>
        <Header />
        <Login />
        <Footer />
    </div>
  )
}
