import styled from 'styled-components'
import { isDesktop } from 'styles/variables'

const mobileHeight = '45.5px'
const desktopHeight = '52px'

export const StyledBreadcrumb = styled.section`
	background: #283a7c;
	color: #fff;
	height: ${mobileHeight};
	padding: 0 16px;

	@media screen and (${isDesktop}) {
		height: ${desktopHeight};
		padding: 0 7.75%;
	}

	> nav {
		line-height: ${mobileHeight};

		@media screen and (${isDesktop}) {
			line-height: ${desktopHeight};
		}

		> ul {
			display: flex;
			padding: 0;
			margin: 0;
			list-style: none;
		}
	}

	> nav > ul > li {
		&:not(:last-of-type)::after {
			content: '/';
			margin: 0 1ch;
		}

		&:last-of-type {
			font-weight: 700;

			> a {
				text-decoration: none;
			}
		}

		> a {
			color: #fff;
		}
	}
`
