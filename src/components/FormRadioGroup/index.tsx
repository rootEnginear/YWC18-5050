// import { StyledFormSelect } from './style'
import { StyledRadioContainer, StyledGroupLabel, StyledGroupContainer } from './style'
import { FormRadioGroupProps } from './types'

export const FormRadioGroup = ({
	groupName,
	label,
	data,
	currentIndex,
	onChangeHandler,
}: FormRadioGroupProps) => {
	return (
		<StyledGroupContainer>
			<StyledGroupLabel>
				{label === 'ประเภททั้งหมด' ? 'ประเภทร้านค้าทั้งหมด' : label}
			</StyledGroupLabel>
			{data &&
				data.map((d, i) => (
					<StyledRadioContainer key={groupName + i}>
						<input
							type="radio"
							name={groupName}
							id={groupName + i}
							value={i}
							onChange={onChangeHandler}
							defaultChecked={i === currentIndex}
						/>
						<label htmlFor={groupName + i}>{d}</label>
					</StyledRadioContainer>
				))}
		</StyledGroupContainer>
	)
}
