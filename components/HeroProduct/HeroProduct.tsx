import {
  BackgroundImage,
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Image,
  Text,
  Box,
  Header,
  Title,
  MediaQuery,
} from "@mantine/core";
import { AddBtn } from "../AddBtn/AddBtn";
import { HeroAboutSec } from "../HeroAboutSec/HeroAboutSec";
import { useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  heroSec: {
    "@media (max-width: 800px)": {
      padding: "0 1rem",
    },
  },
  title: {
    marginTop: "4rem",
    marginBottom: "1.2rem",
  },
  textContent: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: "-3.5rem",
    padding: "1rem 3rem",
    fontSize: "1.2rem",
  },
  
}));

export function HeroProduct() {
  const { classes } = useStyles();

  return (
    <>
      <Container size="lg" p="0" className={classes.heroSec}>
        <Group position="apart" className={classes.title}>
          <Title order={1}>Samurai King Resting</Title>
          <AddBtn onClick={() => alert("Added")} />
        </Group>
        <Image src="./heroPhoto.png" alt="Dog sitting on the street" />
        <Text className={classes.textContent}>Photo of the day</Text>
      </Container>
      <HeroAboutSec />
    </>
  );
}
