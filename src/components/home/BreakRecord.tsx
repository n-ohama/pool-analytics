import { Box, Flex, Input } from "@chakra-ui/react";

export const BreakRecord = () => {
  return (
    <Flex justifyContent="center">
      <Flex direction={{ base: "column-reverse", md: "row" }}>
        <Input
          w="180px"
          placeholder="Full Name"
          h={{ base: "30px", md: "65px" }}
          bg="white"
        />
        <Box
          textAlign="center"
          w={{ base: "180px", md: "80px" }}
          border="1px"
          borderColor="gray.400"
          p={1}
        >
          First breaks
        </Box>
      </Flex>
      <Box
        bg="cyan"
        textAlign="center"
        borderY="1px"
        borderColor="gray.400"
        h="65px"
        fontWeight="medium"
        w={{ base: "80px", md: "240px" }}
      >
        Break
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          textAlign="center"
          w={{ base: "180px", md: "80px" }}
          border="1px"
          borderColor="gray.400"
          p={1}
        >
          Odd breaks
        </Box>
        <Input
          w="180px"
          placeholder="Full Name"
          h={{ base: "30px", md: "65px" }}
          bg="white"
        />
      </Flex>
    </Flex>
  );
};
