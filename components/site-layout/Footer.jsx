import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"

export default function Footer() {
  return (
    <section id="contact" className="bg-gray-900 text-white">
      <div className="max-w-[1400px] m-auto flex justify-between gap-20 md:flex-row flex-col px-10 py-10">
        <div className="flex flex-col gap-4">
          <h6>Contact me:</h6>
          <ul className="flex flex-col gap-4">
            <li>Caroline Holm Nielsen</li>
            <li>
              <Link href={"mailto:carolineholmnielsen@gmail.com"}>
                <p className="flex items-center gap-2 hover:cursor-pointer">
                  <AiOutlineMail size={30} />
                  Send mail
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:items-center">
          <h6>Social links:</h6>
          <ul className="grid gap-4">
            <li className="hover:cursor-pointer">
              <Link href={"https://github.com/caro112f"}>
                <a>
                  <FaGithub size={40} />
                </a>
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href={"https://www.linkedin.com/in/caroline-holm-nielsen-ab8568231/"}>
                <a>
                  <FaLinkedin size={40} />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:items-center">
          <h6>This porfolio is created with:</h6>
          <ul className="flex md:items-center flex-col">
            <li>Next.js</li>
            <li>Tailwind</li>
            <li>DatoCMS</li>
            <li>Framer Motion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
