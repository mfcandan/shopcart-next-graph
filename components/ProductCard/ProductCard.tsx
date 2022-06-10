import { BackgroundImage, Box, createStyles, Stack } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { AddBtn } from "../AddBtn/AddBtn";

interface IProductCard {
    img: string
  }

  export function ProductCard({ img }: IProductCard) {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <Stack>
      <BackgroundImage
        src={img}
        ref={ref}
        className={classes.cardWrapper}
      >
        <Stack justify="space-between" className={classes.addBtn}>
          <Box className={classes.featuredBadge}>Best Seller</Box>
          {hovered && <AddBtn onClick={() => alert("added")} />}
        </Stack>
      </BackgroundImage>
      <Box className={classes.productDetails}>
        <Box className={classes.productCategory}>People</Box>
        <Box className={classes.productTitle}>Red Bench</Box>
        <Box className={classes.price}>$3.89 </Box>
      </Box>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
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