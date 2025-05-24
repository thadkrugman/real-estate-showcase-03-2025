import Container from '@/components/shared/container';
import { Separator } from '@/components/ui/separator';
import type { BlogPost } from '@/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostMdxProps {
  post: BlogPost & { content: string };
}

export default function BlogPostMdx({ post }: BlogPostMdxProps) {
  return (
    <Container tag='article' navSpacer={true} className='pt-24 md:pt-36'>
      <div className='mx-auto max-w-3xl'>
        <h1 className='text-balance heading-2'>{post.title}</h1>
        <p className='text-muted-foreground text-xl/8 mt-6'>
          {post.description}
        </p>
        <div className='flex items-center gap-4 mt-8'>
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
        <Separator className='mt-8' />
        <div className='max-w-2xl mt-14'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className='text-balance heading-3 mb-6 mt-16 first:mt-0'>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className='text-balance heading-4 mb-4 mt-12'>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className='text-muted-foreground mb-8'>{children}</p>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className='w-full h-auto rounded-xl mb-16 mt-16'
                />
              ),
              ul: ({ children }) => (
                <ul className='list-disc list-inside text-muted-foreground mb-8 space-y-2'>
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className='list-decimal list-inside text-muted-foreground mb-8 space-y-2'>
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className='text-muted-foreground'>{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className='border-l-4 border-primary pl-4 italic text-muted-foreground mb-8'>
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className='bg-muted px-2 py-1 rounded text-sm font-mono'>
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className='bg-muted p-4 rounded-lg overflow-x-auto mb-8'>
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </Container>
  );
}
