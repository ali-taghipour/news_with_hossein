import Document, { Html, Head, Main, NextScript } from 'next/document';
import isRtl from '../utils/isRtl';

class MyDocument extends Document {
    render() {
        return (
            <Html dir={isRtl(this.props.locale) ? 'rtl' : 'ltr'}>
                <Head />
                <body className="bg-white font-body text-sm text-start text-content min-h-screen flex flex-col">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
