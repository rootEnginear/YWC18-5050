import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from 'styles/index'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* Basic Config */}
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

				{/* External Files */}
				<link rel="preconnect" href="https://cdn.jsdelivr.net/" />
				<link rel="dns-prefetch" href="https://cdn.jsdelivr.net/" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css"
				/>

				{/* Favicon */}

				{/* SEO */}
				<meta name="description" content="..." />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
