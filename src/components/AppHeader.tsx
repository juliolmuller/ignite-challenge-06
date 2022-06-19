import { Box, Flex, IconButton, Img } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function AppHeader() {
  const { asPath } = useRouter();

  return (
    <Box as="header" h="6.25rem" w="100%" px="4">
      <Flex
        pos="relative"
        align="center"
        justify="center"
        h="100%"
        w="100%"
        maxW={1160}
        mx="auto"
      >
        {asPath !== '/' && (
          <Link href="/" passHref>
            <IconButton
              as="a"
              icon={<Img src="/img/back-icon.svg" alt="ícone de voltar" />}
              pos="absolute"
              left="0"
              h="1rem"
              aria-label="botão de voltar"
            />
          </Link>
        )}

        <Img src="/img/logo.svg" alt="logo de WorldTrip" />
      </Flex>
    </Box>
  );
}
