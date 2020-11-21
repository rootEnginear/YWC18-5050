import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'styles/index'
import { AppBreadcrumb } from 'components/AppBreadcrumb'
import { AppHeader } from 'components/AppHeader'
import { AppFilter } from 'components/AppFilter'
import { API_STATES, useApi } from 'hooks/useApi'
import { AppCard } from 'components/AppCard'
import { FilterCol, SearchHeader } from './style'

export default function Home() {
	const pages = [
		{ name: 'หน้าแรก', url: '/' },
		{ name: 'ค้นหา', url: '/' },
	]

	const { state, error, data } = useApi()

	useEffect(() => {
		if (state === API_STATES.SUCCESS) {
			setCategories(['ทั้งหมด'].concat(data?.categories.map((c) => c.name)))
			setProvinces(['📌︎ พื้นที่ใกล้ฉัน', '🗺︎ สถานที่ทั้งหมด'].concat(data?.provinces))
			setPriceRange(['ทั้งหมด'].concat(data?.priceRange))
			setReverseCategoryLookupTable(generateLookupTable(data?.categories))
		}
	}, [state])

	// Reverse SubCategories to Main Category Lookup Table
	const [reverseCategoryLookupTable, setReverseCategoryLookupTable] = useState(null)
	const sanitizeKey = (key) => key.replace(/[ /]/g, '_')
	const generateLookupTable = (categories) => {
		let table = {}
		categories
			.map((c) => c.subcategories.map((sc) => ({ [sanitizeKey(sc)]: c.name })))
			.reduce((a, c) => a.concat(c))
			.forEach((k) => {
				table = { ...table, ...k }
			})
		return table
	}

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
			setSubCategories(['ทั้งหมด', ...new Set(data?.categories[currentCategory - 1].subcategories)])
		} else {
			setSubCategories([
				'ทั้งหมด',
				...new Set(data?.categories.reduce((a, c) => a.concat(c.subcategories), [])),
			])
		}
	}, [currentCategory, data])
	const [subCategories, setSubCategories] = useState([])
	const [currentSubCategories, setCurrentSubCategories] = useState(0)
	const changeCurrentSubCategories = (e) => {
		setCurrentSubCategories(+e.target.value)
	}
	// Searching
	const [searchString, setSearchString] = useState('')
	const [currentSearchString, setCurrentSearchString] = useState('')
	const changeSearchString = (e) => {
		setSearchString(e.target.value)
	}
	const changeCurrentSearchString = () =>
		setCurrentSearchString(searchString.replace(/\s+/g, ' ').trim())

	// Filtering
	const [filteredMerchants, setFilteredMerchants] = useState([])
	useEffect(() => {
		const filterByName = (merchant) =>
			!currentSearchString || new RegExp(currentSearchString, 'i').test(merchant.shopNameTH)

		const filterByProvince = (merchant) =>
			currentProvince <= 1 || merchant.addressProvinceName === provinces[currentProvince]

		const filterByPrice = (merchant) =>
			!currentPriceRange || merchant.priceLevel === currentPriceRange

		const filterBySubCategory = (merchant) =>
			!currentSubCategories || merchant.subcategoryName === subCategories[currentSubCategories]

		const filterByCategory = (merchant) =>
			!currentCategory ||
			reverseCategoryLookupTable[sanitizeKey(merchant.subcategoryName)] ===
				categories[currentCategory]

		setFilteredMerchants(
			data?.merchants
				.filter(filterByName)
				.filter(filterByProvince)
				.filter(filterByPrice)
				.filter(filterBySubCategory)
				.filter(filterByCategory)
		)
	}, [
		data,
		currentSearchString,
		currentProvince,
		currentPriceRange,
		currentSubCategories,
		currentCategory,
	])

	return (
		<>
			<Head>
				<title>ค้นหา - คนละครึ่ง</title>
			</Head>
			<AppHeader
				province={provinces}
				currentProvince={currentProvince}
				onProvinceChangeHandler={changeCurrentProvince}
				searchString={searchString}
				changeSearchString={changeSearchString}
				sumbitSearchString={changeCurrentSearchString}
			/>
			<AppBreadcrumb pages={pages} />
			<Container>
				{state === API_STATES.ERROR ? (
					''
				) : (
					<>
						<SearchHeader>
							ผลการค้นหา{currentSearchString ? ' ' + currentSearchString + ' ' : ''}ทั้งหมด
						</SearchHeader>
						<Row>
							<FilterCol fit>
								<AppFilter
									{...{
										categories,
										currentCategory,
										changeCurrentCategory,
										provinces,
										currentProvince,
										changeCurrentProvince,
										priceRange,
										changeCurrentPriceRange,
										subCategories,
										currentSubCategories,
										changeCurrentSubCategories,
									}}
								/>
							</FilterCol>
							<Col>
								{filteredMerchants?.map((m) => (
									<AppCard data={m} key={m.shopNameTH} />
								))}
							</Col>
						</Row>
					</>
				)}
			</Container>
		</>
	)
}
