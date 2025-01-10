import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface NavButtonProps {
  emoji: string;
  text?: string;
}

function NavButton({ emoji, text, ...props }: NavButtonProps & ButtonProps) {
  return (
    <Button
      fontSize="xl"
      position="relative"
      py={2}
      w="100%"
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
          bgColor="rgba(0,0,0,0.4)"
          borderRadius="sm"
          color="gray.400"
          display="inline-flex"
          fontSize="sm"
          fontWeight="600"
          h={8}
          justifyContent="center"
          left="calc(100% + 0.5rem)"
          opacity={0}
          position="absolute"
          px={2}
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
