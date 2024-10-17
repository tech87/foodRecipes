import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center md:justify-around border-b border-customBorder pb-2 pt-2 w-full">
      <div className="flex items-center ml-6">
        <i className="ri-restaurant-2-line text-2xl md:text-4xl text-sky-200"></i>
        <h2 className="text-2xl md:text-4xl text-sky-200">RecipesApp</h2>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-xl text-sky-200 hover:text-slate-300">
          Home
        </a>
        <a href="#" className="text-xl text-sky-200 hover:text-slate-300">
          About
        </a>
        <a href="#" className="text-xl text-sky-200 hover:text-slate-300">
          Recipes
        </a>
      </div>
      <div className="md:hidden ml-auto mr-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sky-200 hover:text-gray-300 focus:outline-none"
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>
      {/* Mobile Menu, visible when isOpen is true */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F2027] md:hidden">
          <a
            href="#"
            className="block text-sky-200 hover:bg-teal-900 px-6 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-sky-200 hover:bg-teal-900 px-6 py-2"
          >
            About
          </a>
          <a
            href="#"
            className="block text-sky-200 hover:bg-teal-900 px-6 py-2"
          >
            Recipes
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
