export type Price = { fixed: number } | { min: number; max: number } | null

export interface Product {
	id: number
	name: string
	price: Price
	category: string
	hasVariants: boolean
	readMore?: boolean
	image: string
}

const pool = [
	'photo-1663530761401-15eefb544889',
	'photo-1676471926534-d5c9771909fa',
	'photo-1577308856961-8e9ec50d0c67',
	'photo-1633424414664-c24a6d28086b',
	'photo-1666951833461-71fc128b6810',
	'photo-1576842546422-60562b9242ae',
	'photo-1555244162-803834f70033',
	'photo-1637059395523-d5a35541d544',
	'photo-1676471932681-45fa972d848a',
	'photo-1750943079462-87bad58cf43e',
	'photo-1519225421980-715cb0215aed',
	'photo-1562050344-f7ad946cee35',
]

const img = (i: number) =>
`https://images.unsplash.com/${pool[i % pool.length]}?w=600&h=400&fit=crop&auto=format`

export const categories = [
	{ name: 'Event Food Bowls', count: 3 },
	{ name: 'Events', count: 1 },
	{ name: 'Food Bowls', count: 6 },
	{ name: 'Protein Platter Trays', count: 5 },
	{ name: 'Side Dishes & Finger Foods', count: 14 },
	{ name: 'Soup and Stew', count: 15 },
]

export const sizeLabels: Record<string, [string, string, string]> = {
	'Soup and Stew': ['Small Pot', 'Medium Pot', 'Large Pot'],
	'Protein Platter Trays': ['Small Tray', 'Standard Tray', 'Large Tray'],
	'Food Bowls': ['Single Portion', 'Family Pack', 'Party Pack'],
	'Event Food Bowls': ['Serves 20', 'Serves 50+', 'Full Event'],
	'Side Dishes & Finger Foods': ['Small', 'Medium', 'Large'],
	Events: ['Starter Package', 'Standard Package', 'Premium Package'],
}

