import { ChangeEvent } from 'react'

export interface FormSelectProps {
	label: string
	data: string[]
	onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void
}
