import Link from 'next/link';
import { queryLatestPosts } from '@/db/queries'
import BlogDescription from '@/components/BlogDescription';
import PostList from '@/components/PostList';

export default function Home() {
  const posts = queryLatestPosts();

  return (
    <>
      <BlogDescription />
      <PostList title="Latest Posts:" posts={posts} />
      <Link className="block text-pink-700 text-center pt-3 pb-5" href="/blog/page/1">Show all posts</Link>
    </>
  );
}
