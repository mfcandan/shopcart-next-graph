import { Group } from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";
import { useViewportSize } from "@mantine/hooks";

export function ProductList() {
  const { width } = useViewportSize();
  return (
    <>
      <Group position={width ? (width > 800 ? "left" : "center") : "left"}>
        <ProductCard img="./item1.png" />
        <ProductCard img="./item2.png" />
        <ProductCard img="./item3.png" />
        <ProductCard img="./item4.png" />
      </Group>
    </>
  );
}
