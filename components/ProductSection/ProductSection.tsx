import {
  Center,
  Container,
  createStyles,
  Grid,
  Pagination,
} from "@mantine/core";
import { FilterSide } from "../FilterSide/FilterSide";
import { ProductList } from "../ProductList/ProductList";
import useSWR from "swr";
import { IProduct, useStore } from "../../store/productStore";
import { useEffect } from "react";

export function ProductSection() {
  const { classes } = useStyles();
  const { setProducts } = useStore();

  const fetcher = (args: any) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR("/api/get-products", fetcher);

  useEffect(() => {
    data && setProducts(data.products);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Container className={classes.productSectionWrapper} size="lg">
      <Grid>
        <Grid.Col lg={3} xl={3} md={3} sm={12} className={classes.filterSide}>
          <FilterSide />
        </Grid.Col>
        <Grid.Col lg={9} xl={9} md={9} sm={12}>
          <ProductList />
        </Grid.Col>
      </Grid>
      <Center my="3em">
        <Pagination total={4} color="dark" radius="xl" />
      </Center>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  productSectionWrapper: {
    fontSize: "26px",
    fontWeight: 700,
  },
  filterSide: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));
