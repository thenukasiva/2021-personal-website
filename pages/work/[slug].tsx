import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next';
import { NotionRenderer, NotionRendererProps, Code } from 'react-notion-x';
import { NotionAPI } from 'notion-client';
import Head from 'next/head';

import { getPageInfo, Page, work } from '@posts/notion';
import { Container } from '@components';

interface workProps {
  page: Page;
  recordMap: NotionRendererProps['recordMap'];
}

const About: NextPage<workProps> = ({ page, recordMap }) => (
  <Container
    width={['100%', 1200]}
    maxWidth="100vw"
    marginBottom={['1rem', '4rem']}
  >
    <Head>
      <title>{page.title}</title>
      <meta property="og:title" content={page.title} />
    </Head>
    <NotionRenderer
      fullPage
      className="notion-container"
      recordMap={recordMap}
      components={{
        code: Code,
      }}
    />
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(work).map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

type Params = {
  params: {
    slug: keyof typeof work;
  };
};

const notion = new NotionAPI();

export const getStaticProps = async ({
  params: { slug },
}: Params): Promise<GetStaticPropsResult<workProps>> => {
  const { uri, date } = work[slug];
  const recordMap = await notion.getPage(uri);
  const pageInfo = getPageInfo(recordMap);
  const page: Page = {
    ...pageInfo,
    uri,
    date,
  };

  return {
    props: {
      page,
      recordMap,
    },
  };
};

export default About;
