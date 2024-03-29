import {
  Box,
  Container,
  createStyles,
  Group,
  Image,
  NativeSelect,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { FilterDrawer } from "../FilterDrawer/FilterDrawer";

export function BreadCrumbSorter() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Container size="lg" className={classes.wrapper}>
      <Group position="apart">
        <Group spacing={4}>
          <Box p={0} m={0} className={classes.category}>
            Photography
          </Box>
          <Box className={classes.slash}>/</Box>
          <Box p={0} m={0} className={classes.topic}>
            Premium Photos
          </Box>
        </Group>
        <Group className={classes.sorter}>
          <Image onClick={() => {}} src="./sorter.svg" alt="sorter button" />
          <Text size="xl" color="#9B9B9B">
            Sort By
          </Text>
          <NativeSelect
            className={classes.sortSelect}
            data={["Price", "Name"]}
            variant="unstyled"
            size="lg"
          />
        </Group>
        <Box className={classes.filter} onClick={() => setOpened(true)}>
          <Image src="./filter.svg" alt="filter button" />
        </Box>
        <FilterDrawer opened={opened} setOpened={setOpened} />
      </Group>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: "4em 0",
    "@media (max-width: 800px)": {
      padding: "2em 1em",
    },
  },
  category: {
    fontSize: "26px",
    fontWeight: 700,
    "@media (max-width: 800px)": {
      fontSize: "18px",
    },
  },
  slash: {
    fontSize: "26px",
    "@media (max-width: 800px)": {
      fontSize: "18px",
      padding: 0,
      margin: 0,
    },
  },
  topic: {
    fontSize: "26px",
    fontWeight: 400,
    color: "#9B9B9B",
    "@media (max-width: 800px)": {
      fontSize: "18px",
    },
  },
  sorter: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  sortToggle: {
    cursor: "pointer",
  },
  sortSelect: {
    minWidth: "3em",
    fontSize: "30px",
    fontWeight: 700,
  },
  filter: {
    display: "none",
    "@media (max-width: 800px)": {
      display: "block",
    },
  },
}));
