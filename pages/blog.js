import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog   from '../components/Blog'

import { getPostsData } from '../lib/posts'


export async function getStaticProps() {

  const allPostsData =  await getPostsData();
  console.log(allPostsData)

  const isClient = () => typeof window !== 'undefined'
  const isServer = () => typeof window === 'undefined'

//    const allPostsData = {"test": "test"}
  if (isClient) {
      console.log('クライアントサイドで実行')
  }
  if (isServer) {
      console.log('サーバサイドで実行')
  }

  return {
      props: {
          allPostsData
      }
  }
}

export default function BlogPage({allPostsData}) {
  
  return (
  <div className={styles.container}>
      <Header />
      <Blog posts={allPostsData}/>  
      <Footer />
  </div>  
  )
}
