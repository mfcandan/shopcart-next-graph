import { Group, GroupPosition } from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

export function ProductList() {
  const { width } = useViewportSize();
  const [position, setPosition] = useState<GroupPosition>();

  useEffect(() => {
    setPosition(width > 800 ? "left" : "center");
  }, []);

  return (
    <>
      <Group position={position}>
        <ProductCard img="./item1.png" />
        <ProductCard img="./item2.png" />
        <ProductCard img="./item3.png" />
        <ProductCard img="./item4.png" />
      </Group>
    </>
  );
}
