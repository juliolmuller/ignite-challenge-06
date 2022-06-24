import { Box, Stack, Text } from '@chakra-ui/react';

import { Carousel, CarouselProps } from './Carousel';

export interface CallToActionProps extends CarouselProps {}

export function CallToAction(props: CallToActionProps) {
  return (
    <Stack align="center" spacing={['6', '8', '10', '12']} w="100%">
      <Text
        fontSize={['2xl', '2xl', '3xl', '4xl']}
        fontWeight="medium"
        align="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Box h={[250, 300, 375, 450]} w="inherit" bg="gray.800">
        <Carousel {...props} />
      </Box>
    </Stack>
  );
}
