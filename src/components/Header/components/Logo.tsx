import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="relative h-full w-48 hidden lg:block">
          <Image
            src="/assets/logo.png"
            alt="Book Outdoors"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
      <Link href="/">
        <a className="relative h-full w-10 lg:hidden">
          <Image
            src="/assets/logo.svg"
            alt="Book Outdoors"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
    </>
  );
};
