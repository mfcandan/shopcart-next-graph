import {
  Box,
  Container,
  createStyles,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IProduct, useStore } from "../../store/productStore";
import { AddBtn } from "../AddBtn/AddBtn";
import { HeroAboutSec } from "../HeroAboutSec/HeroAboutSec";

export function HeroProduct() {
  const { classes } = useStyles();
  const { products } = useStore();

  let featuredProduct = products?.find(
    (product: IProduct) => product.data.featured === true
  );

  return (
    <>
      <Container size="lg" p="0" className={classes.heroSec}>
        <Group position="apart" className={classes.title}>
          <Title order={1}>{featuredProduct?.data?.name}</Title>
          <Box className={classes.btnWeb}>
            {featuredProduct && <AddBtn product={featuredProduct} />}
          </Box>
        </Group>
        <Image
          width="89vw"
          height="45vw"
          fit="cover"
          className={classes.featuredImage}
          src={featuredProduct?.data?.image?.src}
          alt={featuredProduct?.data?.image?.alt}
        />
        <Text className={classes.textContent}>Photo of the day</Text>
        <Box className={classes.btnMobile}>
          {featuredProduct && <AddBtn product={featuredProduct} />}
        </Box>
      </Container>
      {featuredProduct && <HeroAboutSec featuredProduct={featuredProduct} />}
    </>
  );
}

const useStyles = createStyles((theme) => ({
  heroSec: {
    "@media (max-width: 800px)": {
      padding: "0 1rem",
    },
  },
  title: {
    marginTop: "4rem",
    marginBottom: "1.2rem",
    "@media (max-width: 800px)": {
      marginTop: "2rem 0",
    },
  },
  textContent: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: "-3.5rem",
    padding: "1rem 3rem",
    fontSize: "1.2rem",
    "@media (max-width: 800px)": {
      padding: "20px 48px",
      fontSize: "14px",
    },
  },
  btnWeb: {
    display: "block",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  btnMobile: {
    display: "none",
    "@media (max-width: 800px)": {
      display: "block",
    },
  },
  featuredImage: {
    "@media (max-width: 800px)": {
      height: "50vw",
    },
  },
}));
