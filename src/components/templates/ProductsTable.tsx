import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import { useMemo, memo } from "react";
import ProductRow from "../molecules/ProductRow";
import Table from "../organisms/Table";

export interface ProductsTableProps {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

const header = [ "Product name", "Description", "Price", "Quantity", "Remove", "Edit" ];

const ProductsTable: React.FC<ProductsTableProps> = (props) => {

    const ProductList = useMemo(() => (
        props.products.map(product => (
            <ProductRow 
                key={product.id}
                product={product}
                setProducts={props.setProducts} 
                />
        ))
    ), [props.products]);

    return (
        <Table 
            header={header}
            body={ProductList}
            />
    );
}

export default memo(ProductsTable);
