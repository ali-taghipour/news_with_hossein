import React from 'react';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/progress.css';
import { ToastContainer } from "react-toastify";

// used for NProgress
import Router from 'next/router';
import NProgress from 'nprogress';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
            />
        </>
    );
}

export default MyApp;
