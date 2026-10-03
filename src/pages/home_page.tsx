import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import MenuHighlights from "../components/menu_highlights";
import Testimonials from "../components/testimonials";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function App() {
    return (
        <div className = "bg-ark-bg text-ark-cream font-sans min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MenuHighlights />
        <Testimonials />
        <Gallery />
        <Contact />
        <Footer />
        </div>
    )
}