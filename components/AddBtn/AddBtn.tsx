import { Button, Container, createStyles, Header, Image } from "@mantine/core";
import { IProduct, useStore } from "../../store/productStore";
import { CartBtn } from "../CartBtn/CartBtn";

interface IAddBtn {
  product: IProduct;
}

export function AddBtn({ product }: IAddBtn) {
  const { classes } = useStyles();
  const { cartItems, addToCartProduct, isProductExist, setIsCartModalOpen } =
    useStore();

  const handleAddBtn = () => {
    if (!isProductExist(product?.ref, cartItems)) {
      addToCartProduct(product);
      setIsCartModalOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={() => handleAddBtn()}
        className={classes.btn}
        color="dark"
        radius="xs"
        size="xl"
        uppercase
      >
        ADD TO CART
      </Button>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: "black",
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: "0.2em",
    padding: "0.1em 1.5em 0.1em 1.5em",
    "@media (max-width: 800px)": {
      width: "100%",
      marginTop: "1em",
    },
  },
}));
