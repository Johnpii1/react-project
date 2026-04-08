function Navbar() {
  return (
    <div className="flex justify-between gap-10  px-8 py-8 sticky z-50 top-0 bg-[#3B5D50] p-4">
      <div className="font-bold text-xl text-white cursor-pointer">Furni.</div>

      <div className="flex flex-row gap-10">
        <div className="hidden  md:flex flex-row gap-4  font-semibold  text-sm text-white cursor-pointer">
          <nav className="inline-block hover:border-b-2 hover:border-yellow-600 p-0 m-0">
            Home
          </nav>
          <nav className="inline-block hover:border-b-2 hover:border-yellow-600 p-0 m-0">
            About
          </nav>
          <nav className="inline-block hover:border-b-2 hover:border-yellow-600 p-0 m-0">
            Service
          </nav>
          <nav className="inline-block hover:border-b-2 hover:border-yellow-600 p-0 m-0">
            Blog
          </nav>
          <nav className="inline-block hover:border-b-2 hover:border-yellow-600 p-0 m-0">
            Contact
          </nav>
        </div>

        <div className="flex flex-row gap-4  font-semibold  text-sm text-white cursor-pointer">
          <div className="flex text-xl md:hidden">
            <span>
              <i class="bi bi-list-task"></i>
            </span>
          </div>

          <div className="flex flex-row gap-4  font-semibold  text-sm text-white cursor-pointer">
            <span>
              <i class="bi bi-person hover:text-yellow-600 text-lg md:text-sm"></i>
            </span>
            <span>
              <i class="bi bi-cart  hover:text-yellow-600 text-lg  md:text-sm"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
