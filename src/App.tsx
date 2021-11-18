import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductForm from './components/pages/ProductForm';
import Products from './components/pages/Products';
import Sidebar from './components/templates/sidebar/Sidebar';
import { IProduct } from "./typescript/interfaces/StepAddProduct";
import "./app.css";
import { ReactComponent as MenuMotionIcon } from "./res/menu-motion.svg";
import { getProducts } from './utils/localStorage';

const DEFAUTL_PRODUCTS: IProduct[] = [];

const App = () => {

	const [ products, setProducts ] = useState<IProduct[]>(DEFAUTL_PRODUCTS);

	useEffect(() => {
	const local: IProduct[] = getProducts();
	if (!local)
		return;

	setProducts(local);
	}, []);

	const [ 
	ProductFormPage, 
	HomePage
	] = useMemo(() => [
		<ProductForm 
			setProducts={setProducts} 
			/>,
		<Home />
	], []);

	const ProductsPage = useMemo(() => (
	<Products 
		products={products}
		setProducts={setProducts}
		/>
	), [products]);

	return (
	<div className="container">
		<input id="sidebar" type="checkbox" />
		<div className="sidebar-container">
			<Sidebar /> 
		</div>
		<Routes>
			<Route path="/" element={HomePage}/>
			<Route path="/products/new" element={ProductFormPage}/>
			<Route path="/products" element={ProductsPage} />
		</Routes>
		
		<div className="menu-container">
			<label htmlFor="sidebar">
				<MenuMotionIcon 
					className="menu-icon"
					/>
			</label>
		</div>
			
	</div>
	);
}

export default App;
