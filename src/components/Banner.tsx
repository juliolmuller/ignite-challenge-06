import {
  Box,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isLgDisplay = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      role="banner"
      h={['auto', 'auto', 240, 335]}
      w="100%"
      px="4"
      py="7"
      bg="url('/img/banner.svg')"
    >
      <Container
        pos="relative"
        display="flex"
        alignItems="center"
        h="100%"
        maxW={1160}
        mx="auto"
      >
        <Stack w="100%" spacing="5">
          <Heading
            as="h1"
            color="light.text"
            fontSize="4xl"
            fontWeight="medium"
            lineHeight="54px"
          >
            5 Continentes, {isLgDisplay && <br />}
            infinitas possibilidades.
          </Heading>
          <Text
            maxW={['auto', '80%', 'auto', '50%']}
            color="light.info"
            fontSize="xl"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        {isLgDisplay && (
          <Img
            src="/img/airplane.svg"
            alt="ilustração de avião"
            pos="absolute"
            right={0}
          />
        )}
      </Container>
    </Box>
  );
}
