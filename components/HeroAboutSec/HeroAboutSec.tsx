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
    "@media (max-width: 800px)": {
      padding: "0 1rem",
      margin: "2em 0",
    },
  },
  subTitle: {
    display: "block",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  alsoBuyWrapper: {
    textAlign: "right",
  },
  alsoBuyBox: {
    justifyContent: "flex-end",
    "@media (max-width: 800px)": {
      justifyContent: "flex-center",
    },
  },
  productImage: {
    "@media (max-width: 800px)": {
      width: "31.2%",
    },
  },
  itemLeftMobile: {
    "@media (max-width: 800px)": {
      textAlign: "left",
    },
  },
}));

export function HeroAboutSec() {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.aboutWrapper} size="lg">
        <Grid>
          <Grid.Col sm={12} lg={6}>
            <Title order={3}>About the Samurai King Resting</Title>
            <Text
              className={classes.subTitle}
              color="#656565"
              size="xl"
              weight="700"
              mt="0.5em"
            >
              Pets
            </Text>
            <Text mt="2em">
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
          <Grid.Col sm={12} lg={6} className={classes.alsoBuyWrapper}>
            <Title className={classes.itemLeftMobile} order={3} mt="0.5em">
              People also buy
            </Title>
            <Group
              align="center"
              className={classes.alsoBuyBox}
              mt="2em"
              spacing="xs"
            >
              <Image
                className={classes.productImage}
                src="./alsobuy1.png"
                alt="product 1 image"
              />
              <Image
                className={classes.productImage}
                src="./alsobuy2.png"
                alt="product 2 image"
              />
              <Image
                className={classes.productImage}
                src="./alsobuy3.png"
                alt="product 3 image"
              />
            </Group>
            <Box className={classes.itemLeftMobile} mb="2em">
              <Title order={3} my="1em">
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
