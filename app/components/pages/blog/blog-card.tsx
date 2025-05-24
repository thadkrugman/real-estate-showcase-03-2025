import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/types';
import { Link } from '@tanstack/react-router';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      key={post.id}
      className='flex flex-col items-start justify-between'
    >
      <div className='relative w-full'>
        <Link to='/blog/$slug' params={{ slug: post.slug }}>
          <img
            alt=''
            src={post.imageUrl}
            className='aspect-video w-full rounded-2xl bg-muted object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
          />
        </Link>
      </div>
      <div className='max-w-xl'>
        <div className='mt-8 flex items-center gap-x-4 text-xs'>
          <time
            dateTime={post.datetime}
            className='text-muted-foreground pointer-events-none'
          >
            {post.date}
          </time>
          <Badge variant='default'>{post.category}</Badge>
        </div>
        <div className='group relative'>
          <h3 className='mt-3 text-lg/6 font-bold text-foreground'>
            <Link to='/blog/$slug' params={{ slug: post.slug }}>
              <span className='absolute inset-0' />
              {post.title}
            </Link>
          </h3>
          <p className='mt-5 line-clamp-3 text-sm/6 text-muted-foreground'>
            {post.description}
          </p>
        </div>
        <div className='relative mt-8 flex items-center gap-x-4'>
          <img
            alt=''
            src={post.author.imageUrl}
            className='size-10 rounded-full bg-muted'
          />
          <div className='text-sm/6'>
            <p className='font-semibold text-foreground'>
              <span className='absolute inset-0' />
              {post.author.name}
            </p>
            <p className='text-muted-foreground'>{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
