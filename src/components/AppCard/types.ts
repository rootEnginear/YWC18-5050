export interface AppCardProps {
	data: {
		shopNameTH: string
		categoryName: string
		subcategoryName: string
		coverImageId: string
		facilities: ['ที่จอดรถ'?, 'สามารถนำสัตว์เลี้ยงเข้าได้'?, 'รับจองล่วงหน้า'?]
		priceLevel: 1 | 2 | 3 | 4
		isOpen: 'Y' | 'N' | 'N/A'
		highlightText: string
		recommendedItems: string[]
		addressProvinceName: string
		addressDistrictName: string
	}
}
