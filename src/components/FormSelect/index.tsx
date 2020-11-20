import { StyledFormSelect, StyledGroupLabel, StyledGroupContainer } from './style'
import { FormSelectProps } from './types'

export const FormSelect = ({ label, data, onChangeHandler }: FormSelectProps) => {
	return (
		<StyledGroupContainer>
			<StyledGroupLabel>{label}</StyledGroupLabel>
			<StyledFormSelect defaultValue="พื้นที่ใกล้ฉัน" onChange={onChangeHandler}>
				{data &&
					data.map((d, i) => (
						<option value={i} key={d}>
							{d}
						</option>
					))}
			</StyledFormSelect>
		</StyledGroupContainer>
	)
}
