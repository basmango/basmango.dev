import BlogLayout from 'layouts/blog';
import {PortableText} from '@portabletext/react'
import { postQuery, postSlugsQuery } from 'lib/queries';
import { sanityClient, getClient } from 'lib/sanity-server';
import { Post } from 'lib/types';
import { TypedObject } from 'sanity';

export default function PostPage({ post }: { post: Post }) {
  
  return (
    <BlogLayout post={post}>
            
      <PortableText
        value =  {post.body}
      />
    </BlogLayout>
    

  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  if (!post) {
    return { notFound: true };
  }


  return {
    props: {
      post: post
    }
  };
}
