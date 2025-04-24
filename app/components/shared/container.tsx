import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  tag?: 'div' | 'section' | 'header' | 'footer';
  className?: string;
  id?: string;
  navSpacer?: boolean;
  padding?: boolean;
};

export default function Container({
  children,
  tag = 'div',
  className,
  id,
  navSpacer = false,
  padding = true,
}: Props) {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        'w-full flex flex-col',
        navSpacer ? 'mt-20' : '',
        padding ? 'px-6 sm:px-8 md:px-10 lg:px-16 2xl:px-24' : '',
        className,
      )}
      id={id}
    >
      {children}
    </Tag>
  );
}
