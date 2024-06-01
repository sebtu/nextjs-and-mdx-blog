import PostPreview from "@/components/PostPreview";
import type { Post } from "@/db/types";

type Props = {
  title: string;
  posts: Post[];
};

export default function PostList(props: Props) {
  const { posts, title } = props;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold pb-6">{title}</h2>
      <ul className="mb-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostPreview {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
