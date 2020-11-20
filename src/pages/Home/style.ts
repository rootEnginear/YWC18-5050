import styled from 'styled-components'
import { Col } from 'styles/index'
import { isDesktop } from 'styles/variables'

export const SearchHeader = styled.h1`
	margin-bottom: 3.75rem;
`

export const FilterCol = styled(Col)`
	display: none;

	@media screen and (${isDesktop}) {
		display: block;
	}
`
