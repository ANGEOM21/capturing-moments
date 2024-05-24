import Slide from "@components/Elements/Slide/Slide";

/**
 * @params id ? Any
 * @returns
 */
const Collection = (props: any) => {
  const { id } = props;

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
    <div
      className="min-h-screen flex justify-center"
      id={id}>
      <div className="md:py-20 w-[80%] h-full py-10">
        <h1 className="text-dark text-center md:my-10 font-alex-brush font-semibold text-3xl drop-shadow">
          Our Wedding Collection
        </h1>
        <div className="w-full h-full my-2">
          <Slide.Collection images={images} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
