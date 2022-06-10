import { Group } from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList() {
  return (
    <>
      <Group position="center" spacing="xl">
        <ProductCard img="./item1.png" />
        <ProductCard img="./item2.png" />
        <ProductCard img="./item3.png" />
        <ProductCard img="./item4.png" />
      </Group>
    </>
  );
}
