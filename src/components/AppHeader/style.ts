import styled from 'styled-components'
import { Col } from 'styles/index'
import { isDesktop, colorAccented } from 'styles/variables'

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
	background: transparent;
`

export const SearchBoxContainer = styled.div`
	height: ${mobileDimension.innerHeight()}px;
	display: flex;
	border: 1px solid #c4c4c4;
	border-radius: 10px;
	box-shadow: 0 0 1px #c4c4c4;

	@media screen and (${isDesktop}) {
		height: ${desktopDimension.innerHeight()}px;
	}

	> .searchbox {
		&-select {
			display: none;

			&:hover {
				background: #f8f8f8;
			}

			&:focus {
				z-index: 1;
				box-shadow: 0 0 0 4px ${colorAccented + '33'};
			}

			@media screen and (${isDesktop}) {
				border-radius: 10px 0 0 10px;
				padding: 0 7px;
				outline: none;
				font-weight: 500;
				display: unset;
				border: none;
				border-right: 1px solid #c4c4c4;
			}
		}

		&-input {
			padding: 0 13.8px;
			outline: none;
			line-height: 1;
			font-size: 1rem;
			flex: 1 1 0%;
			border: none;
			text-overflow: ellipsis;
			border-radius: 10px 0 0 10px;

			@media screen and (${isDesktop}) {
				border-radius: 0;
			}

			&:focus {
				z-index: 1;
				box-shadow: 0 0 0 4px ${colorAccented + '33'};
			}
		}

		&-button {
			padding: ${(mobileDimension.innerHeight() - 16) / 2}px 1rem;
			outline: none;
			height: ${mobileDimension.innerHeight() - 2}px;
			cursor: pointer;
			box-sizing: border-box;
			border: none;
			border-left: 1px solid #c4c4c4;
			border-radius: 0 10px 10px 0;
			background: #f8f8f8;

			&:hover {
				background: #ebebeb;
			}

			&:active {
				background: #dfdfdf;
			}

			&:focus {
				z-index: 1;
				box-shadow: 0 0 0 4px ${colorAccented + '33'};
			}

			@media screen and (${isDesktop}) {
				padding: ${(desktopDimension.innerHeight() - 16) / 2}px 1.5rem;
				height: ${desktopDimension.innerHeight() - 2}px;
			}
		}
	}
`
