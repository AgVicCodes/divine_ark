import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
	cartId: string
	productId: number
	name: string
	variant?: string
	price: number
	quantity: number
}

interface CartContextType {
	items: CartItem[]
	addItem: (item: Omit<CartItem, 'cartId'>) => void
	removeItem: (cartId: string) => void
	updateQuantity: (cartId: string, qty: number) => void
	count: number
	total: number
	isOpen: boolean
	setIsOpen: (v: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([])
	const [isOpen, setIsOpen] = useState(false)

	const addItem = (item: Omit<CartItem, 'cartId'>) => {
		const cartId = `${item.productId}-${item.variant ?? 'default'}`
		setItems((prev) => {
		const existing = prev.find((i) => i.cartId === cartId)
		if (existing) {
			return prev.map((i) =>
			i.cartId === cartId ? { ...i, quantity: i.quantity + item.quantity } : i
			)
		}
		return [...prev, { ...item, cartId }]
		})
	}

	const removeItem = (cartId: string) =>
		setItems((prev) => prev.filter((i) => i.cartId !== cartId))

	const updateQuantity = (cartId: string, qty: number) => {
		if (qty <= 0) return removeItem(cartId)
		setItems((prev) => prev.map((i) => (i.cartId === cartId ? { ...i, quantity: qty } : i)))
	}

	const count = items.reduce((acc, i) => acc + i.quantity, 0)
	const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0)

	return (
		<CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, count, total, isOpen, setIsOpen }}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const ctx = useContext(CartContext)
	if (!ctx) throw new Error('useCart must be used within CartProvider')
	return ctx
}
