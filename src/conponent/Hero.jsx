import couch from '../assets/couch.png'


function Hero() {
    return (
        <div className="flex  flex-col gap-4 md:justify-between md:flex-row p-4 m-4">

<div className='flex flex-col gap-6 mt-8'>
<p className='border border-white bg-[#FFFFFF]/10 py-1 px-4 rounded-xl text-xs text-white w-fit'>
    Welcome to Furni.
</p>

<span>
    <h1 className='text-6xl text-white font-bold'>Modern Interior  </h1>
<h2 className='text-6xl text-white font-bold'>Design Studio</h2>
</span>

<p className='text-sm text-white'>Quisque mi urna, consequat et quam in, varius consequat lacus. In et nisi lobortis felis ornare semper pellentesque est ex ut du.</p>

<div className='flex flex-row gap-4'>
    <button className='bg-[#F9BF29] rounded-full text-sm text-black px-5 py-3 font-semibold'>
Shop now
    </button>

    <button className='border-white border  rounded-full text-sm text-white px-5 py-3 font-semibold'>
Explore
    </button>
</div>

</div>

<div className='md:w-1/2'>
  <img className='object-contain' src={couch} alt="Couch" />
</div>
        </div>
    )
}



export default Hero;