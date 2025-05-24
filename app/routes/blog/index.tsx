import { createFileRoute } from '@tanstack/react-router';
import BlogCardContainer from '../../components/pages/blog/blog-card-container';
import { getAllBlogPosts } from '@/lib/server-functions/blog';

export const Route = createFileRoute('/blog/')({
  loader: async () => {
    const posts = await getAllBlogPosts();
    return { posts };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();

  return (
    <>
      <BlogCardContainer posts={posts} />
    </>
  );
}
