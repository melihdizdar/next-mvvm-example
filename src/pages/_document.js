import Document, { Html, Head, Main, NextScript } from 'next/document';
import MetaTags from './meta';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="tr">
                <Head>
                    <MetaTags/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script dangerouslySetInnerHTML={{
                        __html: `console.log('Global Script Example');`
                    }} />
                </body>
            </Html>
        );
    }
}

export default MyDocument;