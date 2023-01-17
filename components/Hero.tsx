function Hero() {
  return (
    <div className="border-b-[1px] p-10 border-gray-400 bg-yellow-500">
      <div className="flex items-end max-w-7xl mx-auto">
        <div className=" space-y-10 w-[100%] md:w-[50%]">
          <div className="text-4xl md:text-6xl font-semibold">Stay Curious</div>
          <p className="text-xl md:text-2xl">
            Discover stories, thinking, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod, asperiores! and expertise from writers on
            any topic.
          </p>
          <button className="px-6 text-lg tracking-wide py-2 bg-gray-900 rounded-full text-white">
            Start reading
          </button>
        </div>
        <div className="hidden md:inline ml-auto">
          <img src="/med.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
