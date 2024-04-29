import Link from "next/link";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="bg-white bg-opacity-90 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-gray-800 text-xl font-bold">WartaGG</span>
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link href="/">
            <span className="text-gray-800 hover:text-gray-600">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-800 hover:text-gray-600">About</span>
          </Link>
          <SearchInput />
        </nav>
      </div>
    </header>
  );
};

export default Header;
