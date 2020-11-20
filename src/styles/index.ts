import styled, { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import { isDesktop } from './variables'

export const GlobalStyle = createGlobalStyle`
	${fonts}

	* {
		box-sizing: border-box;
	}

	body {
		font-family: "IBM Plex Sans Thai", "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	h1 {
		font-size: 1.5rem;
		margin: 1.65rem 0;
	}
`

export const Row = styled.div`
	display: flex;
	margin: 0 -0.5rem;
	align-items: center;
`

export const Col = styled.div`
	padding: 0 0.5rem;
	${(props) => (props.fit ? '' : 'flex: 1 1 0%;')}
`
