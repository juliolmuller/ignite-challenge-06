import { Flex, Text } from '@chakra-ui/react';

import { HighlightValue } from '~/components';

export interface ContinentContentProps {
  description: string;
  countriesCount: number;
  languagesCount: number;
  top100CitiesCount?: number;
}

export function ContinentContent({
  countriesCount,
  description,
  languagesCount,
  top100CitiesCount,
}: ContinentContentProps) {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'center' }}
      justify="space-between"
      gap={['4', '6', '10', '16']}
    >
      <Text flex={1} align="justify" fontSize={['lg', 'lg', 'xl', '2xl']}>
        {description}
      </Text>

      <Flex
        direction={{ lg: 'column', xl: 'row' }}
        justify={{
          base: 'space-between',
          md: 'space-around',
          lg: 'space-between',
        }}
        gap="8"
      >
        <HighlightValue label="países" value={countriesCount} />
        <HighlightValue label="línguas" value={languagesCount} />
        {!!top100CitiesCount && (
          <HighlightValue label="cidades +100" value={top100CitiesCount} />
        )}
      </Flex>
    </Flex>
  );
}
