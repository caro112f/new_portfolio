import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
export default function Project({ slug, title, date, featuredImage, description, index}) {


  const img = featuredImage.responsiveImage;

  let gridchecker = () => {
    if (index === 1 | index === 3 | index === 5) return "lg:col-start-2 lg:row-end-1 rounded-l-md"
    else return "lg:col-start-1 lg:row-end-1 rounded-r-md"
  }

  let oddchecker = () => {
    if (index === 1 | index === 3 | index === 5) return true;
    else return false;
  }
  
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
      <section className="text-black grid lg:grid-cols-2 py-6 my-10 md:my-20 items-center">
        <div className="px-6 py-2">
          <Image src={img.src} alt={title} width={img.width} height={img.height} priority sizes={img.sizes} objectFit="contain" />
        </div>
        <div className={`${gridchecker()} bg-gray-100 p-8 shadow-md md:flex ${oddchecker() === true ? "md:justify-start" : "md:justify-end"}`}>
          <div className={`max-w-[700px] m-auto`}>
            <p>{date}</p>
            <h3 className="pb-1">{title}</h3>
            {description.map((d) => (
              <article key={d.id} className="max-w-[700px] lg:max-w-[600px] pb-4">
                <h4 className="pb-2">{d.heading}</h4>
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
      </section>
    </motion.div>
  );
}
