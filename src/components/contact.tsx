import { useState } from "react"

export default function Contact() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		event: 'wedding',
		date: '',
		guests: '',
		message: '',
	})
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
	}

	const inputClass =
		'w-full bg-transparent border border-ark-border text-ark-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-ark-gold transition-colors duration-200 placeholder:text-ark-cream/20'
	const labelClass = 'text-xs tracking-[0.2em] uppercase text-ark-cream-muted font-sans block mb-2'

	return (
		<section id="contact" className="py-28 lg:py-40 bg-ark-surface relative overflow-hidden">
			<div className="absolute inset-0 opacity-8">
				<img
					src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=1800&h=1000&fit=crop&auto=format"
					alt=""
					aria-hidden="true"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute inset-0 bg-ark-surface/88" />

			<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
					<div>
						<p className="text-ark-gold text-xs tracking-[0.35em] uppercase mb-6 font-sans">
							Let's Create Together
						</p>
						<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ark-cream leading-tight mb-8">
							Plan Your
							<br />
							<em className="italic text-ark-gold">Perfect</em> Event
						</h2>
						<p className="text-ark-cream-muted font-light leading-relaxed mb-10 text-base md:text-lg font-sans">
							Every great event begins with a conversation. Tell us about your occasion and we'll
							craft a proposal that exceeds your vision. Our team responds within 24 hours.
						</p>
						<div className="space-y-4 text-sm font-sans text-ark-cream-muted">
							<div className="flex items-center gap-3">
								<span className="text-ark-gold w-4 text-center">◆</span>
								<span>Victoria Island, Lagos, Nigeria</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-ark-gold w-4 text-center">◆</span>
								<span>+234 801 234 5678</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-ark-gold w-4 text-center">◆</span>
								<span>hello@divinesark.ng</span>
							</div>
						</div>
					</div>

					<div>
						{submitted ? (
						<div className="border border-ark-gold/30 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
							<div className="font-serif text-5xl text-ark-gold mb-6">✓</div>
							<h3 className="font-serif text-2xl text-ark-cream mb-4">Enquiry Received</h3>
							<p className="text-ark-cream-muted font-light font-sans leading-relaxed max-w-xs">
							Thank you, {form.name || 'there'}. We'll be in touch within 24 hours to begin
							planning your event.
							</p>
						</div>
						) : (
						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="grid grid-cols-2 gap-4">
							<div>
								<label className={labelClass}>Your Name</label>
								<input
								required
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
								className={inputClass}
								placeholder="Full name"
								/>
							</div>
							<div>
								<label className={labelClass}>Email</label>
								<input
								required
								type="email"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
								className={inputClass}
								placeholder="you@example.com"
								/>
							</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
							<div>
								<label className={labelClass}>Event Type</label>
								<select
								value={form.event}
								onChange={(e) => setForm({ ...form, event: e.target.value })}
								className="w-full bg-ark-surface border border-ark-border text-ark-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-ark-gold transition-colors"
								>
								<option value="wedding">Wedding</option>
								<option value="corporate">Corporate Event</option>
								<option value="private">Private Dining</option>
								<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label className={labelClass}>Event Date</label>
								<input
								type="date"
								value={form.date}
								onChange={(e) => setForm({ ...form, date: e.target.value })}
								className={inputClass}
								/>
							</div>
							</div>

							<div>
							<label className={labelClass}>Expected Guests</label>
							<input
								value={form.guests}
								onChange={(e) => setForm({ ...form, guests: e.target.value })}
								className={inputClass}
								placeholder="Approximate number"
							/>
							</div>

							<div>
							<label className={labelClass}>Tell Us More</label>
							<textarea
								rows={4}
								value={form.message}
								onChange={(e) => setForm({ ...form, message: e.target.value })}
								className={`${inputClass} resize-none`}
								placeholder="Your vision, dietary needs, or any special requests…"
							/>
							</div>

							<button
							type="submit"
							className="w-full py-4 bg-ark-gold text-ark-bg text-xs tracking-[0.2em] uppercase font-medium hover:bg-ark-gold-light transition-colors duration-300 font-sans"
							>
							Send Enquiry
							</button>
						</form>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}