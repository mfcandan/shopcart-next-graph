import {
  Box,
  createStyles,
  Text,
  Title,
  Container,
  Grid,
  Group,
  Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  aboutWrapper: {
    marginTop: "4em",
    borderBottom: "6px solid",
    borderColor: "#E4E4E4",
    padding: "4em 0",
  },
  alsoBuyWrapper: {
    textAlign: "right",
  },
  alsoBuyBox: {
    justifyContent: "flex-end",
  },
}));

export function HeroAboutSec() {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.aboutWrapper} size="lg">
        <Grid>
          <Grid.Col span={6}>
            <Title order={2}>About the Samurai King Resting</Title>
            <Text color="#656565" size="xl" weight="700" mt="0.5em">
              Pets
            </Text>
            <Text mt="0.5em">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero`s De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero`s De Finibus in
              order to provide placeholder.
            </Text>
            <Text mt="2em">
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </Text>
          </Grid.Col>
          <Grid.Col span={6} className={classes.alsoBuyWrapper}>
            <Title order={2}>People also buy</Title>
            <Box>
              <Group className={classes.alsoBuyBox} spacing="xl" mt="2em">
                <Image src="./alsobuy1.png" alt="product 1 image" />
                <Image src="./alsobuy2.png" alt="product 2 image" />
                <Image src="./alsobuy3.png" alt="product 3 image" />
              </Group>
              <Title order={3} mt="2em">
                Details
              </Title>
              <Text>Size: 1020 x 1020 pixel</Text>
              <Text>Size: 15 mb</Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
