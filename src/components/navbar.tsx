import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { useCart } from "../context/cart_context"

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const { count, setIsOpen } = useCart()
	const location = useLocation()
	const isHome = location.pathname === "/"

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 60)
		window.addEventListener("scroll", handler)
		return () => window.removeEventListener("scroll", handler)
	}, [])

	const href = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`)

	const sectionLinks = [
		{ label: "About", anchor: "about" },
		{ label: "Services", anchor: "services" },
		{ label: "Menu", anchor: "menu" },
		{ label: "Gallery", anchor: "gallery" },
	]

	return (
		<nav
		className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
			scrolled || !isHome
			? "bg-ark-bg/96 backdrop-blur-md border-b border-ark-border"
			: ""
		}`}
		>
		<div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
			<Link
			to="/"
			className="font-serif text-xl tracking-wide text-ark-cream hover:opacity-80 transition-opacity"
			>
			<span className="text-ark-gold">Divine's</span> Ark
			</Link>

			{/* Desktop */}
			<div className="hidden md:flex items-center gap-7">
			{sectionLinks.map(({ label, anchor }) => (
				<a
				key={anchor}
				href={href(anchor)}
				className="text-xs tracking-[0.2em] uppercase text-ark-cream hover:text-ark-gold transition-colors duration-200 font-sans"
				>
				{label}
				</a>
			))}
			<Link
				to="/orders"
				className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-sans ${
				location.pathname === "/orders"
					? "text-ark-gold"
					: "text-ark-cream hover:text-ark-gold"
				}`}
			>
				Orders
			</Link>
			<a
				href={href("contact")}
				className="text-xs tracking-[0.2em] uppercase text-ark-cream hover:text-ark-gold transition-colors duration-200 font-sans"
			>
				Contact
			</a>

			{/* Cart */}
			<button
				onClick={() => setIsOpen(true)}
				className="relative text-ark-cream hover:text-ark-gold transition-colors ml-1"
				aria-label="Open cart"
			>
				<svg
				width="19"
				height="19"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				>
				<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
				<line x1="3" y1="6" x2="21" y2="6" />
				<path d="M16 10a4 4 0 0 1-8 0" />
				</svg>
				{count > 0 && (
				<span className="absolute -top-2 -right-2 w-4 h-4 bg-ark-gold text-ark-bg text-[9px] font-bold rounded-full flex items-center justify-center font-sans leading-none">
					{count > 9 ? "9+" : count}
				</span>
				)}
			</button>

			<a
				href={href("contact")}
				className="ml-1 px-5 py-2.5 border border-ark-gold text-ark-gold text-xs tracking-[0.2em] uppercase font-sans hover:bg-ark-gold hover:text-ark-bg transition-all duration-300"
			>
				Book Now
			</a>
			</div>

			{/* Mobile controls */}
			<div className="md:hidden flex items-center gap-4">
			<button
				onClick={() => setIsOpen(true)}
				className="relative text-ark-cream"
				aria-label="Open cart"
			>
				<svg
				width="19"
				height="19"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				>
				<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
				<line x1="3" y1="6" x2="21" y2="6" />
				<path d="M16 10a4 4 0 0 1-8 0" />
				</svg>
				{count > 0 && (
				<span className="absolute -top-2 -right-2 w-4 h-4 bg-ark-gold text-ark-bg text-[9px] font-bold rounded-full flex items-center justify-center font-sans leading-none">
					{count > 9 ? "9+" : count}
				</span>
				)}
			</button>
			<button
				className="flex flex-col gap-1.5 p-1"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				<span
				className={`block w-6 h-px bg-ark-cream transition-all duration-300 ${
					menuOpen ? "rotate-45 translate-y-2" : ""
				}`}
				/>
				<span
				className={`block w-6 h-px bg-ark-cream transition-all duration-300 ${
					menuOpen ? "opacity-0" : ""
				}`}
				/>
				<span
				className={`block w-6 h-px bg-ark-cream transition-all duration-300 ${
					menuOpen ? "-rotate-45 -translate-y-2" : ""
				}`}
				/>
			</button>
			</div>
		</div>

		{/* Mobile menu */}
		{menuOpen && (
			<div className="md:hidden bg-ark-bg/98 border-t border-ark-border px-6 py-8 flex flex-col gap-6">
			{sectionLinks.map(({ label, anchor }) => (
				<a
				key={anchor}
				href={href(anchor)}
				onClick={() => setMenuOpen(false)}
				className="text-xs tracking-[0.2em] uppercase text-ark-cream hover:text-ark-gold transition-colors font-sans"
				>
				{label}
				</a>
			))}
			<Link
				to="/orders"
				onClick={() => setMenuOpen(false)}
				className={`text-xs tracking-[0.2em] uppercase font-sans ${
				location.pathname === "/orders"
					? "text-ark-gold"
					: "text-ark-cream"
				}`}
			>
				Orders
			</Link>
			<a
				href={href("contact")}
				onClick={() => setMenuOpen(false)}
				className="text-xs tracking-[0.2em] uppercase text-ark-cream hover:text-ark-gold transition-colors font-sans"
			>
				Contact
			</a>
			<a
				href={href("contact")}
				onClick={() => setMenuOpen(false)}
				className="mt-2 py-3 border border-ark-gold text-ark-gold text-xs tracking-[0.2em] uppercase text-center hover:bg-ark-gold hover:text-ark-bg transition-all duration-300 font-sans"
			>
				Book Now
			</a>
			</div>
		)}
		</nav>
	)
}
