import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface NavButtonProps {
  emoji: string;
  text?: string;
}

function NavButton({ emoji, text, ...props }: NavButtonProps & ButtonProps) {
  return (
    <Button
      fontSize="2xl"
      py={2}
      w="100%"
      position="relative"
      _hover={{
        span: {
          opacity: 1,
        },
      }}
      {...props}
    >
      {emoji}
      {text && (
        <Text
          as="span"
          alignItems="center"
          bgColor="yellow.50"
          color="blue.900"
          borderRadius="md"
          display="inline-flex"
          fontSize="md"
          fontWeight="700"
          h="80%"
          justifyContent="center"
          left="calc(100% + 0.5rem)"
          opacity={0}
          position="absolute"
          px={3}
          top="10%"
          transition=".2s ease"
        >
          {text}
        </Text>
      )}
    </Button>
  );
}

export default NavButton;
