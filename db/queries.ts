import fs from 'fs';
import matter from 'gray-matter';
import type { Post } from '@/db/types';

const POSTS_PER_PAGE = 4;
const POSTS_DIRECTORY = `${process.cwd()}/db/posts`;

export const queryLatestPosts = (amount = POSTS_PER_PAGE) => {
  const posts = queryAllPosts();
  const postsByDate = _orderPostsByDate(posts);

  return postsByDate.slice(0, amount);
};

export const queryPaginatedPosts = (page: number, postsPerPage = POSTS_PER_PAGE) => {
  const posts = queryAllPosts();
  const postsByDate = _orderPostsByDate(posts);
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = postsByDate.slice(start, end);

  return {
    prevPage: page > 1 ? page - 1 : undefined,
    posts: paginatedPosts,
    nextPage: posts.length > end ? page + 1 : undefined
  };
};

export const calculatePostPageNumbers = (postsPerPage = POSTS_PER_PAGE) => {
  const posts = queryAllPosts();
  const numPages = Math.ceil(posts.length / postsPerPage);
  
  return Array.from({ length: numPages }, (_, i) => ({ pageNum: String(i+1) }));
}

export const queryPostBySlug = (slug: string) => {
  const posts = queryAllPosts();
  const foundPost = posts.find(post => post.slug === slug);

  return foundPost;
};

export const queryAllPosts = (): Post[] => {
  const mdxFileNames = _queryMdxFiles()

  return mdxFileNames.map(filename => {
    const rawPost = fs.readFileSync(`${POSTS_DIRECTORY}/${filename}`);
    const { data, content } = matter(rawPost);
    const { date, description, title } = data;

    return {
      content,
      date,
      description,
      slug: filename.replace('.mdx', ''),
      title
    };
  });
};

const _queryMdxFiles = () => {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter(filename => filename.endsWith('.mdx'));
}

const _orderPostsByDate = (posts: Post[]): Post[] => {
  return posts.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
};
