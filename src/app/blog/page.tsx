import posts from "@/data/posts.json";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog | Lena Pietrzak",
  description:
    "A collection of articles dedicated to Lena Pietrzak's experiences and insights.",
};

export default function Blog() {
  return (
    <div className="w-full ">
      <section className="flex flex-col gap-16 p-6 w-full ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl">Blog</h1>
          <p className="text-sm text-foreground/60 md:text-lg text-balance">
            A collection of articles dedicated to Lena Pietrzak's experiences
            and insights.
          </p>
        </div>

        <BlogList />
      </section>
    </div>
  );
}

function BlogList() {
  return (
    <ul className="w-full flex flex-col gap-12 md:gap-16">
      {posts.map((post) => (
        <li className="w-full md:py-12" key={post.slug}>
          <section className="flex flex-col gap-8  w-full max-w-6xl mx-auto px-0">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-2xl md:text-4xl text-balance ">
                {post.heading}
              </h3>
              <p className="text-sm text-foreground md:text-lg line-clamp-3">
                {post.content}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold hover:underline"
              >
                Read More {"->"}
              </Link>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
