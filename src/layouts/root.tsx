import { Outlet } from 'react-router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CartDrawer from '../components/cart_drawer';
import { CartProvider } from '../context/cart_context';

export default function Root() {
	return (
		<CartProvider>
			<div className="bg-ark-bg text-ark-cream font-sans min-h-screen">
				<Navbar />
				<Outlet />
				<Footer />
				<CartDrawer />
			</div>
		</CartProvider>
	)
}