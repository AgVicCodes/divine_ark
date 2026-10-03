import { useCart } from '../context/cart_context'

export default function CartDrawer() {
	const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart()

	if (!isOpen) return null

	return (
		<>
			<div className="fixed inset-0 bg-black/60 z-[60]" onClick={() => setIsOpen(false)} />
			<div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-ark-surface border-l border-ark-border z-[70] flex flex-col">
				<div className="flex items-center justify-between px-6 py-5 border-b border-ark-border">
				<h2 className="font-serif text-xl text-ark-cream">Your Cart</h2>
				<button
					onClick={() => setIsOpen(false)}
					className="text-ark-cream-muted hover:text-ark-cream transition-colors p-1"
					aria-label="Close cart"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
					<path d="M18 6 6 18M6 6l12 12" />
					</svg>
				</button>
				</div>

				{items.length === 0 ? (
				<div className="flex-1 flex flex-col items-center justify-center text-center px-8">
					<svg
					width="48" height="48"
					className="text-ark-border mb-5"
					viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
					>
					<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
					<line x1="3" y1="6" x2="21" y2="6" />
					<path d="M16 10a4 4 0 0 1-8 0" />
					</svg>
					<p className="font-serif text-ark-cream text-lg mb-2">Your cart is empty</p>
					<p className="text-ark-cream-muted text-sm font-sans font-light">
					Browse our menu and add items to get started.
					</p>
				</div>
				) : (
				<>
					<div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
						{items.map((item) => (
							<div key={item.cartId} className="flex gap-3 py-4 border-b border-ark-border">
								<div className="flex-1 min-w-0">
									<p className="text-ark-cream text-sm font-sans font-medium truncate">{item.name}</p>
									{item.variant && (
										<p className="text-ark-cream-muted text-xs mt-0.5 font-sans">{item.variant}</p>
									)}
									<p className="text-ark-gold text-sm mt-1 font-sans">£{item.price.toFixed(2)}</p>
								</div>
								<div className="flex items-center gap-1.5 shrink-0">
									<button
										onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
										className="w-7 h-7 border border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold transition-colors text-sm flex items-center justify-center"
									>
										−
									</button>
									<span className="w-6 text-center text-ark-cream text-sm font-sans tabular-nums">
										{item.quantity}
									</span>
									<button
										onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
										className="w-7 h-7 border border-ark-border text-ark-cream-muted hover:border-ark-gold hover:text-ark-gold transition-colors text-sm flex items-center justify-center"
									>
										+
									</button>
								</div>
								<button
									onClick={() => removeItem(item.cartId)}
									className="text-ark-cream-muted hover:text-red-400 transition-colors shrink-0 self-start pt-1"
									aria-label="Remove item"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
										<path d="M18 6 6 18M6 6l12 12" />
									</svg>
								</button>
							</div>
						))}
					</div>

					<div className="px-6 py-6 border-t border-ark-border">
						<div className="flex justify-between items-baseline mb-5">
							<span className="text-ark-cream-muted text-sm font-sans">Order Total</span>
							<span className="font-serif text-ark-cream text-2xl">£{total.toFixed(2)}</span>
						</div>
						<button className="w-full py-4 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium hover:bg-ark-gold-light transition-colors duration-300 font-sans">
							Proceed to Checkout
						</button>
						<p className="text-center text-ark-cream-muted text-xs mt-3 font-sans">
							Delivery & taxes calculated at checkout
						</p>
					</div>
				</>
				)}
			</div>
		</>
	)
}
