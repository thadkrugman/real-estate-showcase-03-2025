import Container from '@/components/shared/container';
import type { BlogPost } from '@/types';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Container tag='article' navSpacer={true} className='pt-24 md:pt-36'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='text-balance heading-2'>{post.title}</h1>
        <p className='text-muted-foreground text-xl/8 mt-6'>
          {post.description}
        </p>

        {/* Author section */}
        <div className='flex items-center gap-4 mt-8 pb-8 border-b border-border'>
          <img
            src={post.author.imageUrl}
            alt={post.author.name}
            className='w-12 h-12 rounded-full object-cover'
          />
          <div>
            <p className='font-medium text-foreground'>{post.author.name}</p>
            <p className='text-sm text-muted-foreground'>{post.author.role}</p>
          </div>
        </div>

        <div className='max-w-2xl flex flex-col space-y-16 mt-14'>
          {post.bodySections.map((section) => (
            <div key={section.id}>
              {section.type === 'text' ?
                <div key={section?.id}>
                  <h2 className='text-balance heading-3 mb-6'>
                    {section.content?.title}
                  </h2>
                  <div className='flex flex-col space-y-8'>
                    {section.content?.text.map((content) => (
                      <p key={content?.id} className='text-muted-foreground'>
                        {content.text}
                      </p>
                    ))}
                  </div>
                </div>
              : <div key={section?.id}>
                  <img
                    src={section?.image?.url}
                    alt={section?.image?.alt}
                    className='w-full h-auto rounded-xl'
                  />
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
