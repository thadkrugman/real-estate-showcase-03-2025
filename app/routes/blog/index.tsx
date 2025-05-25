import { createFileRoute } from '@tanstack/react-router';
import BlogCardContainer from '../../components/pages/blog/blog-card-container';
import { posts } from '@/content/blog-posts/blog-posts';
import Header from '@/components/shared/header';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        title='Real Estate Insights & Expert Advice'
        description="Stay ahead of the market with insider tips, market analysis, and
          expert guidance. Whether you're buying your first home, selling a
          property, or building an investment portfolio, our real estate
          professionals share the knowledge you need to make informed decisions."
      />
      <BlogCardContainer posts={posts} />
    </>
  );
}
