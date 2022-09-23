import { Box, Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { RecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  TotalBreaksLeftState,
  TotalBreaksRightState,
} from "../../../global/globalState";

type Props = {
  title: string;
  leftState: RecoilState<number>;
  rightState: RecoilState<number>;
  hasPercent?: boolean;
};

export const RecordItem: FC<Props> = ({
  title,
  leftState,
  rightState,
  hasPercent = false,
}) => {
  const [left, setLeft] = useRecoilState(leftState);
  const [right, setRight] = useRecoilState(rightState);

  const totalLeft = useRecoilValue(TotalBreaksLeftState);
  const totalRight = useRecoilValue(TotalBreaksRightState);

  const percentLeft = Math.round((left / totalLeft) * 100) || 0;

  const percentRight = Math.round((right / totalRight) * 100) || 0;
  return (
    <>
      <Flex justifyContent="center">
        <Box
          bg="cyan"
          textAlign="center"
          borderY="1px"
          borderColor="gray.400"
          h="65px"
          fontWeight="medium"
          w="380px"
        >
          {title}
        </Box>
      </Flex>
      <Flex my="1px" justifyContent="center">
        <Flex direction={{ base: "column-reverse", md: "row" }}>
          <Flex>
            <Button
              w="80px"
              colorScheme="red"
              onClick={() => setLeft(left - 1)}
            >
              -1
            </Button>
            <Button
              w="80px"
              colorScheme="blue"
              mr={1}
              onClick={() => setLeft(left + 1)}
            >
              +1
            </Button>
          </Flex>
          <Box></Box>
          <Flex>
            <Box
              textAlign="center"
              w="80px"
              border="1px"
              borderColor="gray.400"
              borderRight="none"
              p={1}
            >
              {hasPercent && percentLeft + "%"}
            </Box>
            <Box
              textAlign="center"
              w="80px"
              border="1px"
              borderColor="gray.400"
              p={1}
            >
              {left}
            </Box>
          </Flex>
        </Flex>
        {/* <Box
        bg="cyan"
        textAlign="center"
        borderY="1px"
        borderColor="gray.400"
        h="65px"
        fontWeight="medium"
        w="240px"
      >
        {title}
      </Box> */}
        <Flex direction={{ base: "column", md: "row" }}>
          <Flex>
            <Box
              textAlign="center"
              w="80px"
              border="1px"
              borderColor="gray.400"
              p={1}
            >
              {right}
            </Box>
            <Box
              textAlign="center"
              w="80px"
              border="1px"
              borderLeft="none"
              borderColor="gray.400"
              p={1}
            >
              {hasPercent && percentRight + "%"}
            </Box>
          </Flex>
          <Flex>
            <Button
              w="80px"
              colorScheme="blue"
              ml={1}
              onClick={() => setRight(right + 1)}
            >
              +1
            </Button>
            <Button
              w="80px"
              colorScheme="red"
              onClick={() => setRight(right - 1)}
            >
              -1
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
