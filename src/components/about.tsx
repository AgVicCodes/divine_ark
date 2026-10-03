export default function About() {
    return (
        <section id="about" className="py-28 lg:py-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-5 font-sans">Our Philosophy</p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ark-cream leading-tight mb-8">
                            Food that{' '}
                            <em className="italic text-ark-gold">honors</em>
                            <br />
                            the occasion
                        </h2>
                        <div className="space-y-5 text-ark-cream-muted font-sans font-light leading-relaxed text-base md:text-lg">
                            <p>
                                Divine's Ark was founded on a single conviction: that a meal shared at the right moment
                                can change everything. We source from trusted local farms, craft every dish by hand, and
                                treat each event — from an intimate dinner for twelve to a grand reception of five hundred
                                — with the same unwavering devotion.
                            </p>
                            <p>
                                Our chefs bring together West African culinary heritage and contemporary European
                                technique, producing menus that feel both rooted and surprising. We believe catering
                                should feel like hospitality, not logistics.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ark-border pt-10">
                            {[
                                ['12+', 'Years of Service'],
                                ['3,000+', 'Events Catered'],
                                ['98%', 'Client Satisfaction'],
                            ].map(([stat, label]) => (
                                <div key={label}>
                                    <div className="font-serif text-3xl text-ark-gold mb-1">{stat}</div>
                                    <div className="text-xs text-ark-cream-muted tracking-wide font-sans uppercase leading-tight">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-[3/4] overflow-hidden bg-ark-muted">
                            <img
                                src="https://images.unsplash.com/photo-1663530761401-15eefb544889?w=800&h=1067&fit=crop&auto=format"
                                alt="Chef carefully pouring sauce over a beautifully plated dish"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full border border-ark-gold/25 -z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}