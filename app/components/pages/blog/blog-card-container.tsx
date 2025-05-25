import Container from '@/components/shared/container';
import BlogCard from '@/components/pages/blog/blog-card';
import type { BlogPost } from '@/types';

interface BlogCardContainerProps {
  posts: BlogPost[];
}

export default function BlogCardContainer({ posts }: BlogCardContainerProps) {
  return (
    <Container tag='section'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
