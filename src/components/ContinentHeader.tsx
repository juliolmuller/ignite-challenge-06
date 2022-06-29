import { Box, Container, Heading, Img } from '@chakra-ui/react';

export interface ContinentHeaderProps {
  image: string;
  title: string;
}

export function ContinentHeader({ image, title }: ContinentHeaderProps) {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      h={[150, 200, 260, 360, 500]}
      w="100%"
      bg="gray.800"
    >
      <Img
        src={image}
        alt={`Paisagem da ${title}`}
        objectFit="cover"
        opacity={0.35}
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
      />

      <Container display="flex" h="100%">
        <Heading
          as="h1"
          color="light.text"
          fontSize={['3xl', '3xl', '4xl', '5xl']}
          fontWeight="semibold"
          pos={{ xl: 'absolute' }}
          bottom="60px"
          m={{ base: 'auto', xl: '0' }}
        >
          {title}
        </Heading>
      </Container>
    </Box>
  );
}
