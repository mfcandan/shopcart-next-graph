import {
  Box,
  Button,
  Center,
  createStyles,
  Group,
  Image,
  Stack,
  Title,
} from "@mantine/core";
import { useStore } from "../../store/productStore";
import { CartItem } from "../CartItem/CartItem";

export function CartView() {
  const { classes } = useStyles();
  const { cartItems, clearCart, isCartModalOpen, setIsCartModalOpen } =
    useStore();

  const handleClear = () => {
    clearCart();
    setIsCartModalOpen(false);
  };

  return (
    <>
      {isCartModalOpen && (
        <Box className={classes.cartView}>
          <Stack>
            <Group
              position="right"
              onClick={() => setIsCartModalOpen(false)}
              className={classes.close}
            >
              <Image
                src="close.svg"
                alt="close_btn"
                width="1.5em"
                height="1.5em"
                p="1em"
              />
            </Group>
            {cartItems.length > 0 ? (
              cartItems?.map((cartItem) => (
                <CartItem key={cartItem?.ref} cartItem={cartItem} />
              ))
            ) : (
              <Center>
                <Title order={3} py="1em">
                  Cart is empty!
                </Title>
              </Center>
            )}
            {
              <Button
                onClick={() => handleClear()}
                className={classes.clearBtn}
                variant="outline"
                color="dark"
                radius="xs"
                size="lg"
                uppercase
              >
                CLEAR
              </Button>
            }
          </Stack>
        </Box>
      )}
    </>
  );
}

const useStyles = createStyles((theme) => ({
  cartView: {
    width: "440px",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    zIndex: 100,
    right: "4em",
    border: "4px solid",
    borderColor: "#E4E4E4",
    marginTop: "2em",
    cursor: "default",
    "@media (max-width: 800px)": {
      right: 0,
      width: "100vw",
      marginTop: "-3em",
    },
  },
  clearBtn: {
    border: "4px solid",
    margin: "0 1em 1em 1em",
  },
  close: {
    cursor: "pointer",
  },
}));
