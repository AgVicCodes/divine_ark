export default function Footer() {
	return (
		<footer className="border-t border-ark-border py-14">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid md:grid-cols-3 gap-12 mb-12">
					<div>
						<div className="font-serif text-2xl text-ark-cream mb-4">
							<span className="text-ark-gold">Divine's</span> Ark
						</div>
						<p className="text-ark-cream-muted text-sm font-light leading-relaxed font-sans max-w-xs">
							Artisanal catering and event dining for life's most meaningful moments.
						</p>
					</div>

					<div>
						<h4 className="text-xs tracking-[0.2em] uppercase text-ark-cream mb-5 font-sans">
							Navigate
						</h4>
						<ul className="space-y-2.5">
							{['About', 'Services', 'Menu', 'Gallery', 'Contact'].map((item) => (
								<li key={item}>
									<a
										href={`#${item.toLowerCase()}`}
										className="text-ark-cream-muted text-sm hover:text-ark-gold transition-colors font-sans"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-xs tracking-[0.2em] uppercase text-ark-cream mb-5 font-sans">
							Contact
						</h4>
						<div className="space-y-2 text-ark-cream-muted text-sm font-light font-sans">
							<p>Victoria Island, Lagos</p>
							<p>Nigeria</p>
							<p className="pt-3">+234 801 234 5678</p>
							<p>hello@divinesark.ng</p>
						</div>
					</div>
				</div>

				<div className="border-t border-ark-border pt-8 flex flex-wrap justify-between items-center gap-4">
				<p className="text-ark-cream-muted text-xs font-sans">
					© 2024 Divine's Ark Catering. All rights reserved.
				</p>
				<div className="flex gap-6">
					{['Instagram', 'Facebook', 'LinkedIn'].map((s) => (
					<a
						key={s}
						href="#"
						className="text-ark-cream-muted text-xs hover:text-ark-gold transition-colors font-sans tracking-wide"
					>
						{s}
					</a>
					))}
				</div>
				</div>
			</div>
		</footer>
	)
}