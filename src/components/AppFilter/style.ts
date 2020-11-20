import styled from 'styled-components'
import { isDesktop } from 'styles/variables'

export const StyledFilter = styled.aside`
	display: none;

	@media screen and (${isDesktop}) {
		display: block;
		border-radius: 2px;
		border: 1px solid #9fadbf;
		box-shadow: 0 0 1px #9fadbf;
		padding: 19.5px;
	}
`
