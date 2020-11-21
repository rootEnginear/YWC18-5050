import styled, { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import { isDesktop } from 'styles/variables'

export const GlobalStyle = createGlobalStyle`
	${fonts}

	* {
		box-sizing: border-box;
	}

	body {
		font-family: "IBM Plex Sans Thai", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background: url('img/map-background.png');
		background-position: center bottom;
		background-size: contain;
		background-repeat: no-repeat;
		padding-bottom: 5rem;
		min-height: 100vh;
	}

	h1 {
		font-size: 1.5rem;
		margin: 1.65rem 0;
	}

	.nobr {
		white-space: nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}

	img {
		max-width: 100%;
		display: block;
		margin: auto;
	}
`

export const Row = styled.div`
	display: flex;
	margin: 0 -0.5rem;
	${(props) => (props.vcentered ? 'align-items: center;' : '')}
`

export const Col = styled.div`
	${(props) => (props.paddingless ? '' : 'padding: 0 0.5rem;')}
	${(props) => (props.fit ? '' : 'flex: 1 1 0%;')}
`

export const Container = styled.section`
	padding: 0 16.35px;

	@media screen and (${isDesktop}) {
		padding: 0 18.6px;
	}
`
