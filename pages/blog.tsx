import React from 'react';
import { Title, Text, Container} from '@components';
import Head from 'next/head';


const Blog = (): JSX.Element =>  (
    <Container>
      <Head>
        <title>blog.</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          my blog.
        </Title>
        <Container maxWidth={['100%', '700px']} marginY="2rem">
          <Text>
          A series of some of my random thoughts and reflections while I navigate my 20s.
          Coming soon!
          </Text>
        </Container>
      </Container>
      </Container>
  );
export default Blog;