import { memo } from 'react';
import ProductsTable, { ProductsTableProps } from '../templates/ProductsTable';

interface ProductsProps extends ProductsTableProps {
}

const Products: React.FC<ProductsProps> = (props) => {
  return (
	<ProductsTable 
		products={props.products}
		setProducts={props.setProducts}
		/>
  );
}

export default memo(Products);