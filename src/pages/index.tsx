import { Container, Divider, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Banner, CallToAction, TripType } from '~/components';

interface HomeProps {
  continents: Array<{
    image: string;
    title: string;
    subtitle: string;
    url: string;
  }>;
}

export default function HomePage({ continents }: HomeProps) {
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

          <CallToAction items={continents} />
        </Flex>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      continents: [
        {
          image: '/img/continent-oceania.jpg',
          title: 'Oceania',
          subtitle: 'Harmonia da diversidade e da cultura',
          url: '/oceania',
        },
        {
          image: '/img/continent-latin-america.jpg',
          title: 'América Latina',
          subtitle: 'Natureza e cultura exuberantes',
          url: '/latin-america',
        },
        {
          image: '/img/continent-europe.jpg',
          title: 'Europa',
          subtitle: 'O continente mais antigo',
          url: '/europe',
        },
        {
          image: '/img/continent-north-america.jpg',
          title: 'América do Norte',
          subtitle: 'Desfrute do urbano e da natureza',
          url: '/north-america',
        },
        {
          image: '/img/continent-asia.jpg',
          title: 'Ásia',
          subtitle: 'Explore a história do Oriente',
          url: '/asia',
        },
        {
          image: '/img/continent-africa.jpg',
          title: 'África',
          subtitle: 'Riqueza em cultura e história',
          url: '/africa',
        },
      ],
    },
  };
};
