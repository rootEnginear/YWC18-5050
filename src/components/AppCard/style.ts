import styled from 'styled-components'
import { isDesktop } from 'styles/variables'

export const StyledCard = styled.article`
	border: 1px solid #c9e0e9;
	box-shadow: 0 0 1px #c9e0e9;
	border-radius: 1px;
	margin-bottom: 8px;

	@media screen and (${isDesktop}) {
		display: flex;
		padding: 6.5px;
		margin-bottom: 9.75px;
	}

	> img {
		width: 100%;
		height: 315px;
		object-fit: cover;
		border-radius: 3px;

		@media screen and (${isDesktop}) {
			width: 333px;
			width: 333px;
		}
	}

	> section {
		flex: 1 1 0%;
		padding: 25px 17px;

		@media screen and (${isDesktop}) {
			padding: 17px;
		}

		> header {
			> h2 {
				margin: 0 0 0.7rem -0.75rem;
				font-size: 1.7rem;

				@media screen and (${isDesktop}) {
					font-size: 1.5rem;
					margin-bottom: 0;
				}

				&::before {
					content: '';
					display: inline-block;
					width: 0.75rem;
				}
			}
			> span {
				color: #8a8a8a;
				font-size: 1.2rem;
				font-weight: 500;
				letter-spacing: -0.5px;
				line-height: 1.75;

				> span > .money {
					color: #000;
				}
			}
		}

		> hr {
			border-width: 0;
			border-top: 1px solid #eee;
			width: 75%;
			margin: 1.3rem 0 2rem;

			@media screen and (${isDesktop}) {
				margin: 1.3rem 0;
			}
		}

		> p {
			margin: 1.4rem 0;
			font-size: 1.2rem;
			font-weight: 500;
			color: #8a8a8a;

			@media screen and (${isDesktop}) {
				font-size: 1rem;
				margin: 1rem 0;
			}

			> strong {
				color: #000;
			}
		}
	}
`

export const StatusBadge = styled.span`
	background: #a1a1a1;
	font-size: 1rem;
	border-radius: 3px;
	padding: 0 0.5rem;
	color: #fff;
	position: relative;
	top: -4px;
	margin-left: 0.75rem;
	white-space: nowrap;
	${(props) => (props.success ? 'background: #1fc300;' : '')};
`
