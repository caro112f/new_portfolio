import Image from "next/image";
import Link from "next/link";
import {HiOutlineArrowNarrowRight, HiOutlineArrowUturnLeft} from "react-icons/hi"
import {IoIosArrowBack} from "react-icons/io"
import Head from "next/head";

export default function SingleProject({title, description, skills, featuredImage, gallery, link}) {

     const img = featuredImage.responsiveImage;

     
  return (
    <main>
      <Head>
        <title>{title} | Project</title>
        <meta name="description" content={`Read more about my project: ${title} here.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo-grey.svg"} />
      </Head>
      <div className="bg-gray-200 p-4 relative">
        <Link href={"/#projects"}>
          <IoIosArrowBack size={40} className="hover:cursor-pointer absolute top-1 left-1 md:top-4 md:left-4" />
        </Link>
        <h1 className="text-center py-4 pt-8">{title}</h1>
      </div>
      <section className="grid lg:grid-cols-2 py-12 px-8 gap-4 max-w-[1300px] m-auto">
        <article>
          {description.map((d) => (
            <article key={d.id} className="max-w-[700px] lg:max-w-[600px] pb-4">
              <h3 className="pb-2">{d.heading}</h3>
              <p>{d.text}</p>
            </article>
          ))}
          <h4 className="pb-4">Keywords</h4>
          <div className="flex gap-6 flex-wrap pb-4">
            {skills.map((d) => (
              <div key={d.id} className="bg-gray-200 p-2 items-center rounded shadow-md">
                <h5 className="">{d.title}</h5>
              </div>
            ))}
          </div>
        </article>
        <article className="grid lg:grid-cols-4 grid-rows-1 gap-4">
          {gallery.map((object, index) => (
            <div key={object.responsiveImage.src} className={`${index === 1 ? "col-start-4 row-end-1" : "col-start-1 col-end-4 row-end-1"}}`}>
              <Image
                src={object.responsiveImage.src}
                alt={object.responsiveImage.alt}
                width={object.responsiveImage.width}
                height={object.responsiveImage.height}
                priority
                sizes={object.responsiveImage.sizes}
                objectFit="contain"
              />
            </div>
          ))}
        </article>
      </section>

      <div className="text-white bg-rose-900 py-4 flex justify-center">
        <Link href={link}>
          <p className="m-auto flex align-middle items-center gap-2 hover:gap-4 ease-out duration-300 hover:cursor-pointer">
            Go to site
            <HiOutlineArrowNarrowRight />
          </p>
        </Link>
      </div>
    </main>
  );
}
//