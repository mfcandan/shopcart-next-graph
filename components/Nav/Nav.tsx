import { Button, Container, createStyles, Header, Image } from "@mantine/core";
import { CartBtn } from "../CartBtn/CartBtn";
import { Logo } from "../Logo/Logo";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "3em 0 2em 0",
    borderBottom: "6px solid",
    borderColor: "#E4E4E4",
  },
  logo: {
    cursor: "pointer",
    width: "12.5em",
  },
}));

export function Nav() {
  const { classes } = useStyles();

  return (
    <Container size="lg" className={classes.header}>
      <Logo />
      <CartBtn />
    </Container>
  );
}
