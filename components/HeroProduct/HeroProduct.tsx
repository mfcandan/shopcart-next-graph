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
      padding: "0 1em",
    },
  },
  title: {
    marginTop: "4em",
    marginBottom: "1.2em",
  },
  textContent: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    justifyContent: "flex-end",
    fontWeight: "bold",
    marginTop: "-3.5em",
    padding: "1em 3em",
    fontSize: "1.2em",
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
