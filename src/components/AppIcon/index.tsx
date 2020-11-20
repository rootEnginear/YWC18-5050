import { StyledSVG } from './style'
import { AppIconProps } from './types'

export const IconFilter = ({ color, size }: AppIconProps) => (
	<StyledSVG
		size={size}
		fill="none"
		stroke={color || 'currentColor'}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
	</StyledSVG>
)

export const IconLocation = ({ color, size }: AppIconProps) => (
	<StyledSVG
		size={size}
		fill="none"
		stroke={color || 'currentColor'}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
	</StyledSVG>
)

export const IconSearch = ({ color, size }: AppIconProps) => (
	<StyledSVG
		size={size}
		fill="none"
		stroke={color || 'currentColor'}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
	</StyledSVG>
)
