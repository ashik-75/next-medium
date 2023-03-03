import Link from "next/link";
import links from "../../data/links";
import Tags from "./Tags";

function Sidebar() {
  return (
    <div className="space-y-5 p-5 md:p-10 md:px-0">
      <h1 className=" text-gray-500 font-semibold text-lg">
        Discover more of what you matters to you
      </h1>

      <Tags />

      <div className="gap-5 hidden md:flex text-gray-500 ml-2 border-t py-5">
        {links.map((link) => (
          <Link href={link.href} key={link.id} className="text-sm">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
