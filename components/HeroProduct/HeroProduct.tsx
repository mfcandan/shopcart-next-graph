import {
  Box,
  Container,
  createStyles,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { AddBtn } from "../AddBtn/AddBtn";
import { HeroAboutSec } from "../HeroAboutSec/HeroAboutSec";

const useStyles = createStyles((theme) => ({
  heroSec: {
    "@media (max-width: 800px)": {
      padding: "0 1rem",
    },
  },
  title: {
    marginTop: "4rem",
    marginBottom: "1.2rem",
    "@media (max-width: 800px)": {
      marginTop: "2rem 0",
    },
  },
  textContent: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: "-3.5rem",
    padding: "1rem 3rem",
    fontSize: "1.2rem",
    "@media (max-width: 800px)": {
      padding: "20px 48px",
      fontSize: "14px",
    },
  },
  btnWeb: {
    display: "block",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  btnMobile: {
    display: "none",
    "@media (max-width: 800px)": {
      display: "block",
    },
  },
}));

export function HeroProduct() {
  const { classes } = useStyles();

  return (
    <>
      <Container size="lg" p="0" className={classes.heroSec}>
        <Group position="apart" className={classes.title}>
          <Title order={1}>Samurai King Resting</Title>
          <Box className={classes.btnWeb}>
            <AddBtn onClick={() => alert("Added")} />
          </Box>
        </Group>
        <Image src="./heroPhoto.png" alt="Dog sitting on the street" />
        <Text className={classes.textContent}>Photo of the day</Text>
        <Box className={classes.btnMobile}>
          <AddBtn onClick={() => alert("Added")} />
        </Box>
      </Container>
      <HeroAboutSec />
    </>
  );
}
