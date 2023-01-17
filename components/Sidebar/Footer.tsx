import Link from "next/link";
import links from "../../data/links";

function Footer() {
  return (
    <div className="gap-5 hidden md:flex text-gray-500">
      {links.map((link) => (
        <Link href={link.href} key={link.id}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Footer;
