import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { IProduct } from "../../typescript/interfaces/StepAddProduct";
import ProductsTableHeader from "../molecules/ProductsTableHeader";
import { useMemo, memo } from "react";
import ProductRow from "../molecules/ProductRow";

export interface ProductsTableProps {
    products: IProduct[],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

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
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <ProductsTableHeader />
                <TableBody>
                    {ProductList}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default memo(ProductsTable);
