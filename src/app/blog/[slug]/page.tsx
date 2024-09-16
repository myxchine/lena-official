import posts from "@/data/posts.json";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.heading} | Lena Pietrzak`,
    description: post.content,
  };
}

export default function Site({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <section className="flex flex-col  w-full gap-8     items-center flex-shrink-0  relative overflow-hidden max-w-6xl mx-auto px-6 py-12  md:flex-row">
      <div className="flex flex-col gap-4 w-full ">
        <h1 className="text-2xl md:text-3xl font-bold">{post.heading}</h1>
        <Link
          href={"/portfolio"}
          className="hover:underline text-xs text-foreground/60 md:text-lg"
        >
          My Portfolio {"->"}
        </Link>
        <p className=" w-full">{post.content}</p>

        <Link
          href={"/portfolio"}
          className="bg-black hover:bg-back/80 text-white  py-2 px-4 rounded w-fit mt-4"
        >
          My Portfolio {"->"}
        </Link>
      </div>
    </section>
  );
}
