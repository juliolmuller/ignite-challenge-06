import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { AppHeader } from '~/components';
import theme from '~/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Flex direction="column" minH="100vh" w="100vw">
      <AppHeader />

      <Box as="main" flex="1" w="100%">
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Box>
    </Flex>
  );
}
