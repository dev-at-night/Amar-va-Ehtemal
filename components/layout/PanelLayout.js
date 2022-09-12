import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { getMainLayout as withMainLayout } from "./MainLayout";
const PanelLayout = () => {
  return (
    <Box>
      <Header />
    </Box>
  );
};

export const getLayout = (page) =>
  withMainLayout(<PanelLayout>{page}</PanelLayout>);
