import { StyledSVG, FacilitySVG } from './style'
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

export const IconReservation = ({ color, size }: AppIconProps) => (
	<FacilitySVG fill="none" stroke="#1fc300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
	</FacilitySVG>
)
export const IconCar = ({ color, size }: AppIconProps) => (
	<FacilitySVG
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="car-side"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 640 512">
		<path
			fill="#1fc300"
			d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path>
	</FacilitySVG>
)
export const IconPet = ({ color, size }: AppIconProps) => (
	<FacilitySVG
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="paw"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512">
		<path
			fill="#1fc300"
			d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
	</FacilitySVG>
)
