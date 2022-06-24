import { Container, Divider, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { Banner, CallToAction, TripType } from '~/components';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Banner />

      <Container my={['9', '12', '16', '28']} px={[0, 0, 0, '4']}>
        <Flex direction="column" align="center">
          <Flex
            align="flex-start"
            justify={['center', 'center', 'center', 'space-between']}
            wrap="wrap"
            gap={['12', '12', '20', 0]}
            w="100%"
            px={['2', '2', '4', 0]}
          >
            <TripType iconSrc="/img/nightlife-icon.svg" title="vida noturna" />
            <TripType iconSrc="/img/beach-icon.svg" title="praias" />
            <TripType iconSrc="/img/modern-icon.svg" title="moderno" />
            <TripType iconSrc="/img/classic-icon.svg" title="clássico" />
            <TripType iconSrc="/img/world-icon.svg" title="e mais..." />
          </Flex>

          <Divider
            w={90}
            mt={['9', '12', '16', '20']}
            mb={['6', '8', '10', '12']}
            borderColor="dark.text"
          />

          <CallToAction />
        </Flex>
      </Container>
    </>
  );
}
