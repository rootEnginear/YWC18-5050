import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'styles/index'
import { AppBreadcrumb } from 'components/AppBreadcrumb'
import { AppHeader } from 'components/AppHeader'
import { AppFilter } from 'components/AppFilter'
import { API_STATES, useApi } from 'hooks/useApi'

export default function Home() {
	const pages = [
		{ name: 'หน้าแรก', url: '/' },
		{ name: 'ค้นหา', url: '/' },
	]

	const { state, error, data } = useApi()

	useEffect(() => {
		if (state === API_STATES.SUCCESS) {
			setCategories(['ทั้งหมด'].concat(data?.categories.map((c) => c.name)))
			setProvinces(data?.provinces)
			setPriceRange(data?.priceRange)
		}
	}, [state])

	// Categories
	const [categories, setCategories] = useState([])
	const [currentCategory, setCurrentCategory] = useState(0)
	const changeCurrentCategory = (e) => {
		setCurrentCategory(+e.target.value)
		setCurrentSubCategories(0)
	}
	// Provinces
	const [provinces, setProvinces] = useState([])
	const [currentProvince, setCurrentProvince] = useState(0)
	const changeCurrentProvince = (e) => setCurrentProvince(+e.target.value)
	// Price Range
	const [priceRange, setPriceRange] = useState([])
	const [currentPriceRange, setCurrentPriceRange] = useState(0)
	const changeCurrentPriceRange = (e) => setCurrentPriceRange(+e.target.value)
	// Subcategories
	useEffect(() => {
		if (currentCategory) {
			setSubCategories([...new Set(data?.categories[currentCategory - 1].subcategories)])
		} else {
			setSubCategories([
				...new Set(data?.categories.reduce((a, c) => a.concat(c.subcategories), [])),
			])
		}
	}, [currentCategory, data])
	const [subCategories, setSubCategories] = useState([])
	const [currentSubCategories, setCurrentSubCategories] = useState(0)
	const changeCurrentSubCategories = (e) => {
		setCurrentSubCategories(+e.target.value)
	}

	return (
		<>
			<Head>
				<title>ค้นหา - คนละครึ่ง</title>
			</Head>
			<AppHeader />
			<AppBreadcrumb pages={pages} />
			<Container>
				{state === API_STATES.ERROR ? (
					''
				) : (
					<>
						<h1>ผลการค้นหา [] ทั้งหมด</h1>
						<Row>
							<Col fit>
								<AppFilter
									{...{
										categories,
										currentCategory,
										changeCurrentCategory,
										provinces,
										changeCurrentProvince,
										priceRange,
										changeCurrentPriceRange,
										subCategories,
										currentSubCategories,
										changeCurrentSubCategories,
									}}
								/>
							</Col>
							<Col>
								{currentCategory}
								{currentProvince}
								{currentPriceRange}
								{currentSubCategories}
							</Col>
						</Row>
					</>
				)}
			</Container>
		</>
	)
}
