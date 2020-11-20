import { StyledHeader, PictureLogo, ColFilter, FilterButton, SearchBoxContainer } from './style'
import { Row, Col } from 'styles/index'
import { isDesktop, colorAccented } from 'styles/variables'
import { IconFilter, IconSearch } from 'components/AppIcon'

const Logo = () => (
	<a href="/">
		<PictureLogo>
			<source srcSet="img/logo.png" type="image/png" media={`screen and (${isDesktop})`} />
			<source srcSet="img/logo_small.png" type="image/png" />
			<img src="img/logo_small.png" alt="คนละครึ่ง" />
		</PictureLogo>
	</a>
)

export const AppHeader = () => {
	return (
		<StyledHeader>
			<Row vcentered>
				<Col fit>
					<Logo />
				</Col>
				<Col>
					<SearchBoxContainer>
						<select className="searchbox-select">
							<option>พื้นที่ใกล้ฉัน</option>
							<option>Placeholder 2</option>
							<option>Placeholder 3</option>
						</select>
						<input
							className="searchbox-input"
							type="text"
							placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
						/>
						<button className="searchbox-button" type="button">
							<IconSearch />
						</button>
					</SearchBoxContainer>
				</Col>
				<ColFilter fit paddingless>
					<FilterButton type="button">
						<IconFilter color={colorAccented} size="24px" />
					</FilterButton>
				</ColFilter>
			</Row>
		</StyledHeader>
	)
}
