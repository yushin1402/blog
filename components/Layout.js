import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title="my project"}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>

        </div>
    );
}

export default Layout;