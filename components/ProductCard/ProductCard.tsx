import { BackgroundImage, Box, createStyles, Stack } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useEffect } from "react";
import { useStore } from "../../store/productStore";
import { AddBtn } from "../AddBtn/AddBtn";

interface IProductCard {
  product: any;
}

const currencies = {
  USD: "USD",
  EURO: "EURO",
};

export function ProductCard({ product }: IProductCard) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  const handleCurrency = () => {
    switch (product?.data?.currency) {
      case currencies.USD:
        return "$";
      case currencies.EURO:
        return "€";
      default:
        break;
    }
  };

  return (
    <Stack>
      {product?.data && (
        <Box className={classes.productCard}>
          <BackgroundImage
            src={product?.data?.image?.src}
            ref={ref}
            key={product?.ts}
            className={classes.cardWrapper}
          >
            <Stack
              justify={product?.data?.bestseller ? "space-between" : "flex-end"}
              className={classes.addBtn}
            >
              {product?.data?.bestseller && (
                <Box className={classes.featuredBadge}>Best Seller</Box>
              )}
              {hovered && <AddBtn product={product} />}
            </Stack>
          </BackgroundImage>
          <Box className={classes.productDetails}>
            <Box className={classes.productCategory}>
              {product?.data?.category}
            </Box>
            <Box className={classes.productTitle}>{product?.data?.name}</Box>
            <Box className={classes.price}>
              {handleCurrency()} {product?.data?.price}
            </Box>
          </Box>
        </Box>
      )}
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  productCard: {
    "@media (min-width: 800px)": {
      width: "30vw",
    },
  },
  cardWrapper: {
    minWidth: "280px",
    height: "400px",
    "@media (max-width: 800px)": {
      margin: "0 1rem",
      width: "90vw",
      height: "400px",
    },
  },
  featuredBadge: {
    background: "white",
    width: "128px",
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "center",
  },
  addBtn: {
    height: "100%",
  },
  productDetails: {
    fontSize: "22px",
    color: "#656565",
    margin: 0,
    "@media (max-width: 800px)": {
      margin: "0 1rem",
      fontSize: "22px",
      paddingBottom: "1rem",
    },
  },
  productCategory: {
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "34px",
  },
  productTitle: {
    color: "black",
    fontSize: "34px",
    lineHeight: "36px",
    "@media (max-width: 800px)": {
      margin: "1rem 0",
    },
  },
  price: {
    fontSize: "28px",
    fontWeight: 400,
    lineHeight: "32px",
  },
}));
