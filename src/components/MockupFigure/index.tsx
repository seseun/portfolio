import { Box, BoxProps, Image } from "@chakra-ui/react";

export default function MockupFigure({
  imgUrl,
  ...props
}: { imgUrl: string } & BoxProps) {
  return (
    <Box
      as="figure"
      borderColor="gray.800"
      borderRadius="sm"
      borderWidth="4px"
      height="340px"
      overflow="auto"
      w="full"
      sx={{
        "::-webkit-scrollbar": {
          width: "4px",
        },
        "::-webkit-scrollbar-thumb": {
          bg: "rgba(256,256,256,0.3)",
        },
        "::-webkit-scrollbar-track": {
          bg: "rgba(256,256,256,0.25)",
        },
      }}
      {...props}
    >
      <Image src={imgUrl} />
    </Box>
  );
}
