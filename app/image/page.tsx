import Image from "next/image";

function ImageComp() {
  return (
    <div>
      <Image src={"/shakira.jpg"} width={200} height={200} alt="shakira" />

      <img src="/shakira.jpg" alt="" />

      <div className="w-[400px] h-[200px] grid grid-cols-2 gap-2">
        <div className="bg-pink-600 relative">
          <Image
            src={"/shakira.jpg"}
            fill
            // className="object-cover object-center"
            alt="shakira"
          />
        </div>
        <div className="bg-purple-600 relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            fill
            className="object-cover object-center"
            alt="shakira"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageComp;
