import { createServerFn } from '@tanstack/react-start';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import type { BlogPost } from '@/types';

export const getAllBlogPosts = createServerFn().handler(
  async (): Promise<BlogPost[]> => {
    const blogDir = path.join(process.cwd(), 'app/content/blog-posts');
    const files = fs
      .readdirSync(blogDir)
      .filter((file) => file.endsWith('.mdx'));

    const posts = files.map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        ...data,
        content,
      } as BlogPost & { content: string };
    });

    return posts.sort(
      (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
    );
  },
);

export const getBlogPostBySlug = createServerFn({
  method: 'GET',
})
  .validator((slug: string) => {
    if (!slug || typeof slug !== 'string') {
      throw new Error('Slug is required and must be a string');
    }
    return slug;
  })
  .handler(
    async ({
      data: slug,
    }): Promise<(BlogPost & { content: string }) | null> => {
      const blogDir = path.join(process.cwd(), 'app/content/blog-posts');
      const filePath = path.join(blogDir, `${slug}.mdx`);

      if (!fs.existsSync(filePath)) {
        return null;
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        ...data,
        content,
      } as BlogPost & { content: string };
    },
  );

export const getBlogPostById = createServerFn({
  method: 'GET',
})
  .validator((data: { id: string }) => data.id)
  .handler(
    async ({ data: id }): Promise<(BlogPost & { content: string }) | null> => {
      const blogDir = path.join(process.cwd(), 'app/content/blog-posts');
      const files = fs
        .readdirSync(blogDir)
        .filter((file) => file.endsWith('.mdx'));

      for (const file of files) {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        if (data.id === id) {
          return {
            ...data,
            content,
          } as BlogPost & { content: string };
        }
      }

      return null;
    },
  );
