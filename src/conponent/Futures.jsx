import chaior from "../assets/chaior.png"


function Futures() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-4 mt-10">
<div className="flex flex-col gap-4 md:gap-8">
<h3 className="font-semibold text-lg">Crafted with excellent material.</h3>

<p className="text-sm text-gray-500">Quisque mi urna, consequat quam in, varius consequat lacus. In et nisi lobortis felis ornare semper pellentesque.</p>

 <button className='bg-black  rounded-full text-sm text-white px-6 py-3 font-semibold w-fit'>
Explore
    </button>

</div>


<div className="relative bg-gray-300 rounded-lg h-auto w-[40vw] md:w-[15vw] py-8 flex justify-center items-center">
  <div className="flex flex-col items-center gap-10">

    <img
      className="absolute -top-9 left-1/2 -translate-x-1/2 w-20 object-contain"
      src={chaior}
      alt="chair"
    />

    <div className="flex flex-col items-center gap-2 mt-[4em]">
      <h4 className="text-md font-bold">Nordic Chair</h4>
      <p className="text-sm font-semibold">$50.00</p>
    </div>

    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl">
      <i className="bi bi-plus-circle-fill"></i>
    </span>

  </div>
</div>
</div>

    )
}


export default Futures;