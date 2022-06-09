import {
  Container,
  createStyles,
  Group,
  Image,
  NativeSelect,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  category: {
    fontSize: "26px",
    fontWeight: 700,
  },
  topic: {
    fontSize: "26px",
    fontWeight: 400,
    color: "#9B9B9B",
  },
  sortToggle: {
    cursor: "pointer",
  },
  sortSelect: {
    minWidth: "3em",
    fontSize: "30px",
    fontWeight: 700,
  },
}));

export function BreadCrumbSorter() {
  const { classes } = useStyles();

  return (
    <Container size="lg" py="4em" px="0">
      <Group position="apart">
        <Group>
          <Text className={classes.category}>Photography</Text>
          <Text size="xl">/</Text>
          <Text className={classes.topic}>Premium Photos</Text>
        </Group>
        <Group>
          <Group>
            <Image src="./sorter.svg" />
            <Text size="xl" color="#9B9B9B">
              Sort By
            </Text>
          </Group>
          <NativeSelect
            className={classes.sortSelect}
            data={["Price", "Name"]}
            variant="unstyled"
            size="lg"
          />
        </Group>
      </Group>
    </Container>
  );
}
