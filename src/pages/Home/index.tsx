import Head from 'next/head'
import { AppBreadcrumb } from 'components/AppBreadcrumb'
import { AppHeader } from 'components/AppHeader'

export default function Home() {
	const pages = [
		{ name: 'หน้าแรก', url: '/' },
		{ name: 'ค้นหา', url: '/' },
	]

	return (
		<>
			<Head>
				<title>ค้นหา - คนละครึ่ง</title>
			</Head>
			<AppHeader />
			<AppBreadcrumb pages={pages} />
			<h1>ผลการค้นหา [] ทั้งหมด</h1>
		</>
	)
}
