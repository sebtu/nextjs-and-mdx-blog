import Link from "next/link";

type Props = {
  nextPage: number | undefined;
  prevPage?: number | undefined;
};

export default function BlogPagination(props: Props) {
  const { nextPage, prevPage } = props;

  return (
    <div className="flex mt-10 pt-4 border-t">
      {!!prevPage && (
        <Link className="text-pink-700 mr-auto" href={`/blog/page/${prevPage}`}>
          Prev Posts
        </Link>
      )}
      {!!nextPage && (
        <Link className="text-pink-700 ml-auto" href={`/blog/page/${nextPage}`}>
          Next Posts
        </Link>
      )}
    </div>
  );
}
