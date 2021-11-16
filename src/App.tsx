import { useMemo } from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';
import ProductForm from './components/pages/ProductForm';

const App = () => {

  const ProductFormPage = useMemo(() => <ProductForm />, []);
  const HomePage = useMemo(() => <Home />, []);

  return (
    <Routes>
      <Route path="/" element={HomePage}/>
      <Route path="/products/new" element={ProductFormPage}/>
    </Routes>
  );
}

export default App;
