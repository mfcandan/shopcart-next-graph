import {
  BackgroundImage,
  Box,
  createStyles,
  Image,
  Stack,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { AddBtn } from "../AddBtn/AddBtn";

const useStyles = createStyles((theme) => ({
  cardWrapper: {
    maxWidth: "280px",
    height: "400px",
    padding: 0,
    "@media (max-width: 800px)": {
      padding: "1rem",
    },
  },
  featuredBadge: {
    background: "white",
    width: "128px",
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "center"
  },
  addBtn: {
    height: "100%",
  },
}));

export function ProductCard() {
  const { classes } = useStyles();
  const { hovered, ref } = useHover();

  console.log(hovered);

  return (
    <>
      <BackgroundImage
        src="./item1.png"
        ref={ref}
        className={classes.cardWrapper}
      >
        <Stack justify="space-between" className={classes.addBtn}>
          <Box className={classes.featuredBadge}>Best Seller</Box>
          {hovered && <AddBtn onClick={() => alert("added")} />}
        </Stack>
      </BackgroundImage>
    </>
  );
}
