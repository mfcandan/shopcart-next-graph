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
    "@media (max-width: 800px)": {
      padding: "1rem 2rem",
    },
  },
  logo: {
    cursor: "pointer",
    maxWidth: "12.5em",
    "@media (max-width: 800px)": {
      maxWidth: "140px",
    },
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
