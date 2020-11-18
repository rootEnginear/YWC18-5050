import Link from 'next/link'
import { StyledBreadcrumb } from './style'
import { AppBreadcrumbProps } from './types'

export const AppBreadcrumb = ({ pages }: AppBreadcrumbProps) => {
	return (
		<StyledBreadcrumb>
			<nav>
				<ul>
					{pages.map((page) => (
						<li key={page.name}>
							<Link href={page.url}>
								<a>{page.name}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</StyledBreadcrumb>
	)
}
