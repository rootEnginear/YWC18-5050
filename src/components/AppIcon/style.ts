import styled from 'styled-components'

export const StyledSVG = styled.svg`
	height: ${(props) => props.size || '100%'};
	width: ${(props) => props.size || 'auto'};
`

export const FacilitySVG = styled(StyledSVG)`
	border: 2px solid #1fc300;
	height: 2rem;
	width: 2rem;
	padding: 4px;
	border-radius: 50%;
	margin-right: 0.5rem;
`
