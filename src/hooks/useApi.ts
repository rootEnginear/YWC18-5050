import { useEffect, useState } from 'react'

interface DATA {
	state: string
	error: string
	data: {
		categories: { name: string; subcategories: string[] }[]
		provinces: string[]
		priceRange: string[]
		merchants: {
			shopNameTH: string
			categoryName: string
			subcategoryName: string
			coverImageId: string
			facilities: ['ที่จอดรถ'?, 'สามารถนำสัตว์เลี้ยงเข้าได้'?, 'รับจองล่วงหน้า'?]
			priceLevel: 1 | 2 | 3 | 4
			isOpen: 'Y' | 'N' | 'N/A'
			highlightText: string
			recommendedItems: string[]
			addressProvinceName: string
			addressDistrictName: string
		}[]
	} | null
}

export const API_STATES = {
	FETCHING: 'FETCHING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
}

export const useApi = () => {
	const [data, setData] = useState({
		state: API_STATES.FETCHING,
		error: '',
		data: null,
	} as DATA)

	const setPartialData = (partialData) => setData({ ...data, ...partialData })

	const fetchData = async () => {
		try {
			const res = await fetch('https://panjs.com/ywc18.json')
			const data = await res.json()
			setPartialData({ data, state: API_STATES.SUCCESS })
			console.info('[i] Data fetched from direct origin.')
		} catch (error) {
			console.warn(
				'[!] An error occurred when fetching from direct origin. Retrying with proxy server.'
			)
			try {
				const res2 = await fetch('https://ywc18-5050-api-proxy-server.herokuapp.com/')
				const data2 = await res2.json()
				setPartialData({ data, state: API_STATES.SUCCESS })
				console.info('[i] Data fetched from proxy server.')
			} catch (error) {
				setPartialData({ error: error.message, state: API_STATES.ERROR })
				console.error(`[#] Error: Cannot fetching data from both server. (${error.message})`)
			}
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { info: data, fetchData }
}
