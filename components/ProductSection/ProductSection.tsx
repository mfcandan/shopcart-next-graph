import {
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  NativeSelect,
  Text,
} from "@mantine/core";
import { ProductCard } from "../ProductCard/ProductCard";

const useStyles = createStyles((theme) => ({
  productSectionWrapper: {
    fontSize: "26px",
    fontWeight: 700,
  },
  filterSide:{
    background: "red",
    width: 500
  }
}));

export function ProductSection() {
  const { classes } = useStyles();

  return (
    <Container className={classes.productSectionWrapper} size="lg">
      <Grid>
        <Grid.Col lg={4} xl={4} md={4} className={classes.filterSide}></Grid.Col>
        <Grid.Col lg={8} xl={8} md={8} sm={12}>
          <Group position="center" spacing="xl">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
