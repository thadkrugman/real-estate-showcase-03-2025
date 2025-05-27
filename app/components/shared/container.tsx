import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  tag?: 'div' | 'section' | 'header' | 'footer' | 'article';
  className?: string;
  id?: string;
  navSpacer?: boolean;
  navSpacerForImage?: boolean;
  padding?: boolean;
};

export default function Container({
  children,
  tag = 'div',
  className,
  id,
  navSpacer = false,
  navSpacerForImage = false,
  padding = true,
}: Props) {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        'w-full flex flex-col max-w-screen-2xl mx-auto',
        navSpacer ? 'mt-15 sm:mt-17 md:mt-18 lg:mt-20' : '',
        navSpacerForImage ? 'pt-15 sm:pt-17 md:pt-18 lg:pt-20' : '',
        padding ? 'px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24' : '',
        className,
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
