import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';

export interface CityCardProps {
  name: string;
  image: string;
  countryName: string;
  countryFlag: string;
}

export function CityCard({
  countryFlag,
  countryName,
  image,
  name,
}: CityCardProps) {
  return (
    <Box
      w="100%"
      maxW={280}
      m="auto"
      borderRadius={4}
      borderColor="brand.highlight"
      borderWidth={1}
      transition="transform 200ms ease"
      _hover={{ transform: 'scale(105%)' }}
    >
      <Img
        src={image}
        alt={`Foto da cidade de ${name}`}
        objectFit="cover"
        h={180}
        w="100%"
      />

      <Flex align="center" gap="4" height={100} px={['4']}>
        <Stack spacing="3" flex={1}>
          <Text fontSize="xl" fontWeight="semibold">
            {name}
          </Text>

          <Text color="dark.info" fontSize="md" fontWeight="medium">
            {countryName}
          </Text>
        </Stack>

        <Img
          src={countryFlag}
          alt={`Bandeira de ${countryName}`}
          objectFit="cover"
          h={30}
          w={30}
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}
