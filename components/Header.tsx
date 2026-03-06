import Link from "next/link";

const Header = () => {
  return (
    <div className="p-10 absolute flex items-end justify-end content-end">
      <Link href="/agents" />s
    </div>
  );
};

export default Header;
