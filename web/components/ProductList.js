import ProductCard from "./ProductCard";
import Typography from "@mui/material/Typography";
import { dataIsVerified } from "@/helpers/utils";

export default function ProductsList({ products }) {
  return (
    dataIsVerified(products)
      ? products.map((product) => (
        <ProductCard product={product} key={ product.node.id } />
      ))
      : <Typography variant="body1" align="center" style={{ color: "var(--color-primary)" }}>There are no products in this collection</Typography>
  );
}