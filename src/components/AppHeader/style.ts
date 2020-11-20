import styled from 'styled-components'
import { Col } from 'styles/index'
import { isDesktop } from 'styles/variables'

const mobileDimension = {
	height: 61,
	paddingBlock: 12,
	paddingInline: 16,
	innerHeight: function () {
		return this.height - 2 * this.paddingBlock
	},
}

const desktopDimension = {
	height: 70,
	paddingBlock: 13,
	paddingInline: 7.75,
	innerHeight: function () {
		return this.height - 2 * this.paddingBlock
	},
}

export const StyledHeader = styled.header`
	height: ${mobileDimension.height}px;
	padding: ${mobileDimension.paddingBlock}px ${mobileDimension.paddingInline}px;

	@media screen and (${isDesktop}) {
		height: ${desktopDimension.height}px;
		padding: ${desktopDimension.paddingBlock}px ${desktopDimension.paddingInline}%;
	}
`

export const PictureLogo = styled.picture`
	> img {
		height: ${mobileDimension.innerHeight()}px;
		width: auto;
		display: block;

		@media screen and (${isDesktop}) {
			height: ${desktopDimension.innerHeight()}px;
		}
	}
`

export const ColFilter = styled(Col)`
	height: ${mobileDimension.innerHeight()}px;

	@media screen and (${isDesktop}) {
		display: none;
	}
`

export const FilterButton = styled.button`
	padding: ${(mobileDimension.innerHeight() - 24) / 2}px 0.5rem;
	outline: none;
	height: ${mobileDimension.innerHeight()}px;
	cursor: pointer;
	box-sizing: border-box;
	border: none;
	background-color: transparent;
`
