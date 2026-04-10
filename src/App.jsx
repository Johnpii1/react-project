import Navbar from "./conponent/Navbar"
import Hero from "./conponent/Hero"
import Futures from "./conponent/Futures"


function App() {
  return ( 
  <div>
    <div className="bg-[#3B5D50]  w-full">
      <Navbar />
      <Hero />
    </div>

   <div>
    <Futures />
   </div>

    </div>
  )
}

export default App