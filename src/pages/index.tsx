import { Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex align="center" justify="center" h="100vh" w="100vw">
        <Text fontSize="5xl" fontWeight="bold">
          Hello, there!
        </Text>
      </Flex>
    </>
  );
}
