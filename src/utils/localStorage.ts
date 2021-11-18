import { IProduct } from "../typescript/interfaces/StepAddProduct";

export const saveProducts = (products: IProduct[]) => {
    const stringfiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringfiedProducts);
}

export const getProducts = () => {
    try {
        const local = localStorage.getItem("products");
        if (!local)
            return;

        const products = JSON.parse(local);
        return products;
    } catch (err) {
        console.error(err);
    }
}