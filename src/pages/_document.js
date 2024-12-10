import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="tr">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <title>Create Next App</title>
                </Head>
                <body>
                    <Header />
                    <Main />
                    <Footer/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;