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
				<link rel="apple-touch-icon" sizes="180x180" href="/YWC18-5050/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/YWC18-5050/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/YWC18-5050/favicon-16x16.png" />
				<link rel="manifest" href="/YWC18-5050/site.webmanifest" />
				<link rel="mask-icon" href="/YWC18-5050/safari-pinned-tab.svg" color="#1990ff" />
				<link rel="shortcut icon" href="/YWC18-5050/favicon.ico" />
				<meta name="msapplication-TileColor" content="#1990ff" />
				<meta name="msapplication-config" content="/YWC18-5050/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

				{/* SEO */}
				<meta name="description" content="คนละครึ่ง" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