export const products: Product[] = [
	// Soup and Stew (15)
	{ id: 1, name: 'Ayamashe Sauce', price: { min: 55, max: 260 }, category: 'Soup and Stew', hasVariants: true, image: img(0) },
	{ id: 2, name: 'Beef Stew', price: { min: 60, max: 300 }, category: 'Soup and Stew', hasVariants: true, image: img(8) },
	{ id: 3, name: 'Buka Stew (Amala Stew)', price: { min: 55, max: 260 }, category: 'Soup and Stew', hasVariants: true, image: img(1) },
	{ id: 4, name: 'Egusi Soup', price: { min: 60, max: 280 }, category: 'Soup and Stew', hasVariants: true, image: img(2) },
	{ id: 5, name: 'Efo Riro', price: { min: 55, max: 270 }, category: 'Soup and Stew', hasVariants: true, image: img(3) },
	{ id: 6, name: 'Pepper Soup', price: { min: 50, max: 250 }, category: 'Soup and Stew', hasVariants: true, image: img(4) },
	{ id: 7, name: 'Ofe Akwu (Palm Nut Soup)', price: { min: 55, max: 260 }, category: 'Soup and Stew', hasVariants: true, image: img(5) },
	{ id: 8, name: 'Okra Soup', price: { min: 55, max: 260 }, category: 'Soup and Stew', hasVariants: true, image: img(6) },
	{ id: 9, name: 'Afang Soup', price: { min: 70, max: 320 }, category: 'Soup and Stew', hasVariants: true, image: img(7) },
	{ id: 10, name: 'Groundnut Soup', price: { min: 60, max: 280 }, category: 'Soup and Stew', hasVariants: true, image: img(9) },
	{ id: 11, name: 'Oha Soup', price: { min: 65, max: 300 }, category: 'Soup and Stew', hasVariants: true, image: img(10) },
	{ id: 12, name: 'Ofe Onugbu (Bitter Leaf Soup)', price: { min: 65, max: 300 }, category: 'Soup and Stew', hasVariants: true, image: img(11) },
	{ id: 13, name: 'Tomato Stew', price: { min: 35, max: 180 }, category: 'Soup and Stew', hasVariants: true, image: img(0) },
	{ id: 14, name: 'Catfish Pepper Soup', price: { min: 55, max: 270 }, category: 'Soup and Stew', hasVariants: true, image: img(1) },
	{ id: 15, name: 'Ogbono Soup', price: { min: 60, max: 280 }, category: 'Soup and Stew', hasVariants: true, image: img(2) },

	// Protein Platter Trays (5)
	{ id: 16, name: 'Asun (Peppered Goat Meat)', price: { min: 60, max: 150 }, category: 'Protein Platter Trays', hasVariants: true, image: img(3) },
	{ id: 17, name: 'BBQ Chicken', price: { min: 50, max: 100 }, category: 'Protein Platter Trays', hasVariants: true, image: img(4) },
	{ id: 18, name: 'Peppered Turkey', price: { min: 70, max: 200 }, category: 'Protein Platter Trays', hasVariants: true, image: img(9) },
	{ id: 19, name: 'Peppered Fish', price: { min: 55, max: 180 }, category: 'Protein Platter Trays', hasVariants: true, image: img(1) },
	{ id: 20, name: 'Suya Platter', price: { min: 45, max: 150 }, category: 'Protein Platter Trays', hasVariants: true, image: img(5) },

	// Side Dishes & Finger Foods (14)
	{ id: 21, name: 'Agidi (Eko)', price: { fixed: 2 }, category: 'Side Dishes & Finger Foods', hasVariants: false, image: img(6) },
	{ id: 22, name: 'Canape with Settings', price: null, category: 'Side Dishes & Finger Foods', hasVariants: false, readMore: true, image: img(7) },
	{ id: 23, name: 'Puff Puff', price: { min: 15, max: 60 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(8) },
	{ id: 24, name: 'Meat Pie', price: { fixed: 3.5 }, category: 'Side Dishes & Finger Foods', hasVariants: false, image: img(9) },
	{ id: 25, name: 'Spring Rolls', price: { min: 20, max: 80 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(10) },
	{ id: 26, name: 'Samosa', price: { min: 15, max: 60 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(11) },
	{ id: 27, name: 'Fried Plantain (Dodo)', price: { min: 20, max: 100 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(0) },
	{ id: 28, name: 'Moi Moi', price: { min: 25, max: 120 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(1) },
	{ id: 29, name: 'Akara (Bean Cakes)', price: { min: 15, max: 60 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(2) },
	{ id: 30, name: 'Gizdodo', price: { min: 35, max: 150 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(3) },
	{ id: 31, name: 'Coleslaw', price: { min: 20, max: 100 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(4) },
	{ id: 32, name: 'Chin Chin', price: { min: 10, max: 50 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(5) },
	{ id: 33, name: 'Fried Yam', price: { min: 20, max: 80 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(6) },
	{ id: 34, name: 'Peppered Snail', price: { min: 40, max: 150 }, category: 'Side Dishes & Finger Foods', hasVariants: true, image: img(7) },

	// Food Bowls (6)
	{ id: 35, name: 'Amala', price: { min: 30, max: 90 }, category: 'Food Bowls', hasVariants: true, image: img(8) },
	{ id: 36, name: 'Eba (Garri)', price: { min: 25, max: 80 }, category: 'Food Bowls', hasVariants: true, image: img(9) },
	{ id: 37, name: 'Pounded Yam', price: { min: 35, max: 100 }, category: 'Food Bowls', hasVariants: true, image: img(10) },
	{ id: 38, name: 'Fufu', price: { min: 30, max: 90 }, category: 'Food Bowls', hasVariants: true, image: img(11) },
	{ id: 39, name: 'Tuwo Shinkafa', price: { min: 30, max: 90 }, category: 'Food Bowls', hasVariants: true, image: img(0) },
	{ id: 40, name: 'Semovita', price: { min: 25, max: 80 }, category: 'Food Bowls', hasVariants: true, image: img(1) },

	// Event Food Bowls (3)
	{ id: 41, name: 'Amala (Abula)', price: { min: 120, max: 1000 }, category: 'Event Food Bowls', hasVariants: true, image: img(2) },
	{ id: 42, name: 'Jollof Rice Party Pack', price: { min: 150, max: 800 }, category: 'Event Food Bowls', hasVariants: true, image: img(3) },
	{ id: 43, name: 'Full Event Food Pack', price: { min: 500, max: 2000 }, category: 'Event Food Bowls', hasVariants: true, image: img(4) },

	// Events (1)
	{ id: 44, name: 'Corporate Event Catering Package', price: null, category: 'Events', hasVariants: false, readMore: true, image: img(11) },
]
