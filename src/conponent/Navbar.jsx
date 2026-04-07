function Navbar() {
    return (
        <div className="m-8 bg-gray-300 rounded-lg p-2 shadow-md text-blue-500">
<div className="flex justify-between gap-10 py-1 px-4">

<div className="font-bold text-xl text-black">
    logo
</div>

<div className="hidden  md:flex flex-row gap-4  font-semibold  text-lg cursor-pointer">
    <nav>Home</nav>
    <nav>About</nav>
    <nav>Contact</nav>
    <nav>Blog</nav>
</div>

</div>
        </div>
    )
}



export default Navbar;