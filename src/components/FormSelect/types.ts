import { ChangeEvent } from 'react'

export interface FormSelectProps {
	label: string
	data: string[]
	value?: number
	onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void
}
