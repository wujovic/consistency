import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-20 xl:px-[10rem] z-50 sticky top-0 bg-white shadow-lg">
      <div className="flex items-center justify-between py-5">
        <div>
          <h1 className="sm:text-[14pt] md:text-[16pt] xl:text-[22pt] nav-link transition ease-in duration-150 hover:text-[#2b2d42]">
            <Link to="/">Consistency</Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-[5rem] justify-center ">
            <li className="sm:text-[14pt] md:text-[16pt] nav-link transition ease-in duration-150 hover:underline hover:text-[#2b2d42]">
              <Link to="/login">Login</Link>
            </li>
            <li className="sm:text-[14pt] md:text-[16pt] nav-link transition ease-in duration-150 hover:underline hover:text-[#2b2d42]">
              <Link to="/register">Register</Link>
            </li>
            <li className="sm:text-[14pt] md:text-[16pt] nav-link transition ease-in duration-150 hover:underline hover:text-[#2b2d42]">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
