import { Drawer, ScrollArea } from "@mantine/core";
import { FilterSide } from "../FilterSide/FilterSide";

interface IFilterDrawer {
  opened: boolean;
  setOpened: Function;
}

export function FilterDrawer({ opened, setOpened }: IFilterDrawer) {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Filter"
        padding="xl"
        size="90vh"
        position="bottom"
      >
        <ScrollArea style={{ height: "100vh" }} pb="10em">
          <FilterSide />
        </ScrollArea>
      </Drawer>
    </>
  );
}
