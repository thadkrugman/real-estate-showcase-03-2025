import Container from '@/components/shared/container';
import BlogPost from './blog-post';
import type { Post } from '@/types';

interface BlogPostsProps {
  posts: Post[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <Container navSpacer={true} className='pt-24 md:pt-36'>
      <div className='mx-auto max-w-2xl text-center'>
        <h1 className='text-balance heading-2'>From the blog</h1>
        <p className='text-center text-muted-foreground max-w-xl mx-auto mt-4 text-balance'>
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className='mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}
