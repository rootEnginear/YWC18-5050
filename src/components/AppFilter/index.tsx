import { FormSelect } from 'components/FormSelect'
import { FormRadioGroup } from 'components/FormRadioGroup'
import { StyledFilter } from './style'
import { AppFilterProps } from './types'

export const AppFilter = ({
	categories,
	currentCategory,
	changeCurrentCategory,
	provinces,
	currentProvince,
	changeCurrentProvince,
	priceRange,
	changeCurrentPriceRange,
	subCategories,
	currentSubCategories,
	changeCurrentSubCategories,
	isFilterShown,
}: AppFilterProps) => {
	return (
		<StyledFilter show={isFilterShown}>
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
				value={currentProvince}
				onChangeHandler={changeCurrentProvince}
			/>
			<FormSelect label="ราคา" data={priceRange} onChangeHandler={changeCurrentPriceRange} />
			{subCategories.length > 1 ? (
				<FormRadioGroup
					groupName={categories ? categories[currentCategory] : 'subcatg'}
					label={`ประเภท${categories && categories[currentCategory]}`}
					data={subCategories}
					currentIndex={currentSubCategories}
					onChangeHandler={changeCurrentSubCategories}
				/>
			) : (
				''
			)}
		</StyledFilter>
	)
}
