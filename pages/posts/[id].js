import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getAllPostIds } from '../../lib/posts'
import { getPostData } from '../../lib/posts';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export async function getStaticPaths(){
    const paths = getAllPostIds();
    console.log(`pathsは${paths}`)
    console.log(...paths)
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)

    
    return {
        props: {
            postData
        }
    };
}

export default function Id({postData}) {
    return (
        <div>
            <Header />
            <h1 className='md-4'>{postData.title}</h1>
            <br />
            {postData.date}
            <br />
            <div className='md4' dangerouslySetInnerHTML={{__html: postData.blogContentHTML}}/>
            <Link href="/blog" passHref>
                戻る
            </Link>
            <Footer />
        </div>
    );
}
