import { Container } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { ContinentContent, ContinentHeader, TopCities } from '~/components';

interface ContinentPageProps {
  slug: string;
  image: string;
  title: string;
  description: string;
  countries_count: number;
  languages_count: number;
  cities_within_top_100: Array<{
    name: string;
    image: string;
    country_name: string;
    country_flag: string;
  }>;
}

export default function ContinentPage({
  cities_within_top_100,
  countries_count,
  languages_count,
  description,
  image,
  title,
}: ContinentPageProps) {
  return (
    <>
      <Head>
        <title>{title} | WorldTrip</title>
      </Head>

      <ContinentHeader image={image} title={title} />

      <Container my={['6', '8', '12', '20']} px="4">
        <ContinentContent
          description={description}
          countriesCount={countries_count}
          languagesCount={languages_count}
          top100CitiesCount={cities_within_top_100.length}
        />

        {cities_within_top_100.length > 0 && (
          <TopCities
            cities={cities_within_top_100.map((city) => ({
              countryFlag: city.country_flag,
              countryName: city.country_name,
              image: city.image,
              name: city.name,
            }))}
          />
        )}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      { params: { continent: 'africa' } },
      { params: { continent: 'asia' } },
      { params: { continent: 'europe' } },
      { params: { continent: 'latin-america' } },
      { params: { continent: 'north-america' } },
      { params: { continent: 'oceania' } },
    ],
  };
};

export const getStaticProps: GetStaticProps<ContinentPageProps> = async ({
  params,
}) => {
  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: [
      {
        slug: 'africa',
        image: '/img/continent-africa.jpg',
        title: 'África',
        description:
          'A África é o terceiro continente mais extenso com cerca de 30 milhões km², cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
        countries_count: 54,
        languages_count: 87,
        cities_within_top_100: [],
      },
      {
        slug: 'asia',
        image: '/img/continent-asia.jpg',
        title: 'Ásia',
        description:
          'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas.',
        countries_count: 50,
        languages_count: 40,
        cities_within_top_100: [
          {
            name: 'Hong Kong',
            image: '/img/city-hong-kong.jpg',
            country_name: 'China',
            country_flag: '/img/flag-china.gif',
          },
          {
            name: 'Bangkok',
            image: '/img/city-bangkok.jpg',
            country_name: 'Tailândia',
            country_flag: '/img/flag-thailand.gif',
          },
          {
            name: 'Macau',
            image: '/img/city-macau.jpg',
            country_name: 'China',
            country_flag: '/img/flag-china.gif',
          },
          {
            name: 'Singapura',
            image: '/img/city-singapore.jpg',
            country_name: 'Singapura',
            country_flag: '/img/flag-singapore.gif',
          },
          {
            name: 'Dubai',
            image: '/img/city-dubai.jpg',
            country_name: 'Emirados Árabes Unidos',
            country_flag: '/img/flag-uae.gif',
          },
        ],
      },
      {
        slug: 'europe',
        image: '/img/continent-europe.jpg',
        title: 'Europa',
        description:
          'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countries_count: 50,
        languages_count: 48,
        cities_within_top_100: [
          {
            name: 'Londres',
            image: '/img/city-london.jpg',
            country_name: 'Reino Unido',
            country_flag: '/img/flag-uk.webp',
          },
          {
            name: 'Paris',
            image: '/img/city-paris.jpg',
            country_name: 'França',
            country_flag: '/img/flag-france.gif',
          },
        ],
      },
      {
        slug: 'latin-america',
        image: '/img/continent-latin-america.jpg',
        title: 'América Latina',
        description:
          'A América Latina é uma região do continente americano que engloba os países onde são faladas, primordialmente, línguas românicas visto que, historicamente, a região foi maioritariamente dominada pelos impérios coloniais europeus Espanhol e Português. A América Latina tem uma área de cerca de 21 milhões de km², o equivalente a cerca de 3,9% da superfície da Terra.',
        countries_count: 20,
        languages_count: 8,
        cities_within_top_100: [
          {
            name: 'São Paulo',
            image: '/img/city-sao-paulo.jpg',
            country_name: 'Brasil',
            country_flag: '/img/flag-brazil.webp',
          },
          {
            name: 'Rio de Janeiro',
            image: '/img/city-rio-de-janeiro.jpg',
            country_name: 'Brasil',
            country_flag: '/img/flag-brazil.webp',
          },
        ],
      },
      {
        slug: 'north-america',
        image: '/img/continent-north-america.jpg',
        title: 'América do Norte',
        description:
          'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá.',
        countries_count: 3,
        languages_count: 4,
        cities_within_top_100: [
          {
            name: 'Nova York',
            image: '/img/city-new-york.jpg',
            country_name: 'Estados Unidos',
            country_flag: '/img/flag-us.gif',
          },
          {
            name: 'São Francisco',
            image: '/img/city-san-francisco.jpg',
            country_name: 'Estados Unidos',
            country_flag: '/img/flag-us.gif',
          },
        ],
      },
      {
        slug: 'oceania',
        image: '/img/continent-oceania.jpg',
        title: 'Oceania',
        description:
          'O topônimo Oceania foi designado ao continente por iniciativa do naturalista francês René Primevère Lesson, o qual também era médico e farmacêutico naval. Quando era tripulante da corveta Coquille, viajou por um bom tempo pelo Oceano Pacífico com a missão de realizar pesquisas científicas para servir de fonte de seus livros de anatomia e taxonomia de mamíferos, pássaros, beija-flores.',
        countries_count: 16,
        languages_count: 22,
        cities_within_top_100: [
          {
            name: 'Sidney',
            image: '/img/city-sidney.jpg',
            country_name: 'Australia',
            country_flag: '/img/flag-australia.gif',
          },
        ],
      },
    ].find(({ slug }) => slug === params?.continent)!,
  };
};
