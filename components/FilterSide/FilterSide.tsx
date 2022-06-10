import {
  Box,
  Checkbox,
  CheckboxGroup,
  createStyles,
  Divider,
  Title,
} from "@mantine/core";

export function FilterSide() {
  const { classes } = useStyles();

  return (
    <Box>
      <Box>
        <Title order={3} mb="1.5em">
          Category
        </Title>
        <CheckboxGroup
          className={classes.filtersWrapper}
          defaultValue={[""]}
          color="dark"
          orientation="vertical"
          size="lg"
          spacing="xl"
        >
          <Checkbox value="people" label="People" />
          <Checkbox value="svelte" label="Premium" />
          <Checkbox value="ng" label="Pets" />
          <Checkbox value="vue" label="Food" />
          <Checkbox value="react" label="Landmarks" />
          <Checkbox value="svelte" label="Cities" />
          <Checkbox value="ng" label="Nature" />
        </CheckboxGroup>
      </Box>
      <Divider my="1.5em" mr="1em" size="xs" color="#C2C2C2" />
      <Box>
        <Title order={3} mb="1.5em">
          Price range
        </Title>
        <CheckboxGroup
          className={classes.filtersWrapper}
          defaultValue={[""]}
          color="dark"
          orientation="vertical"
          size="lg"
          spacing="xl"
        >
          <Checkbox value="lower" label="Lower than $20" />
          <Checkbox value="20-100" label="$20 - $100" />
          <Checkbox value="100-200" label="$100 - $200" />
          <Checkbox value="more" label="More than $200" />
        </CheckboxGroup>
      </Box>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  filtersWrapper: {
    padding: 0,
    margin: 0,
    "@media (max-width: 800px)": {},
  },
}));
