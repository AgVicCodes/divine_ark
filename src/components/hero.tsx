export default function Hero() {
    return (
        <section className="relative h-screen min-h-[680px] flex items-center pt-12 overflow-hidden">
            <img
                // src="src/images/buffet.jpg"
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1800&h=1200&fit=crop&auto=format"
                alt="An abundant catering buffet spread with silver chafing dishes"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-ark-bg/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-ark-bg via-ark-bg/55 to-ark-bg/10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                    <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-6 font-sans">
                        Artisanal Catering &amp; Event Dining
                    </p>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-ark-cream leading-[0.88] mb-7">
                        Divine's
                        <br />
                        <em className="text-ark-gold not-italic italic">Ark</em>
                    </h1>
                    <p className="text-ark-cream-muted text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-sans font-light">
                        Where every gathering becomes a feast worth remembering. Bespoke menus, impeccable
                        service, and food that draws people close.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium hover:bg-ark-gold-light transition-colors duration-300 font-sans"
                        >
                            Book an Event
                        </a>
                        <a
                            href="#menu"
                            className="px-8 py-4 border border-ark-cream/25 text-ark-cream text-xs tracking-[0.2em] uppercase hover:border-ark-gold hover:text-ark-gold transition-all duration-300 font-sans"
                        >
                            View Menu
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-3">
                <span
                    className="text-xs tracking-[0.2em] uppercase text-ark-cream-muted font-sans"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    Scroll
                </span>
                <div className="w-px h-14 bg-gradient-to-b from-ark-gold/60 to-transparent" />
            </div>
        </section>
    )
}