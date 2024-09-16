import Link from "next/link";
import Image from "next/image";
import posts from "@/data/posts.json";
export default function Home() {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
}

function Blog() {
  return (
    <div className="w-full ">
      <section className="flex flex-col gap-12 p-6 w-full ">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl">Blog</h2>
          <p className="text-sm text-foreground/60 md:text-lg text-balance">
            A collection of articles dedicated to Lena Pietrzak's experiences
            and insights.
          </p>
          <Link
            href="/blog"
            className="text-sm text-foreground/60 md:text-lg hover:underline"
          >
            See all articles {"->"}
          </Link>
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

function Hero() {
  return (
    <>
      <div className="p-6  flex flex-col  items-center justify-center gap-4 md:gap-8">
        <Image
          src="/images/beauty/10.JPG"
          alt="Lena Pietrzak"
          width={400}
          height={400}
          priority={true}
          className="object-cover rounded max-h-[300px] mb-2"
        />
        <h1 className="text-3xl font-bold text-center md:text-5xl">
          Lena Pietrzak
        </h1>
        <p className=" md:text-lg text-center max-w-sm text-balance">
          I am Lena Barbara Pietrzak, a Fashion Model now in Paris, studying at
          IFM, Institut Français de la Mode. Originally from Poland and raised
          in Portugal, love London.
        </p>
        <Link
          href="/portfolio"
          className="bg-black hover:bg-back/80 text-white  py-2 px-4 rounded"
        >
          My Portfolio {"->"}
        </Link>
      </div>
    </>
  );
}
