import { createFileRoute } from '@tanstack/react-router';
import BlogCardContainer from '../../components/pages/blog/blog-card-container';
import { posts } from '@/lib/db/blog-posts';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <BlogCardContainer posts={posts} />
    </>
  );
}
