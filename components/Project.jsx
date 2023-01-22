import Image from "next/image";
import NextLink from "next/link"
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Project({ slug, title, date, featuredImage, description}) {

  const img = featuredImage.responsiveImage;

  let checker = () => {
    if (title === "Foxholm" | title === "Hacked Hogwarts") return "lg:col-start-2 lg:row-end-1 rounded-l-md"
    else return "lg:col-start-1 lg:row-end-1 rounded-r-md"
  }


  return (
    <section className="text-black grid lg:grid-cols-2 py-6">
      <div className={`${checker()} bg-gray-100 p-8 shadow-md`}>
        <div className="max-w-[700px] m-auto">
          <p>{date}</p>
          <h2>{title}</h2>
          {description.map((d) => (
            <article key={d.id} className="max-w-[700px] lg:max-w-[600px] pb-4">
              <h3 className="pb-2">{d.heading}</h3>
              <p>{d.text}</p>
            </article>
          ))}
          <Link href={`/projects/${slug}`} passHref>
            <div className="flex align-middle items-center gap-2 hover:gap-4 ease-out duration-300 font-bold text-rose-900 hover:cursor-pointer">
              See more
              <HiOutlineArrowNarrowRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-6 py-2">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} priority sizes={img.sizes} objectFit="contain" />
      </div>
    </section>
  );
}
