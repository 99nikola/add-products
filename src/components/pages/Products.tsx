import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import ProductsTable, { ProductsTableProps } from '../templates/ProductsTable';

interface ProductsProps extends ProductsTableProps {
}

const Products: React.FC<ProductsProps> = (props) => {
  return (
	<div>
		<ProductsTable 
			products={props.products}
			setProducts={props.setProducts}
			/>
		<Link 
            style={{ textDecoration: "none" }}
			to="/products/new"
			>
			<Button text="Add new product" />
		</Link>
	</div>
  );
}

export default Products;