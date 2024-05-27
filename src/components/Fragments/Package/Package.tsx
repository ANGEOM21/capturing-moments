import Card from "@components/Elements/Card/Card";
import Slide from "@components/Elements/Slide/Slide";
import { SwiperSlide } from "swiper/react";

/**
 *
 * @param props id ? Any
 * @returns
 */
const Package = (props: any) => {
  const { id } = props;
  const cardPackage = [
    {
      title: "SILVER",
      content: [
        {
          subtitle: "Service you get",
          list: [
            "1 concept (minimalis indoor/outdoor concept)",
            "1 tier wedding cake",
            "2 looks wardrobe",
            "3 hours coverage",
            "1 guest star for live music",
            "Restaurant for 100 invited guests",
            "Classic wedding vehicles (max electric)"
          ]
        },
        {
          subtitle: "Items you get",
          list: [
            "20 files edited",
            "2 photos 50x75  printed with frame",
            "3 photos 11R printed with frame",
            "1 minute cinematic video"
          ]
        }
      ],
      img: "/assets/img/collection-1.png",
      link: "/package/silver"
    },
    {
      title: "GOLD",
      content: [
        {
          subtitle: "Service you get",
          list: [
            "2 concepts (indoor/outdoor concepts)",
            "2 tier wedding cake",
            "3 looks wardrobe",
            "8 hours coverage",
            "3 guest star for live music",
            "Restaurant for 200 invited guests ",
            "Electric wedding vehicles (max luxury)"
          ]
        },
        {
          subtitle: "Items you get",
          list: [
            "40 files edited",
            "4 photos 50x75  printed with frame",
            "7 photos 11R printed with frame",
            "5 minute cinematic video"
          ]
        }
      ],
      img: "/assets/img/collection-2.png",
      link: "/package/gold"
    },
    {
      title: "PLATINUM",
      content: [
        {
          subtitle: "Service you get",
          list: [
            "3 concepts (indoor/outdoor concepts)",
            "3 tier wedding cake (max 5)",
            "6 looks wardrobe",
            "1-day hours coverage",
            "5 guest star for live music",
            "Restaurant for 400 invited guests (max 500 invited guests)",
            "Luxury wedding vehicles (max sport)",
            "Escort to the wedding venue"
          ]
        },
        {
          subtitle: "Items you get",
          list: [
            "100 files edited",
            "10 photos 50x75  printed with frame (max 15)",
            "15 photos 11R printed with frame (max 20)",
            "10 minute cinematic video"
          ]
        }
      ],
      img: "/assets/img/collection-6.png",
      link: "/package/platinum"
    }
  ];

  return (
    <div
      className="min-h-screen flex justify-center"
      id={id}>
      <div className="md:py-20 w-[100%] h-full py-10">
        <h1 className="text-dark text-center md:my-10 font-alex-brush font-semibold text-3xl drop-shadow">
          Our Wedding Collection
        </h1>
        <div className="w-full h-full my-2">
          <Slide.Package>
            {cardPackage.map((item, index) => (
              <SwiperSlide key={index}>
                <Card.CardPackage
                  title={item.title}
                  content={item.content}
                  img={item.img}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Slide.Package>
        </div>
      </div>
    </div>
  );
};

export default Package;
