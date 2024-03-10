import SlideIn from "./SlideIn";
import FadeIn from "./FadeIn";
import Link from "next/link";
import TextGradient from "./TextGradient";
import { MdOutlineArrowOutward } from "react-icons/md";

type blogPost = {
  title: string;
  caption: string;
  route: string;
  date: string;
};

const featured: blogPost[] = [
  {
    title: "Engineering Project: Shelph",
    caption:
      "An overview of my reading/watch list management web app project called Shelph",
    route: "shelph",
    date: "March 3, 2024",
  },
  {
    title: "Example Blog post",
    caption:
      "Eventually this will be a real and magnificent blog post you can read. It might even be the best blog post you ever read. Only time will tell.",
    route: "example",
    date: "March 1, 2024",
  },
  {
    title: "Example Blog post",
    caption:
      "Eventually this will be a real and magnificent blog post you can read. It might even be the best blog post you ever read. Only time will tell.",
    route: "example",
    date: "March 1, 2024",
  },
];
type props = {
  dark?: boolean;
  header?: string;
  showReadMore?: boolean;
  longHeader?: boolean;
};

//Creates a section featuring three blog posts
export default function FeatureBlog({
  dark = false,
  header = "Blog",
  showReadMore = true,
  longHeader = false,
}: props) {
  const cardColor = dark ? "lgreen" : "white";
  const textColor = dark ? "white" : "lgreen";
  const underlineWidth = longHeader ? "sm:w-[170%] w-[150%]" : "w-full";

  return (
    <section className="flex flex-col sm:px-16 pb-20 px-10 3xl:px-72 gap-10">
      <SlideIn>
        <div className="flex flex-col sm:w-48 w-28 items-center sm:gap-2 gap-1 sm:mb-20">
          <h2 className="sm:text-6xl text-3xl font-semibold">{header}</h2>
          <div
            className={`${underlineWidth} h-1 bg-${cardColor} rounded-full`}></div>
        </div>
      </SlideIn>
      <div className="flex gap-10 lg:flex-row flex-col justify-items-stretch items-stretch">
        {featured.map((post, index) => {
          const delay = 0.2 + index / 10;

          return (
            <FadeIn
              delay={delay}
              key={crypto.randomUUID()}
              styles="w-full shadow-xl rounded-2xl">
              <Link href={`/blog/${post.route}2890`}>
                <div
                  className={`flex flex-col p-5 items-start bg-${cardColor}  rounded-2xl text-${textColor} gap-3 w-full h-[100%] relative hover:scale-105 transition-all ease-linear hover:outline-lblue hover:outline-4 hover:outline hover:text-lblue hover:shadow-2xl`}>
                  <p className={`sm:text-sm text-${textColor}`}>{post.date}</p>
                  <h3
                    className={`md:text-3xl text-xl font-semibold text-${textColor}`}>
                    {post.title}
                  </h3>
                  <p className={`md:text-xl text-sm text-${textColor}`}>
                    {post.caption}
                  </p>
                  <div className="flex gap-1 items-center underline mb-32">
                    <p className="text-sm">Read</p>
                    <MdOutlineArrowOutward />
                  </div>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center sm:justify-start gap-3 lg:gap-20 self-center lg:self-start">
        {showReadMore && (
          <Link
            href="/blog"
            className={`bg-white rounded-full sm:px-10 sm:py-4 sm:text-3xl px-6 py-2 text-xl font-semibold text-nowrap hover:scale-105 transition-all ease-linear hover:shadow-xl${
              dark ? "border-2 border-lgreen" : ""
            }`}>
            <TextGradient>Read More</TextGradient>
          </Link>
        )}
        <Link
          href="/blog"
          className="underline text-base opacity-60 hover:opacity-100 transition-all ease-linear">
          Subscribe to my email list 🎁
        </Link>
      </div>
    </section>
  );
}
