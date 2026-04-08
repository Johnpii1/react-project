import couch from '../assets/couch.png'


function Hero() {
    return (
        <div className="flex  flex-col gap-4 md:justify-between md:flex-row p-4 m-4">

<div className='flex flex-col gap-4 mt-8'>
<p className='border border-white bg-[#FFFFFF]/10 py-1 px-4 rounded-xl text-xs text-white w-fit'>
    Welcome to Furni.
</p>

<span>
    <h1 className='text-4xl text-white font-bold'>Modern Interior  </h1>
<h2 className='text-4xl text-white font-bold'>Design Studio</h2>
</span>

</div>

<div className='md:w-1/2'>
  <img className='object-contain' src={couch} alt="Couch" />
</div>
        </div>
    )
}



export default Hero;