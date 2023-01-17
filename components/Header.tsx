import Link from "next/link";

function Header() {
  return (
    <div className="border-b-[1px] border-gray-400 bg-yellow-500">
      <div className="px-10 md:px-0 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <Link href={`/`}>
          <div className="flex items-center gap-5">
            <div>
              <img src="/medium.png" className="h-10 w-10" alt="medium icon" />
            </div>

            <p className="text-xl font-bold">Medium</p>
          </div>
        </Link>

        <div className="space-x-6 hidden md:inline-block">
          <Link href={"/story"}>Our Story</Link>
          <Link href={"/membership"}>Membership</Link>
          <Link href={"/write"}>Write</Link>

          <button className="px-4 py-2 bg-black rounded-full text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
