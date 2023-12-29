import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Box as="main" layerStyle="main">
      <Outlet />
    </Box>
  );
}

export default AppLayout;
