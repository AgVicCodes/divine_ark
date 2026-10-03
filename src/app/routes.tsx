import { createBrowserRouter } from 'react-router'
import Root from '../layouts/root'
import HomePage from '../pages/home_page'
import OrdersPage from '../pages/orders_page'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		children: [
			{ index: true, Component: HomePage },
			{ path: 'orders', Component: OrdersPage },
		],
	},
])