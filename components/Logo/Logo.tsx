import { Button, Container, createStyles, Header, Image } from "@mantine/core";
import { CartBtn } from "../CartBtn/CartBtn";

interface ILogo {
  width?: string | number;
}

const useStyles = createStyles((theme, { width }: ILogo) => ({
  logo: {
    cursor: "pointer",
    width: width ? width : "12.5em",
    maxWidth: "12.5em",
    "@media (max-width: 800px)": {
      maxWidth: "140px",
    },
  },
}));

export function Logo({ width }: ILogo) {
  const { classes } = useStyles({ width });

  return (
    <>
      <Image className={classes.logo} src="./mylogo.svg" alt="Bejamas Logo" />
    </>
  );
}
