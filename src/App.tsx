import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductForm from './components/pages/ProductForm';
import Products from './components/pages/Products';
import { IProduct } from "./typescript/interfaces/StepAddProduct";

const DEFAUTL_PRODUCTS: IProduct[] = [];

const App = () => {

  const [ products, setProducts ] = useState<IProduct[]>(DEFAUTL_PRODUCTS);

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
    <Routes>
      <Route path="/" element={HomePage}/>
      <Route path="/products/new" element={ProductFormPage}/>
      <Route path="/products" element={ProductsPage} />
    </Routes>
  );
}

export default App;
