import { Button, Container, createStyles, Header, Image } from "@mantine/core";
import { CartBtn } from "../CartBtn/CartBtn";

interface IAddBtn {
  onClick: Function;
}

const useStyles = createStyles((theme) => ({
  btn: {
    backgroundColor: "black",
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: "0.2em",
    padding: "0.1em 1.5em 0.1em 1.5em",
  },
}));

export function AddBtn({ onClick }: IAddBtn) {
  const { classes } = useStyles();

  return (
    <>
      <Button
        onClick={() => onClick()}
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
