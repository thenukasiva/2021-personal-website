import React from 'react';
import { default as Container } from '@components/Container';
import { default as Title } from '@components/Title';
import { default as Text } from '@components/Text';

const NotFound = (): JSX.Element => (
  <Container alignItems="center">
    <Title>404 - Oops!</Title>
    <Text>The page does not exist. Sorry about that.</Text>
  </Container>
);

export default NotFound;