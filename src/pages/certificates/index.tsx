export function Certificates() {
  return (
    <>
      <div className="w-full flex md:flex-row md:justify-center md:flex-wrap flex-col items-center gap-7">
        <div
          className="w-[370px] md:w-[450px] from-zinc-800 via-zinc-600 to-zinc-400 bg-gradient-to-tr
        px-5 py-5 relative overflow-hidden group origin-top transition-all"
        >
          <div className="w-full relative group overflow-hidden">
            <div
              className="h-full w-3 bg-white absolute top-0 rotate-12 right-5
            backdrop-blur-sm brightness-125 backdrop-saturate-200 bg-opacity-50 rounded-[50%] group-hover:right-[25rem] 
            transition-all duration-700 blur-sm shadow shadow-white z-50"
            ></div>
            <img
              src="https://i.imgur.com/254p6Du.png"
              alt=""
              className="w-full object-cover ring-4 ring-black brightness-90 group-hover:brightness-100 transition-all"
            />
          </div>
          <div className="absolute px-3 py-2 bg-zinc-800 rounded bottom-2 left-1/2 -translate-x-1/2">
            Scrum Fundamentals
          </div>
        </div>
      </div>
    </>
  );
}
