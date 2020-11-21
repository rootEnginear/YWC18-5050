import { ChangeEvent } from 'react'

export interface AppHeaderProps {
	province: string[]
	currentProvince: number
	onProvinceChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void
	searchString: string
	changeSearchString: (event: ChangeEvent<HTMLInputElement>) => void
	sumbitSearchString: () => void
}
