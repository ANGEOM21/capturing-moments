/**
 *
 * @param props id ? Any
 * @returns
 */
const OurService = (props: any) => {
  const { id } = props;

  const data_services = [
    {
      data_1: [
        {
          id: 1,
          name: "wedding Makeup",
          icon: "/assets/icons/wedding-makeup.svg"
        },
        {
          id: 2,
          name: "wedding Cake",
          icon: "/assets/icons/wedding-cake.svg"
        },
        {
          id: 3,
          name: "Photos & Videos",
          icon: "/assets/icons/photos-vidio.svg"
        }
      ],
      data_2: [
        {
          id: 1,
          name: "Restaurant",
          icon: "/assets/icons/restaurant.svg"
        },
        {
          id: 2,
          name: "Live Music",
          icon: "/assets/icons/livemusic.svg"
        }
      ]
    }
  ];

  return (
    <div
      className="min-h-screen"
      id={id}>
      <div className="w-full md:p-20 flex justify-center">
        <div className="md:card xs:w-full">
          <h1 className="text-dark text-center my-10 font-alex-brush font-semibold text-3xl drop-shadow">
            Our Services
          </h1>
          {data_services.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-center flex-col md:gap-20 gap-5 uppercase">
                <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-5 uppercase">
                  {data.data_1.map((data_1, index) => {
                    return (
                      <div
                        key={index}
                        className="flex md:flex-col flex-row items-center bg-light shadow-xl p-3 md:shadow-none rounded w-full md:gap-0 gap-5">
                        <img
                          src={data_1.icon}
                          alt=""
                          style={{
                            filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                          }}
                          className="md:w-20 md:h-20 w-10 h-10"
                        />
                        <h1 className="text-dark text-center md:mb-10 font-montserrat font-semibold md:text-xl text-lg">
                          {data_1.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
                <div className="flex md:flex-row flex-col justify-center gap-5 md:gap-0">
                  {data.data_2.map((data_2, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center bg-light shadow-xl p-3 rounded w-full gap-5
                        md:flex-col
                        md:gap-1
                        md:shadow-none
                        md:p-0
                        ">
                        <img
                          src={data_2.icon}
                          alt=""
                          style={{
                            filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                          }}
                          className="md:w-20 md:h-20 w-10 h-10"
                        />
                        <h1 className="text-dark text-center md:mb-10 font-montserrat font-semibold md:text-xl text-lg">
                          {data_2.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurService;

/**
 * <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-5 uppercase">
            <div className="flex justify-center md:flex-col flex-row items-center bg-light shadow-md p-2 rounded">
              <img
                src="/assets/icons/wedding-makeup.svg"
                alt=""
                style={{
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                }}
                className="w-20 h-20"
              />
              <h1 className="text-dark text-center md:mb-10 font-montserrat font-semibold text-xl">
                Wedding Makeup
              </h1>
            </div>
            <div className="flex justify-center flex-col items-center">
              <img
                src="/assets/icons/wedding-cake.svg"
                alt=""
                style={{
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                }}
              />
              <h1 className="text-dark text-center mb-10 font-montserrat font-semibold text-xl">
                Wedding Cake
              </h1>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <img
                src="/assets/icons/photos-vidio.svg"
                alt=""
                style={{
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                }}
              />
              <h1 className="text-dark text-center mb-10 font-montserrat font-semibold text-xl">
                Photos & Videos
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-20 uppercase">
            <div className="flex justify-center flex-col items-center">
              <img
                src="/assets/icons/restaurant.svg"
                alt=""
              />
              <h1 className="text-dark text-center mb-10 font-montserrat font-semibold text-xl">
                Restaurant
              </h1>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <img
                src="/assets/icons/livemusic.svg"
                alt=""
                style={{
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                }}
              />
              <h1 className="text-dark text-center mb-10 font-montserrat font-semibold text-xl">
                Live Music
              </h1>
            </div>
          </div>
 */
