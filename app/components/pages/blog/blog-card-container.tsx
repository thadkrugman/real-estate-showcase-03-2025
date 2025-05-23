import Container from '@/components/shared/container';
import BlogCard from '@/components/pages/blog/blog-card';
import type { BlogPost } from '@/types';

interface BlogCardContainerProps {
  posts: BlogPost[];
}

export default function BlogCardContainer({ posts }: BlogCardContainerProps) {
  return (
    <Container tag='section' navSpacer={true} className='pt-24 md:pt-36'>
      <div className=''>
        <h1 className='text-balance heading-2 max-w-2xl'>
          Real Estate Insights & Expert Advice
        </h1>
        <p className=' text-muted-foreground max-w-3xl mt-4 text-balance'>
          Stay ahead of the market with insider tips, market analysis, and
          expert guidance. Whether you're buying your first home, selling a
          property, or building an investment portfolio, our real estate
          professionals share the knowledge you need to make informed decisions.
        </p>
      </div>
      <div className='mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
