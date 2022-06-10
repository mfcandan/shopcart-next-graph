import {
  Center,
  Container,
  createStyles,
  Grid,
  Pagination,
} from "@mantine/core";
import { ProductList } from "../ProductList/ProductList";

const useStyles = createStyles((theme) => ({
  productSectionWrapper: {
    fontSize: "26px",
    fontWeight: 700,
  },
  filterSide: {
    background: "red",
    width: 500,
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));

export function ProductSection() {
  const { classes } = useStyles();

  return (
    <Container className={classes.productSectionWrapper} size="lg">
      <Grid>
        <Grid.Col
          lg={4}
          xl={4}
          md={4}
          sm={12}
          className={classes.filterSide}
        ></Grid.Col>
        <Grid.Col lg={8} xl={8} md={8} sm={12}>
          <ProductList />
        </Grid.Col>
      </Grid>
      <Center my="3em">
        <Pagination total={4} color="dark" radius="xl" />
      </Center>
    </Container>
  );
}
