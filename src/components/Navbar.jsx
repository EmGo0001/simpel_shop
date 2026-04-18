import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-10">
      <Link href="/">
        <h2 className="text-2xl font-extrabold">HOME</h2>
      </Link>

      <Link href="/products">
        <h2 className="text-2xl font-extrabold">PRODUCTS</h2>
      </Link>
    </div>
  );
};

export default Navbar;
