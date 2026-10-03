import { useState } from "react"

export default function Services() {
    const [active, setActive] = useState(0)

    const services = [
        {
        label: '01',
        title: 'Weddings & Celebrations',
        description:
            'Your wedding deserves a feast as extraordinary as the day itself. We work closely with couples to design custom menus — from the cocktail hour through the final dessert course — that reflect your story and delight every guest at the table.',
        details: [
            'Menu consultation & tastings',
            'Full-service setup & breakdown',
            'Dietary accommodations',
            'Rentals coordination',
            'On-site chef team',
        ],
        image:
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=600&fit=crop&auto=format',
        alt: 'Elegant wedding reception with wine glasses and table settings',
        },
        {
        label: '02',
        title: 'Corporate Events',
        description:
            'Impress clients, celebrate teams, and elevate every company gathering. From board lunches to large-scale conference dinners, we deliver professional service and sophisticated menus that leave a lasting impression on every attendee.',
        details: [
            'Breakfast & lunch packages',
            'Conference buffets',
            'Private client dinners',
            'Brand-aligned presentations',
            'Nationwide delivery',
        ],
        image:
            'https://images.unsplash.com/photo-1576842546422-60562b9242ae?w=900&h=600&fit=crop&auto=format',
        alt: 'Professional corporate food spread on display table',
        },
        {
        label: '03',
        title: 'Private Dining',
        description:
            'An intimate dinner party, a milestone birthday, a family reunion. Private events call for personal attention. We bring a fully staffed kitchen to your home or chosen venue, leaving nothing to chance and every moment memorable.',
        details: [
            'In-home chef experience',
            'Multi-course tasting menus',
            'Wine pairing service',
            'Waitstaff included',
            'Post-event cleanup',
        ],
        image:
            'https://images.unsplash.com/photo-1562050344-f7ad946cee35?w=900&h=600&fit=crop&auto=format',
        alt: 'Long candlelit dining table set for an elegant private dinner',
        },
    ]

    const svc = services[active]

    return (
        <section id="services" className="py-28 lg:py-40 bg-ark-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
                <div>
                    <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-4 font-sans">What We Offer</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-ark-cream">Our Services</h2>
                </div>
                <div className="flex">
                    {services.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-sans border transition-all duration-300 ${
                        active === i
                            ? 'bg-ark-gold text-ark-bg border-ark-gold'
                            : 'text-ark-cream-muted border-ark-border hover:text-ark-gold hover:border-ark-gold'
                        }`}
                    >
                        {s.label}
                    </button>
                    ))}
                </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-ark-cream mb-6">{svc.title}</h3>
                    <p className="text-ark-cream-muted font-light leading-relaxed mb-10 text-base md:text-lg font-sans">
                    {svc.description}
                    </p>
                    <ul className="space-y-3.5">
                    {svc.details.map((d) => (
                        <li key={d} className="flex items-center gap-4 text-ark-cream-muted text-sm font-sans">
                        <span className="w-5 h-px bg-ark-gold flex-shrink-0" />
                        {d}
                        </li>
                    ))}
                    </ul>
                    <a
                    href="#contact"
                    className="inline-block mt-12 px-7 py-3.5 border border-ark-gold text-ark-gold text-xs tracking-[0.2em] uppercase font-sans hover:bg-ark-gold hover:text-ark-bg transition-all duration-300"
                    >
                    Enquire Now
                    </a>
                </div>

                <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden bg-ark-muted">
                    <img
                        key={active}
                        src={svc.image}
                        alt={svc.alt}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div className="absolute bottom-6 left-6 bg-ark-bg/85 backdrop-blur-sm px-5 py-3 border-l-2 border-ark-gold">
                    <p className="font-serif text-ark-cream text-sm italic">"Every event, a masterpiece."</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}