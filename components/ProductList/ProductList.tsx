import { Group, GroupPosition } from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useStore } from "../../store/productStore";

interface IProductList {
  products: any;
}

export function ProductList() {
  const { width } = useViewportSize();
  const [position, setPosition] = useState<GroupPosition>();
  const { products } = useStore();

  useEffect(() => {
    setPosition(width > 800 ? "left" : "center");
  }, []);

  return (
    <>
      <Group position={position}>
        {products?.map((product: any) => (
          <ProductCard key={product.ts} product={product} />
        ))}
      </Group>
    </>
  );
}
