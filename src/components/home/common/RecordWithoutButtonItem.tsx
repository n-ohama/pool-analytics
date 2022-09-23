import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  title: string;
};

export const RecordWithoutButtonItem: FC<Props> = ({ title }) => {
  return (
    <Flex my="1px" justifyContent="center">
      <Box
        textAlign="center"
        w="80px"
        border="1px"
        borderColor="gray.400"
        borderRight="none"
        p={1}
      />
      <Box
        textAlign="center"
        w="80px"
        border="1px"
        borderColor="gray.400"
        p={1}
      >
        0
      </Box>
      <Box
        bg="cyan"
        textAlign="center"
        borderY="1px"
        borderColor="gray.400"
        h="65px"
        fontWeight="medium"
        w="240px"
      >
        {title}
      </Box>
      <Box
        textAlign="center"
        w="80px"
        border="1px"
        borderColor="gray.400"
        p={1}
      >
        0
      </Box>
      <Box
        textAlign="center"
        w="80px"
        border="1px"
        borderLeft="none"
        borderColor="gray.400"
        p={1}
      />
    </Flex>
  );
};
