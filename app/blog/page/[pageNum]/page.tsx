import { notFound } from "next/navigation";
import { calculatePostPageNumbers, queryPaginatedPosts } from "@/db/queries";
import PostList from "@/components/PostList";
import BlogPagination from "@/components/BlogPagination";

type Props = {
  params: { pageNum: string };
};

export async function generateStaticParams() {
  return calculatePostPageNumbers();
}

export default async function BlogPage(props: Readonly<Props>) {
  const {
    params: { pageNum },
  } = props;
  const { prevPage, posts, nextPage } = queryPaginatedPosts(Number(pageNum));

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <PostList title="Posts" posts={posts} />
      <BlogPagination prevPage={prevPage} nextPage={nextPage} />
    </>
  );
}
