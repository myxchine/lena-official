import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Lena Pietrzak",
  description:
    "Take a look at Lena Pietrzak's portfolio, showcasing her work and style.",
};

export default function Portfolio() {
  return (
    <div className="p-6 w-full flex flex-col items-center justify-center gap-8 ">
      <h1 className="text-3xl font-bold w-full">My Portfolio</h1>
      <p className="w-full">
        Take a look at my portfolio, showcasing my work and style.
      </p>

      <video
        className="w-full max-w-[400px] rounded-lg shadow-lg md:mt-4"
        autoPlay
        muted
        loop
        controls
      >
        <source src="/lena-pietrzak.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
