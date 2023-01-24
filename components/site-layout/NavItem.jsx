import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__link text-base relative transition-all duration-[0.2s] `}>{text}</a>
    </Link>
  );
};

export default NavItem;
