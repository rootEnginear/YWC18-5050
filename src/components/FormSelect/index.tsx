import { StyledFormSelect, StyledGroupLabel, StyledGroupContainer } from './style'
import { FormSelectProps } from './types'

export const FormSelect = ({ label, data, value, onChangeHandler }: FormSelectProps) => {
	return (
		<StyledGroupContainer>
			<StyledGroupLabel>{label}</StyledGroupLabel>
			<StyledFormSelect defaultValue={data[0]} value={value} onChange={onChangeHandler}>
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
