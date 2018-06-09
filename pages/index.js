import React from 'react';
import Head from 'next/head';
import Home from '../src/components/Home';

const index = () => (
    <div>
        <Head>
            <meta charSet="utf-8" key="meta-charset" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="meta-viewport" />
            <meta name="theme-color" content="#333333" key="meta-theme-color" />
            <link rel="manifest" href="/static/manifest.json" key="meta-manifest" />
            <link rel="shortcut icon" href="/static/favicon.ico" key="meta-icon" />
            <link rel="stylesheet" href="/static/css/base.css" key="meta-base-styles" />
        </Head>
        <Home />
    </div>
);

export default index;
