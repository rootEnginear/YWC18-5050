import { StatusBadge, StyledCard } from './style'
import { AppCardProps } from './types'

const OPEN_STATUS = {
	Y: 'เปิดอยู่',
	N: 'ปิดแล้ว',
}

export const AppCard = ({ data }: AppCardProps) => {
	const {
		shopNameTH,
		subcategoryName,
		coverImageId,
		facilities,
		priceLevel,
		isOpen,
		highlightText,
		recommendedItems,
		addressProvinceName,
		addressDistrictName,
	} = data

	const safeHighlightText = highlightText
		.replace(/\</g, '&lt;')
		.replace(/\>/g, '&gt;')
		.replace(/&lt;strong&gt;/g, '<strong>')
		.replace(/&lt;\/strong&gt;/g, '</strong>')

	return (
		<StyledCard>
			<img src={coverImageId} alt={shopNameTH} />
			<section>
				<header>
					<h2>
						{shopNameTH}
						{isOpen !== 'N/A' && (
							<StatusBadge success={isOpen === 'Y'}>{OPEN_STATUS[isOpen]}</StatusBadge>
						)}
					</h2>
					<span>
						{subcategoryName} |{' '}
						<span className="nobr">
							<span className="money">{'฿'.repeat(priceLevel)}</span>
							{'฿'.repeat(4 - priceLevel)}
						</span>{' '}
						|{' '}
						<span className="nobr">
							{addressDistrictName}&nbsp;{addressProvinceName}
						</span>
					</span>
				</header>
				<hr />
				<p dangerouslySetInnerHTML={{ __html: safeHighlightText }}></p>
				<p>
					<strong>เมนูแนะนำ:</strong> {recommendedItems.join(' ')}
				</p>
				<footer>{facilities.join(' ')}</footer>
			</section>
		</StyledCard>
	)
}
