import Document, { Head, Main, NextScript } from 'next/document'

export default class DoNext extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"/>
                    <link rel="stylesheet" href="/static/style.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}