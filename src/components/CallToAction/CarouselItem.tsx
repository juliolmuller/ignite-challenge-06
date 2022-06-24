import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export interface CarouselItemProps {
  image: string;
  title: string;
  subtitle: string;
  url: string;
}

export function CarouselItem({
  image,
  subtitle,
  title,
  url,
}: CarouselItemProps) {
  return (
    <Flex justify="center" pos="relative" h="inherit" w="inherit">
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
        zIndex={-1}
      />

      <Link href={url} passHref>
        <Stack
          as="a"
          align="center"
          justify="center"
          spacing={[3, 3, 4]}
          h="inherit"
          w={['60%', '65%', '75%', '80%']}
          textAlign="center"
        >
          <Text
            fontSize={['2xl', '3xl', '4xl', '5xl']}
            fontWeight="bold"
            color="white"
          >
            {title}
          </Text>
          <Text fontSize={['xl', 'xl', '2xl']} fontWeight="bold" color="white">
            {subtitle}
          </Text>
        </Stack>
      </Link>
    </Flex>
  );
}
