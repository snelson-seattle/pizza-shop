import Link from "next/link";
import Logo from "./Logo";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="w-full flex justify-center items-center">
      <ul className="flex items-center gap-6 text-xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <Logo />
        <li>
          <Link href="/menu">
            Menu
          </Link></li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
