import styled from 'styled-components'
import { Col } from 'styles/index'
import { isDesktop } from 'styles/variables'

export const SearchHeader = styled.h1`
	margin-bottom: 3.75rem;
`

export const FilterCol = styled(Col)`
	padding: 0;

	@media screen and (${isDesktop}) {
		padding: 0 0.5rem;
	}
`

export const LoadmoreButton = styled.button`
	white-space: nowrap;
	text-align: center;
	padding: 17px 30px;
	font-size: 1rem;
	display: block;
	cursor: pointer;
	color: #000;
	border-radius: 4px;
	background: #fff;
	border: none;
	box-shadow: 0 0 4px #9fadbf inset;
	width: 50%;
	margin: 3rem auto 0;
	transition: box-shadow 0.3s;
	outline: none;

	&:hover {
		background: #ebebeb;
	}

	&:focus {
		box-shadow: 0 0 4px #9fadbf inset, 0 0 0 4px #1990ff33;
	}
`
