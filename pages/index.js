import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();
  const [ flag, setFlag ] = useState(true);

//  const token = localStorage.getItem('token')

  //console.log(token)

  useEffect(()=>{
    if(router.isReady) {
      console.log(router.query.user)
      if(router.query.user){
        setFlag(false)
      }  
    }   
  },[router.query, router])

  return (
    <div className={styles.container}>
        <Layout title='Home'> 
          {flag ? <h1>ようこそ、ゲストさん</h1> : <h1>ようこそ、{router.query.user}さん</h1>}
        </Layout>
    </div>
  )
}
