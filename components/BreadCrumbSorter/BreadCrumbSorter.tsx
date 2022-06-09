import {
  Container,
  createStyles,
  Group,
  Image,
  NativeSelect,
  Text,
  Box,
} from "@mantine/core";

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

export function BreadCrumbSorter() {
  const { classes } = useStyles();

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
          <Image src="./sorter.svg" alt="sorter button" />
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
        <Box className={classes.filter} onClick={() => alert("filter")}>
          <Image src="./filter.svg" alt="filter button" />
        </Box>
      </Group>
    </Container>
  );
}
