import BlogPostMdx from '@/components/pages/blog/blog-post-mdx';
import { createFileRoute } from '@tanstack/react-router';
import { getBlogPostBySlug } from '@/lib/server-functions/blog';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await getBlogPostBySlug({
      data: params.slug,
    });

    if (!post) {
      throw new Error('Post not found');
    }

    return { post };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { post } = Route.useLoaderData();

  return <BlogPostMdx post={post} />;
}
