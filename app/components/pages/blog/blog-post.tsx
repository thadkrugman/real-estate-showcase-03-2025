import type { Post } from '@/types';

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article
      key={post.id}
      className='flex flex-col items-start justify-between'
    >
      <div className='relative w-full'>
        <img
          alt=''
          src={post.imageUrl}
          className='aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
        />
        <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
      </div>
      <div className='max-w-xl'>
        <div className='mt-8 flex items-center gap-x-4 text-xs'>
          <time dateTime={post.datetime} className='text-gray-500'>
            {post.date}
          </time>
          <a
            href={post.category.href}
            className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
          >
            {post.category.title}
          </a>
        </div>
        <div className='group relative'>
          <h3 className='mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600'>
            <a href={post.href}>
              <span className='absolute inset-0' />
              {post.title}
            </a>
          </h3>
          <p className='mt-5 line-clamp-3 text-sm/6 text-gray-600'>
            {post.description}
          </p>
        </div>
        <div className='relative mt-8 flex items-center gap-x-4'>
          <img
            alt=''
            src={post.author.imageUrl}
            className='size-10 rounded-full bg-gray-100'
          />
          <div className='text-sm/6'>
            <p className='font-semibold text-gray-900'>
              <a href={post.author.href}>
                <span className='absolute inset-0' />
                {post.author.name}
              </a>
            </p>
            <p className='text-gray-600'>{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
