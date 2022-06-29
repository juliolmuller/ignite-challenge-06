import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import { CityCard } from './CityCard';

export interface TopCitiesProps {
  cities: Array<{
    name: string;
    image: string;
    countryName: string;
    countryFlag: string;
  }>;
}

export function TopCities({ cities }: TopCitiesProps) {
  return (
    <Box mt={['8', '10', '16', '20']}>
      <Heading
        as="h2"
        fontSize={['2xl', '2xl', '3xl', '4xl']}
        fontWeight="medium"
        mb={['5', '6', '8', '10']}
      >
        Cidades +100
      </Heading>

      <SimpleGrid
        columns={[1, 1, 2, 3, 4]}
        columnGap={[null, null, '8', '10']}
        rowGap={['5', '5', '8', '12']}
      >
        {cities.map((city) => (
          <CityCard key={city.name} {...city} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
