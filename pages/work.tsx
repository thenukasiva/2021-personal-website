import React from "react";
import { Title, Text, Container, Grid, Link, Button, List } from "@components";
import { GetStaticProps } from "next";
import { getPosts, Post } from "@posts";
import Head from "next/head";

interface AboutProps {
  experiences: Post[];
}

const Work = ({ experiences }: AboutProps): JSX.Element => {
  return (
    <Container>
      <Head>
        <title>work.</title>
      </Head>

      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title>my experience. 💻</Title>
        <Container width="100%">
          {experiences.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
            >
              <Container width="100%"></Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      <a href={data.link}>{data.title}</a>
                    </Title>
                    <Text
                      fontSize="smaller"
                      margin={0}
                      color="rgba(0, 0, 0, 0.1)"
                    >
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem">{data.caption}</Text>
                  <List marginY="1rem">{data.tags}</List>
                </Container>
              </Grid>
            </Grid>
          ))}
          <Link href="img/resume.pdf">
            <Button>Resume &rarr;</Button>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts("experiences");
  experiences.sort((a, b) =>
    b.data.year.toString().localeCompare(a.data.year.toString())
  );

  return {
    props: {
      experiences,
    },
  };
};

export default Work;
