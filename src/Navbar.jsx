import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-customBorder pb-2 pt-2 w-full">
      <div className="flex items-center ml-2">
        <i class="ri-restaurant-2-line text-2xl md:text-4xl text-sky-200"></i>
        <h2 className="text-2xl md:text-4xl text-sky-200">RecipesApp</h2>
      </div>
    </nav>
  );
};

export default Navbar;
