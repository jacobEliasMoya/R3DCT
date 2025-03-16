
function App() {

  return (
    <body className="w-full min-h-screen bg-neutral-700">
      <header className="w-full grid grid-cols-3 p-5  [box-shadow:0em_2em_1em_-1.7em_#9999991A] sticky-top top-0">
        <section className="flex items-center justify-start">
          <h1 className=" font-black  w-100 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-neutral-300">R3DCT<span className="text-emerald-500">.</span></h1>
        </section>
        <section className="flex items-center justify-center">
          <ul className="flex items-center justify-center flex-row gap-8 font-black tracking-widest text-white">
            <li className="hover:text-emerald-400 cursor-pointer">3D</li>
            <li className="hover:text-emerald-400 cursor-pointer">LinkedIn</li>
            <li className="hover:text-emerald-400 cursor-pointer">Blog</li>
          </ul>
        </section>
        <section className="flex items-center justify-end">
          <button className="py-3 px-8 bg-emerald-700 rounded-full active text-white hover:text-emerald-900 tracking-wider font-black cursor-pointer hover:bg-emerald-500  hover:border-emerald-600  border-b-4 border-emerald-800">Contact</button>
        </section>
      </header>
    </body>
  )
}

export default App
