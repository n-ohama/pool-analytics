import { Box, Center } from "@chakra-ui/react";
import { BreakRecord } from "../components/home/BreakRecord";
import { TopAreaComponent } from "../components/home/TopAreaComponent";
import { CenterAreaComponent } from "../components/home/CenterAreaComponent";
import { BottomAreaComponent } from "../components/home/BottomAreaComponent";

export const Home = () => {
  return (
    <>
      <Center bg={{ base: "gray.100" }}>
        <Box py={10}>
          {/* <BreakRecord /> */}
          <TopAreaComponent />
          <CenterAreaComponent />
          <BottomAreaComponent />
        </Box>
      </Center>
    </>
  );
};
