import BlogPost from '@/components/pages/blog/blog-post';
import { createFileRoute } from '@tanstack/react-router';
import { posts } from '@/lib/db/blog-posts';

type Search = {
  postId: string;
};

export const Route = createFileRoute('/blog/$slug')({
  validateSearch: (search) => search as Search,
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useSearch();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <BlogPost post={post} />;
}
