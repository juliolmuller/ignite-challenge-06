import { Box, Container, IconButton, Img } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function AppHeader() {
  const { asPath } = useRouter();

  return (
    <Box as="header" h="24" w="100%" px="4">
      <Container
        pos="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        maxW={1160}
        mx="auto"
      >
        {asPath !== '/' && (
          <Link href="/" passHref>
            <IconButton
              as="a"
              icon={<Img src="/img/back-icon.svg" alt="ícone de voltar" />}
              pos="absolute"
              left={0}
              h="4"
              aria-label="botão de voltar"
            />
          </Link>
        )}

        <Img src="/img/logo.svg" alt="logo de WorldTrip" />
      </Container>
    </Box>
  );
}
