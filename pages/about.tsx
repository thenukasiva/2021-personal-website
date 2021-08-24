import React from 'react';
import { Title, Text, Container, Link, Button } from '@components';
import Head from 'next/head';


const About = (): JSX.Element =>  (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          about me.👩🏾‍💻
        </Title>
        <Container maxWidth={['100%', '700px']} marginY="2rem">
          <Text>
          I'm a 2A Computer Science student at the <b>University of Waterloo. </b>
          I am passionate about learning innovative technologies and making projects that have a positive social impact. 
          </Text>
          <Text>
          I just wrapped up my first co-op term at {''} 
          <a href="https://www.uptake.com">Uptake</a> as a <b>Full-Stack Developer Intern </b>
          where I worked with <b>SQL</b>, <b>Angular</b> and <b>.NET</b> to help build new features, fix customer reported issues and refactor code.
          </Text>
          <Text>
          Aside from my coding experience, 
          I have diverse range of leadership and volunteer work 
          that have helped me grow into the person I am today. 
          In the past, I was the Co-Founder of my high school's 
          <b> Amnesty International Club </b>and the Marketing Chair at <b>Sustainable 
          Youth Ottawa</b> where I led and executed events that directly 
          gave back to the community.
          </Text>
          <Text>When I'm not busy coding or completing schoolwork, I enjoy exploring vegan dishes, learning new instruments, and making spotify playlists!
          </Text>
        </Container>
        <Link href="/work">
          <Button>My work &rarr;</Button>
        </Link>
      </Container>
      </Container>
  );
export default About;