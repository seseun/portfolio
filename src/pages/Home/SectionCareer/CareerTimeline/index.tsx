import { VStack, HStack, Divider, Flex, Text } from "@chakra-ui/react";

function CareerTimeline() {
  return (
    <VStack align="stretch">
      <HStack
        justify="space-between"
        fontSize="sm"
        fontWeight="800"
        color="gray.500"
      >
        <Text as="span">0</Text>
        <Text as="span">1</Text>
        <Text as="span">2</Text>
        <Text as="span">3</Text>
        <Text as="span">4</Text>
        <Text as="span">5</Text>
        <Text as="span">6</Text>
        <Text as="span">7</Text>
      </HStack>
      <HStack
        justify="space-between"
        px={1}
        position="relative"
        sx={{
          hr: {
            h: "180px",
          },
        }}
      >
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <Divider orientation="vertical" />
        <HStack
          as="ul"
          spacing={0}
          alignItems="center"
          justifyContent="flex-start"
          position="absolute"
          top={0}
          left={0}
          px={1}
          w="100%"
          h="100%"
          mt={-5}
          sx={{
            "& > li": {
              alignItems: "center",
              borderRadius: 0,
              color: "white",
              fontSize: "xs",
              fontWeight: 700,
              h: 5,
              px: 2,
            },
          }}
        >
          <Flex
            as="li"
            bgGradient="linear(to-r, pink.500, purple.500)"
            flex="40% 0 0"
            justify="flex-start"
          >
            Design + Publishing
          </Flex>
          <Flex
            as="li"
            bgGradient="linear(to-r, purple.600 40%, blue.400 100%)"
            flex="41% 0 0"
            mt={10}
          >
            Publishing + Front-end
          </Flex>
          <Flex
            as="li"
            bgGradient="linear(to-r, blue.500 40%, blue.700 100%)"
            flex="1"
            mt={20}
          >
            Front-end
          </Flex>
        </HStack>
      </HStack>
    </VStack>
  );
}

export default CareerTimeline;
