import {
  Box,
  createStyles,
  Grid,
  Image,
  Text,
  Title,
  Divider,
  Button,
} from "@mantine/core";
import { IProduct } from "../../store/productStore";

interface ICartItem {
  cartItem: IProduct;
}

export function CartItem({ cartItem }: ICartItem) {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.cartItem} p="1em">
        <Grid>
          <Grid.Col span={7}>
            <Title order={3}>{cartItem?.data?.name}</Title>
            <Text className={classes.priceLabel}>${cartItem?.data?.price}</Text>
          </Grid.Col>
          <Grid.Col span={5}>
            <Image
              src={cartItem?.data?.image?.src}
              alt={cartItem?.data?.image?.alt}
              width="150px"
              height="86px"
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Divider size="sm" mx="1em" />
    </>
  );
}

const useStyles = createStyles((theme) => ({
  cartItem: {},
  priceLabel: {
    color: "#656565",
    fontSize: "28px",
  },
}));
