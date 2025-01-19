import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-blue-950/30 w-full h-16 flex items-center justify-between px-4">
      <div className="name flex items-center space-x-2">
        <img src="/favicon.svg" alt="Logo" width="50" height="50" />
        <h1 className="text-zinc-300 text-lg font-semibold">How To Cook It</h1>
      </div>

      
      <nav className="liens">
        <Link to="/search" className="text-zinc-300 hover:text-white transition ml-2">
          Search
        </Link>
      </nav>
    </header>
  );
};

export default Header;
