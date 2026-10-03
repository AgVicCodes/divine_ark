export default function MenuHighlights() {
    const dishes = [
        {
        name: 'Braised Short Rib',
        category: 'Mains',
        description: 'Slow-braised 18 hours in red wine reduction, truffle parsnip purée, crispy shallots',
        image: 'https://images.unsplash.com/photo-1750943079462-87bad58cf43e?w=800&h=540&fit=crop&auto=format',
        alt: 'Chef presenting a beautifully plated dish',
        },
        {
        name: 'Seared Sea Bass',
        category: 'Seafood',
        description: 'Pan-seared fillet, lemon caper beurre blanc, micro herbs, grilled asparagus tips',
        image: 'https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=800&h=540&fit=crop&auto=format',
        alt: 'Elegantly plated sea bass with vegetables',
        },
        {
        name: 'Jollof Risotto',
        category: 'Signature',
        description:
            'West African jollof spice meets Italian technique — our most-requested creation',
        image: 'https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?w=800&h=540&fit=crop&auto=format',
        alt: 'Assorted elegant catering dishes',
        },
        {
        name: 'Grand Feast Board',
        category: 'Sharing',
        description:
            'Abundant charcuterie, aged cheeses, house pickles, artisan breads, and seasonal preserves',
        image: 'https://images.unsplash.com/photo-1633424414664-c24a6d28086b?w=800&h=540&fit=crop&auto=format',
        alt: 'Abundant feast sharing board',
        },
    ]

    return (
        <section id="menu" className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
            <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-4 font-sans">Taste the Difference</p>
            <h2 className="font-serif text-4xl md:text-6xl text-ark-cream">Menu Highlights</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-ark-border">
            {dishes.map((dish) => (
                <div key={dish.name} className="group relative overflow-hidden bg-ark-bg">
                <div className="aspect-video overflow-hidden bg-ark-muted">
                    <img
                    src={dish.image}
                    alt={dish.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ark-bg/95 via-ark-bg/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="text-ark-gold text-xs tracking-[0.25em] uppercase font-sans mb-2 block">
                    {dish.category}
                    </span>
                    <h3 className="font-serif text-2xl text-ark-cream mb-2">{dish.name}</h3>
                    <p className="text-ark-cream-muted text-sm font-light leading-relaxed max-w-xs font-sans">
                    {dish.description}
                    </p>
                </div>
                </div>
            ))}
            </div>

            <div className="text-center mt-12">
            <a
                href="#contact"
                className="inline-block px-10 py-4 border border-ark-gold text-ark-gold text-xs tracking-[0.2em] uppercase hover:bg-ark-gold hover:text-ark-bg transition-all duration-300 font-sans"
            >
                Request Full Menu
            </a>
            </div>
        </div>
        </section>
    )
}