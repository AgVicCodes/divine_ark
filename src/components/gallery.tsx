export default function Gallery() {
    const photos = [
        {
        src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=540&fit=crop&auto=format',
        alt: 'Elegant catering buffet with silver chafing dishes',
        wide: true,
        },
        {
        src: 'https://images.unsplash.com/photo-1666951833461-71fc128b6810?w=500&h=500&fit=crop&auto=format',
        alt: 'Plate of artfully presented food being served',
        },
        {
        src: 'https://images.unsplash.com/photo-1649615644622-6d83f48e69c5?w=500&h=500&fit=crop&auto=format',
        alt: 'Formal dinner place settings with elegant cutlery',
        },
        {
        src: 'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=500&h=500&fit=crop&auto=format',
        alt: 'Long dining table adorned with flowers and candles',
        },
        {
        src: 'https://images.unsplash.com/photo-1637059395523-d5a35541d544?w=800&h=540&fit=crop&auto=format',
        alt: 'Professional catering food presentation on serving table',
        wide: true,
        },
    ]

    return (
        <section id="gallery" className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
                <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-4 font-sans">Visual Journal</p>
                <h2 className="font-serif text-4xl md:text-5xl text-ark-cream">Gallery</h2>
            </div>
            <a
                href="#contact"
                className="text-ark-gold text-xs tracking-[0.2em] uppercase font-sans border-b border-ark-gold/40 pb-0.5 hover:border-ark-gold transition-colors"
            >
                Work with us →
            </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {photos.map((photo) => (
                <div
                key={photo.src}
                className={`${photo.wide ? 'md:col-span-2' : ''} aspect-square overflow-hidden group bg-ark-muted`}
                >
                <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                </div>
            ))}
            </div>
        </div>
        </section>
    )
}
