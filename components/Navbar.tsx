import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center relative top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-4 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/yuva-nidhi-logo.svg"
            width={75}
            height={60}
            alt="YuvaNidhiScheme"
          />
        </Link>

        <ul>
          <li className="body-text !font-normal !text-2xl">
            <Link href="/">
              Yuva Nidhi Scheme
            </Link>
          </li>
        </ul>

        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/" target="_blank">
              Home
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="https://sevasindhugs.karnataka.gov.in/" target="_blank">
              SavaSindus
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="/sitemap.xml">
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
