import Slide from "@components/Elements/Slide/Slide";

const Coba = () => {
  const images = [
    "assets/img/collection-1.png",
    "assets/img/collection-2.png",
    "assets/img/collection-3.png",
    "assets/img/collection-1.png",
    "assets/img/collection-5.png",
    "assets/img/collection-6.png",
    "assets/img/collection-1.png",
    "assets/img/collection-5.png",
    "assets/img/collection-6.png"
  ];

  return (
    <div className="min-h-screen flex justify-center">
      <div className="md:py-20 w-[80%] py-10">
        <h1 className="text-dark text-center md:my-10 font-alex-brush font-semibold text-3xl drop-shadow">
          Our Wedding Collection
        </h1>
        <div className="flex justify-center items-center my-2">
          <div className="w-full relative h-full">
            <Slide images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coba;
