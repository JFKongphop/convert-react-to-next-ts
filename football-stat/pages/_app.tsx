import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>JSKOfficial</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
