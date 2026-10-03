import { useState, useEffect } from "react"

export default function Testimonials() {
    const testimonials = [
        {
        quote:
            "Divine's Ark didn't just cater our wedding — they made it transcendent. Every single guest was raving about the food.",
        author: 'Adaeze & Kofi Mensah',
        occasion: 'Wedding Reception, Lagos, 2024',
        },
        {
        quote:
            "We've used Divine's Ark for every major corporate event for three years. The consistency and professionalism is truly unmatched.",
        author: 'Chukwuemeka Obi',
        occasion: 'Director, Helix Capital Partners',
        },
        {
        quote:
            'I asked for something my family had never seen before. What they created brought my grandmother to tears — in the very best way.',
        author: 'Fatima Al-Rashid',
        occasion: '80th Birthday Celebration',
        },
    ]

    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section className="py-28 lg:py-40 bg-ark-surface relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="font-serif text-[18vw] text-ark-gold/[0.04] leading-none">Ark</span>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
                <p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-14 font-sans">What Our Clients Say</p>

                <div className="min-h-[160px] flex items-center justify-center mb-10">
                <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ark-cream italic leading-relaxed transition-opacity duration-500">
                    "{testimonials[active].quote}"
                </blockquote>
                </div>

                <div className="mb-10">
                <div className="font-sans font-medium text-ark-cream text-sm tracking-wide">
                    {testimonials[active].author}
                </div>
                <div className="text-ark-cream-muted text-xs tracking-wide mt-1.5 font-sans">
                    {testimonials[active].occasion}
                </div>
                </div>

                <div className="flex justify-center gap-3 items-center">
                {testimonials.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-px transition-all duration-400 ${
                        i === active ? 'w-10 bg-ark-gold' : 'w-3 bg-ark-border hover:bg-ark-gold/40'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}
