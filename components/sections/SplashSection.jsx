import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

export default function SplashSection() {
  return (
    <section className="py-32 md:py-44 grid place-content-center">
      <h1 className="flex flex-col">
        <span className="text-sh6 font-sans">Caroline Holm Nielsen</span>
        <span className="text-rose-800 md:text-xlwh1">Portfolio</span>
        <span className="text-sh6 font-sans text-end">Frontend Developer</span>
      </h1>
      <div className='m-auto mt-20 animate-bounce'>
        <Link href={"/#aboutme"}>
          <IoIosArrowDown size={45} />
        </Link>
      </div>
    </section>
  );
}
