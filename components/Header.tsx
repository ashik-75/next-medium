"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY;

      if (height > 480) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`border-b-[1px] border-gray-400 sticky top-0 left-0 ${
        show ? "bg-white" : "bg-yellow-500"
      }`}
    >
      <div className="px-10 md:px-0 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <Link href={`/`}>
          <div className="flex items-center gap-5">
            <div>
              <img src="/medium.png" className="h-10 w-10" alt="medium icon" />
            </div>

            <p className="text-xl font-bold">Medium</p>
          </div>
        </Link>

        <div className="space-x-6 hidden md:inline-block font-medium">
          <Link href={"/story"}>Our Story</Link>
          <Link href={"/membership"}>Membership</Link>
          <Link href={"/write"}>Write</Link>

          <button className="px-4 py-2 bg-black rounded-full text-white">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
