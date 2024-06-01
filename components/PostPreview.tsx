import Link from 'next/link';
import type { Post } from '@/db/types';

type Props = Pick<Post, 'description' | 'slug' | 'title'>;

export default function PostPreview (props: Props) {
  const { description, slug, title } = props;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="leading-7">{description}</p>
      <Link className="text-pink-700" href={`/blog/${slug}`}>Read More</Link>
    </div>
  );
}
