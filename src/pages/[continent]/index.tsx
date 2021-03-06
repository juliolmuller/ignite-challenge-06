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
        title: '??frica',
        description:
          'A ??frica ?? o terceiro continente mais extenso com cerca de 30 milh??es km??, cobrindo 20,3% da ??rea total da terra firme do planeta. ?? o segundo continente mais populoso da Terra com cerca de um bilh??o de pessoas, representando cerca de um s??timo da popula????o mundial, e 54 pa??ses independentes.',
        countries_count: 54,
        languages_count: 87,
        cities_within_top_100: [],
      },
      {
        slug: 'asia',
        image: '/img/continent-asia.jpg',
        title: '??sia',
        description:
          'A ??sia ?? o maior dos continentes, tanto em ??rea como em popula????o. Abrange um ter??o das partes s??lidas da superf??cie da Terra e ?? respons??vel por abrigar quase tr??s quintos da popula????o mundial. Na ??sia s??o encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, plan??cies e planaltos; as selvas e florestas mais densas.',
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
            country_name: 'Tail??ndia',
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
            country_name: 'Emirados ??rabes Unidos',
            country_flag: '/img/flag-uae.gif',
          },
        ],
      },
      {
        slug: 'europe',
        image: '/img/continent-europe.jpg',
        title: 'Europa',
        description:
          'A Europa ??, por conven????o, um dos seis continentes do mundo. Compreendendo a pen??nsula ocidental da Eur??sia, a Europa geralmente divide-se da ??sia a leste pela divis??ria de ??guas dos montes Urais, o rio Ural, o mar C??spio, o C??ucaso, e o mar Negro a sudeste',
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
            country_name: 'Fran??a',
            country_flag: '/img/flag-france.gif',
          },
        ],
      },
      {
        slug: 'latin-america',
        image: '/img/continent-latin-america.jpg',
        title: 'Am??rica Latina',
        description:
          'A Am??rica Latina ?? uma regi??o do continente americano que engloba os pa??ses onde s??o faladas, primordialmente, l??nguas rom??nicas visto que, historicamente, a regi??o foi maioritariamente dominada pelos imp??rios coloniais europeus Espanhol e Portugu??s. A Am??rica Latina tem uma ??rea de cerca de 21 milh??es de km??, o equivalente a cerca de 3,9% da superf??cie da Terra.',
        countries_count: 20,
        languages_count: 8,
        cities_within_top_100: [
          {
            name: 'S??o Paulo',
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
        title: 'Am??rica do Norte',
        description:
          'A Am??rica do Norte ?? um subcontinente que compreende a por????o setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a Am??rica do Norte ?? apenas a parte mais setentrional da Am??rica, separada da Am??rica Central na fronteira entre o M??xico e a Guatemala, a segunda classifica????o reconhece apenas uma Am??rica do Norte e uma Am??rica do Sul, tra??ando o limite no Istmo do Panam??.',
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
            name: 'S??o Francisco',
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
          'O top??nimo Oceania foi designado ao continente por iniciativa do naturalista franc??s Ren?? Primev??re Lesson, o qual tamb??m era m??dico e farmac??utico naval. Quando era tripulante da corveta Coquille, viajou por um bom tempo pelo Oceano Pac??fico com a miss??o de realizar pesquisas cient??ficas para servir de fonte de seus livros de anatomia e taxonomia de mam??feros, p??ssaros, beija-flores.',
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
