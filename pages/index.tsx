import React from 'react';
import Image from 'next/image';
import { Container, Title, Button, Link, Text } from '@components';
import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="0px"
      paddingBottom="0px"
      gridGap="1rem"
    >
      <Container alignItems="center" alignContent="center">
        <Image
          src="/me.jpg"
          alt="thenuka siva"
          width="130px"
          height="130px"
          objectFit="cover"
          className={styles.image}
        />
        <Title>Thenuka Siva.</Title>
      </Container>
      <Container maxWidth="700px" gridGap="1rem">
        <Container>
          <Text textAlign="center">
            Hello!👋 I'm a second year CS student at University of Waterloo passionate
            about tech for social good, solving complex problems and full-stack development. I'm currently seeking
            2022 internships!
          </Text>
        </Container>
        <Link href="/about">
          <Button>More about me &rarr;</Button>
        </Link>
      </Container>
    </Container>
  </Container>
);

export default Home;
