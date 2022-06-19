import Head from 'next/head';

import { Banner } from '~/components';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Banner />
    </>
  );
}
