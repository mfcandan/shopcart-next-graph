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
          <Checkbox value="premium" label="Premium" />
          <Checkbox value="Pets" label="Pets" />
          <Checkbox value="food" label="Food" />
          <Checkbox value="landmarks" label="Landmarks" />
          <Checkbox value="cities" label="Cities" />
          <Checkbox value="nature" label="Nature" />
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
