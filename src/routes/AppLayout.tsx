/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Outlet } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function AppLayout() {
  return (
    <Box as="main" layerStyle="main">
      <Outlet />
    </Box>
  );
}

export default AppLayout;
