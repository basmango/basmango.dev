import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'layouts/snippets';
import { snippetsQuery, snippetSlugsQuery } from 'lib/queries';
import { sanityClient, getClient } from 'lib/sanity-server';
import { Snippet } from 'lib/types';

export default function SnippetsPage({ snippet }: { snippet: Snippet }) {
  return (
    <SnippetLayout snippet={snippet}>
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(snippetSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { snippet } = await getClient(preview).fetch(snippetsQuery, {
    slug: params.slug
  });

  if (!snippet) {
    return { notFound: true };
  }

  
  return {
    props: {
      snippet: {
        ...snippet,
      }
    }
  };
}
