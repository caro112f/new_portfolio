import Link from "next/link";

export default function Nav() {
  return (
    <section className="w-[100vw] h-[10vh] flex justify-between items-center bg-white shadow-lg fixed z-10 px-6 align-middle font-medium">
    <Link href="/">Home</Link>
      <ul className="flex justify-center gap-20">
        <li>
          <Link href="/#aboutme">About me</Link>
        </li>
        <li>
          <Link href="/#techstack">Tech stack</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
      </ul>
    </section>
  );
}
