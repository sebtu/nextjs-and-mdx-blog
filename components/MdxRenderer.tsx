import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  source: string;
};

export default function MdxRenderer(props: Readonly<Props>) {
  const { source } = props;

  return (
    <div className="max-w-full prose prose-pink mb-12">
      <MDXRemote source={source} components={{}} />
    </div>
  );
}
