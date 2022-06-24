import { Img, Stack, Text } from '@chakra-ui/react';

export function CarouselItem() {
  return (
    <Stack
      align="center"
      justify="center"
      spacing={[3, 3, 4]}
      pos="relative"
      h="inherit"
      w="inherit"
    >
      <Img
        src="https://www.howerobinson.com/wp-content/uploads/2017/12/London-Sharpened2.jpg"
        alt="Paisagem da Europa"
        objectFit="cover"
        opacity={0.35}
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={-1}
      />
      <Text
        fontSize={['2xl', '3xl', '4xl', '5xl']}
        fontWeight="bold"
        color="white"
      >
        Europe
      </Text>
      <Text fontSize={['xl', 'xl', '2xl']} fontWeight="bold" color="white">
        O continente mais antigo.
      </Text>
    </Stack>
  );
}
