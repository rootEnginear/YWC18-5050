import { StyledHeader, PictureLogo, ColFilter } from './style'
import { Row, Col } from 'styles/index'
import { isDesktop, colorAccented } from 'styles/variables'
import { IconFilter } from 'components/AppIcon'

const Logo = () => (
	<PictureLogo>
		<source srcSet="img/logo.png" type="image/png" media={`screen and (${isDesktop})`} />
		<source srcSet="img/logo_small.png" type="image/png" />
		<img src="img/logo_small.png" alt="คนละครึ่ง" />
	</PictureLogo>
)

export const AppHeader = () => {
	return (
		<StyledHeader>
			<Row>
				<Col fit>
					<Logo />
				</Col>
				<Col>Search Box</Col>
				<ColFilter fit>
					<IconFilter color={colorAccented} />
				</ColFilter>
			</Row>
		</StyledHeader>
	)
}
