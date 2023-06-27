import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-palette-lighter top-0 z-20">
      <Link href="/" passhref="true">
        <div className="flex justify-center items-center mx-auto py-4">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-8 w-8"
           viewBox="0 0 20 20"
           fill="#5995da"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="text-xl tracking-tight ml-1 header-span">
            La Maison
          </span>
        </div>
      </Link>
    </header>
  );
}

export default Header;