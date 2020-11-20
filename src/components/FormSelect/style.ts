import styled from 'styled-components'

export const StyledFormSelect = styled.select`
	width: 100%;
	padding: 3px 8.8px;
	outline: none;
	font-size: 0.9rem;
	display: block;
	box-shadow: 0 0 1px #d9d9d9;
	border: 1px solid #d9d9d9;
	border-radius: 3px;
	font-weight: 500;
	cursor: pointer;
	transition: box-shadow 0.3s;

	&:focus {
		box-shadow: 0 0 1px #d9d9d9, 0 0 0 4px #1990ff33, 0 0 0 3px #fff inset;
	}
`

export const StyledGroupLabel = styled.span`
	display: block;
	font-weight: 700;
	margin-bottom: 0.8rem;
`

export const StyledGroupContainer = styled.label`
	display: block;
	margin-bottom: 2.3rem;
`
