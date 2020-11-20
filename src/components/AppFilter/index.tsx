import { FormSelect } from 'components/FormSelect'
import { FormRadioGroup } from 'components/FormRadioGroup'
import { StyledFilter } from './style'
import { AppFilterProps } from './types'

export const AppFilter = ({
	categories,
	currentCategory,
	changeCurrentCategory,
	provinces,
	changeCurrentProvince,
	priceRange,
	changeCurrentPriceRange,
	subCategories,
	currentSubCategories,
	changeCurrentSubCategories,
}: AppFilterProps) => {
	return (
		<StyledFilter>
			<FormRadioGroup
				groupName="catg"
				label="ประเภทร้านค้า"
				data={categories}
				currentIndex={currentCategory}
				onChangeHandler={changeCurrentCategory}
			/>
			<FormSelect
				label="จังหวัด/ใกล้ฉัน"
				data={provinces}
				onChangeHandler={changeCurrentProvince}
			/>
			<FormSelect label="ราคา" data={priceRange} onChangeHandler={changeCurrentPriceRange} />
			{subCategories.length ? (
				<FormRadioGroup
					groupName={categories ? categories[currentCategory] : 'subcatg'}
					label={`ประเภท${categories && categories[currentCategory]}`}
					data={['ทั้งหมด', ...(subCategories || [])]}
					currentIndex={currentSubCategories}
					onChangeHandler={changeCurrentSubCategories}
				/>
			) : (
				''
			)}
		</StyledFilter>
	)
}
