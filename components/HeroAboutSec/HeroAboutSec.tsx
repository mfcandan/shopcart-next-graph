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
import { IProduct } from "../../store/productStore";

interface IHeroAboutSec {
  featuredProduct: IProduct;
}

export function HeroAboutSec({ featuredProduct }: IHeroAboutSec) {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.aboutWrapper} size="lg">
        <Grid>
          <Grid.Col sm={12} lg={6}>
            <Title order={3}>{featuredProduct?.data?.name}</Title>
            <Text
              className={classes.subTitle}
              color="#656565"
              size="xl"
              weight="700"
              mt="0.5em"
            >
              {featuredProduct?.data?.category}
            </Text>
            <Text mt="2em">{featuredProduct?.data?.details?.description}</Text>
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
              {featuredProduct?.data?.details?.recommendations.map((item) => (
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  className={classes.productImage}
                  width="110px"
                  height="150px"
                />
              ))}
            </Group>
            <Box className={classes.itemLeftMobile} mb="2em">
              <Title order={3} my="1em">
                Details
              </Title>
              <Text>
                Size: {featuredProduct?.data?.details?.dimmentions?.width} x{" "}
                {featuredProduct?.data?.details?.dimmentions?.height} pixel
              </Text>
              <Text>
                Size:{" "}
                {featuredProduct?.data?.details?.size &&
                  featuredProduct?.data?.details?.size / 1000}{" "}
                mb
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

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
