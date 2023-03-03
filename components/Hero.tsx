function Hero() {
  return (
    <div className="border-b-[1px] border-gray-400 bg-yellow-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl p-5 mx-auto gap-5">
        <div className=" space-y-5 flex flex-col justify-center">
          <div className="text-3xl md:text-5xl font-semibold">Stay Curious</div>
          <p className="text-base sm:text-xl max-w-lg">
            Discover stories, thinking, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod, asperiores! and expertise from writers on
            any topic.
          </p>
          <div>
            <button className="px-6 text-lg tracking-wide py-2 bg-gray-900 rounded-full text-white">
              Start Reading
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <img src="/med.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
