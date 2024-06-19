# Simple Blog with Next.js and next-mdx-remote

This project is a simple blog built using `next.js`, `next-mdx-remote`, `gray-matter` and MDX files.

It allows you to write posts in Markdown (MDX) format, including JSX components, and render them as static pages using Next.js' static site generation (SSG) feature.

The project uses Tailwind CSS for styling, ensuring a modern and responsive design, including styling for blog posts rendered from MDX files.

The blog has a straightforward structure with components for layout, dynamic routing for individual posts, and a directory `db` for storing MDX files.

Below is a series of posts describing step by step how this project was created:

1. [How to create a simple blog with Next.js and MDX files](https://scoped.blog/posts/how-to-create-a-simple-blog-with-nextjs-and-mdx-files)
2. [How to customize MDX components with JSX](https://scoped.blog/posts/how-to-customize-mdx-components-with-jsx)

## Getting Started

To get started clone the repository then run:

```bash
npm install
```

and

```bash
npm run dev
```

then open `localhost:3000`

## MDX Files and Queries

The MDX files are stored in the `db/posts` folder, and there is a `queries.ts` file that provides functions to read these posts. This setup makes it easy to manage and retrieve blog content programmatically, ensuring that all post-related logic is encapsulated in a single place.

## App

The `app` directory contains the main page, a `[slug]` directory for individual blog posts, and a `page/[pageNum]` directory for paginated listings of posts. This structure supports easy navigation and management of blog content.
