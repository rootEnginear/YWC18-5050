import styled from 'styled-components'

export const StyledRadioContainer = styled.div`
	> input {
		width: 0;
		height: 0;
		position: absolute;
		transform: scale(0);
	}

	> label {
		cursor: pointer;
		display: block;
		margin-bottom: 10px;
		white-space: nowrap;

		&::before {
			content: '';
			display: inline-block;
			width: 1rem;
			height: 1rem;
			margin-right: 0.9ch;
			border-radius: 50%;
			border: 1px solid #d9d9d9;
			box-shadow: 0 0 1px #d9d9d9;
			box-sizing: border-box;
			position: relative;
			top: 2px;
			transition-property: background, box-shadow;
			transition-duration: 0.3s;
		}
	}

	> input:checked + label::before {
		background: #1990ff;
		border-color: #1990ff;
		box-shadow: 0 0 1px #1990ff, 0 0 0 3.25px #fff inset;
	}

	> input:focus + label::before {
		box-shadow: 0 0 1px #1990ff, 0 0 0 3.25px #fff inset, 0 0 0 4px #1990ff33;
	}
`

export const StyledGroupLabel = styled.span`
	display: block;
	font-weight: 700;
	margin-bottom: 1.5rem;
`

export const StyledGroupContainer = styled.div`
	margin-bottom: 2.75rem;
`
