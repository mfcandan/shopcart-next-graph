import { Box, createStyles, Image, Group, Indicator } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "4em 0 2em 0",
    borderBottom: "6px solid",
    borderColor: "#E4E4E4",
  },
  button: {
    cursor: "pointer",
  },
}));

export function CartBtn() {
  const { classes } = useStyles();
  const [cartItemCount, setCartItemCount] = useState(10);

  return (
    <Box className={classes.button} onClick={() => alert("Show Cart")}>
      <Group position="center">
        <Indicator
          disabled={cartItemCount < 1}
          color="black"
          position="bottom-end"
          radius="xs"
          size={20}
          label={cartItemCount}
        >
          <Image width="4em" src="./shopping-cart.svg" alt="Shopping Cart" />
        </Indicator>
      </Group>
    </Box>
  );
}
