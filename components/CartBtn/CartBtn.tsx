import { Box, createStyles, Group, Image, Indicator } from "@mantine/core";
import { useStore } from "../../store/productStore";
import { CartView } from "../CartView/CartView";

export function CartBtn() {
  const { classes } = useStyles();
  const { cartItems, isCartModalOpen, setIsCartModalOpen } = useStore();

  return (
    <Box className={classes.button}>
      <Group position="center" onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
        <Indicator
          disabled={cartItems.length < 1}
          color="black"
          position="bottom-end"
          radius="xs"
          size={20}
          label={cartItems.length}
        >
          <Image
            className={classes.cartImage}
            src="./shopping-cart.svg"
            alt="Shopping Cart"
          />
        </Indicator>
      </Group>
      <CartView />
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "4em 0 2em 0",
    borderBottom: "6px solid",
    borderColor: "#E4E4E4",
  },
  button: {
    cursor: "pointer",
  },
  cartImage: {
    maxWidth: "4em",
    "@media (max-width: 800px)": {
      maxWidth: "2rem",
    },
  },
}));
