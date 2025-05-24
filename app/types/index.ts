// Blog
export interface BlogAuthor {
  name: string;
  role: string;
  imageUrl: string;
}

export interface BlogPostBodySectionContent {
  title: string;
  text: { id: string; text: string }[];
}

export type BlogPostBodySection =
  | {
      id: string;
      type: 'text';
      content: BlogPostBodySectionContent;
    }
  | {
      id: string;
      type: 'image';
      image: {
        url: string;
        alt: string;
      };
    };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  bodySections?: BlogPostBodySection[];
  imageUrl: string;
  date: string;
  datetime: string;
  category: string;
  author: BlogAuthor;
}
