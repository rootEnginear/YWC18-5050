import styled from 'styled-components'

export const StyledSVG = styled.svg`
	height: ${(props) => props.size || '100%'};
	width: ${(props) => props.size || 'auto'};
`
