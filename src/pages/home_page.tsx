import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import MenuHighlights from "../components/menu_highlights";

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
        {/* <Footer /> */}
        </div>
    )
}