import React from "react";
import { Title, Text, Container, Link, Button } from "@components";
import Head from "next/head";

const About = (): JSX.Element => (
  <Container>
    <Head>
      <title>about.</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={["3rem", "4rem"]} as="h2">
        about me.👩🏾‍💻
      </Title>
      <Container maxWidth={["100%", "700px"]} marginY="1rem">
        <Text>
          I'm a 3A Computer Science student at the{" "}
          <b>University of Waterloo. </b>I am passionate about learning
          innovative technologies and making projects that have a positive
          social impact.
        </Text>
        <Text>
          I'm currently on my third co-op term at {""}
          <a href="https://www.tulip.com/">Tulip</a> as a{" "}
          <b>Back-end Developer Intern </b>
          where I am working with <b>Golang</b>, <b>PHP</b> and <b>Docker</b> to
          help build new API and integration features to production.
        </Text>
        <Text>
          When I'm not busy coding or completing schoolwork, I enjoy exploring
          vegan dishes, learning new instruments, and making spotify playlists!
        </Text>
      </Container>
      <Link href="/work">
        <Button>My experience</Button>
      </Link>
    </Container>
  </Container>
);
export default About;
