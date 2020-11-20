import { ChangeEvent } from 'react'

export interface FormRadioGroupProps {
	groupName: string
	label: string
	data: string[]
	currentIndex: number
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
