import { StyledHeader, PictureLogo, ColFilter, FilterButton, SearchBoxContainer } from './style'
import { Row, Col } from 'styles/index'
import { isDesktop, colorAccented } from 'styles/variables'
import { IconFilter, IconSearch } from 'components/AppIcon'
import { AppHeaderProps } from './types'

const Logo = () => (
	<a href=".">
		<PictureLogo>
			<source srcSet="img/logo.png" type="image/png" media={`screen and (${isDesktop})`} />
			<source srcSet="img/logo_small.png" type="image/png" />
			<img src="img/logo_small.png" alt="คนละครึ่ง" />
		</PictureLogo>
	</a>
)

export const AppHeader = ({
	province,
	currentProvince,
	onProvinceChangeHandler,
	searchString,
	changeSearchString,
	sumbitSearchString,
	filterToggler,
}: AppHeaderProps) => {
	return (
		<StyledHeader>
			<Row vcentered>
				<Col fit>
					<Logo />
				</Col>
				<Col>
					<SearchBoxContainer>
						<select
							className="searchbox-select"
							defaultValue={province[0]}
							value={currentProvince}
							onChange={onProvinceChangeHandler}>
							{province &&
								province.map((d, i) => (
									<option value={i} key={d}>
										{d}
									</option>
								))}
						</select>
						<input
							className="searchbox-input"
							type="text"
							placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
							value={searchString}
							onChange={changeSearchString}
							onKeyPress={(e) => {
								if (e.key === 'Enter') sumbitSearchString()
							}}
						/>
						<button className="searchbox-button" type="button" onClick={sumbitSearchString}>
							<IconSearch />
						</button>
					</SearchBoxContainer>
				</Col>
				<ColFilter fit paddingless>
					<FilterButton type="button" onClick={filterToggler}>
						<IconFilter color={colorAccented} size="24px" />
					</FilterButton>
				</ColFilter>
			</Row>
		</StyledHeader>
	)
}
