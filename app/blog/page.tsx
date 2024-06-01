import { queryPaginatedPosts } from "@/db/queries";
import PostList from "@/components/PostList";
import BlogPagination from "@/components/BlogPagination";

export default function Blog() {
  const { prevPage, posts, nextPage } = queryPaginatedPosts(1);

  return (
    <>
      <PostList title="Blog Posts" posts={posts} />
      <BlogPagination prevPage={prevPage} nextPage={nextPage} />
    </>
  );
}
