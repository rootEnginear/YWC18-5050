import { ChangeEvent } from 'react'

export interface AppFilterProps {
	categories: string[]
	currentCategory: number
	changeCurrentCategory: (event: ChangeEvent<HTMLInputElement>) => void
	provinces: string[]
	currentProvince: number
	changeCurrentProvince: (event: ChangeEvent<HTMLSelectElement>) => void
	priceRange: string[]
	changeCurrentPriceRange: (event: ChangeEvent<HTMLSelectElement>) => void
	subCategories: string[]
	currentSubCategories: number
	changeCurrentSubCategories: (event: ChangeEvent<HTMLInputElement>) => void
}
