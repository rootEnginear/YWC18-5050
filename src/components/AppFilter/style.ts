import styled from 'styled-components'
import { isDesktop } from 'styles/variables'

export const StyledFilter = styled.aside`
	position: absolute;
	left: -370px;
	top: 70px;
	background: white;
	border-radius: 2px;
	border: 1px solid #9fadbf;
	box-shadow: 0 0 1px #9fadbf;
	padding: 19.5px;
	transition: 0.5s transform;
	z-index: 1;
	will-change: transform;

	${(props) =>
		props.show
			? `
					transform: translateX(380px);
				`
			: ''}

	@media screen and (${isDesktop}) {
		position: static;

		${(props) =>
			props.show
				? `
					transform: translateX(0);
				`
				: ''}
	}
`
