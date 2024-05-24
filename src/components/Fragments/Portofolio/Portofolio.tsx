import Card from "@components/Elements/Card/Card";


/**
 * 
 * @param props id ? Any
 * @returns 
 */
const Portofolio = (props: any) => {
  const { id } = props;
  const cardPorto = [
    {
      title: "Journey of Love: Our weddings Moments",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      img: "/assets/img/collection-1.png"
    },
    {
      title: "Love Unveiled: Our Journey Together",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      img: "/assets/img/collection-3.png"
    },
    {
      title: "Whispers of Forever: Chronicles of Our Wedding",
      desc: "Bandung Dec 17, 2023 at Jl. Asia Afrika",
      img: "/assets/img/collection-2.png"
    }
  ];

  return (
    <div
      className="min-h-screen flex justify-center"
      id={id}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-dark text-center mt-10 font-alex-brush font-semibold text-3xl drop-shadow">
          Our Portofolio
        </h1>
        <div className="w-full">
          <div className="carousel carousel-center md:max-w-max max-w-sm min-w-72 space-x-4 items-start">
            {cardPorto.map((item, index) => (
              <Card.CardPorto
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
