/**
 * 
 * @param props id ? Any
 * @returns 
 */
const OurService = (props:any) => {
  const { id } = props

  return (
    <div className="min-h-screen flex justify-center" id={id}>
      <div className="w-full p-20 flex justify-center">
        <div className="card">
          <h1 className="text-dark text-center my-10 font-alex-brush font-semibold text-3xl drop-shadow">
            Our Services
          </h1>
          <div className="flex flex-row justify-center gap-20 uppercase">
            <div className="flex justify-center flex-col items-center">
              <img
                src="/assets/icons/wedding-makeup.svg"
                alt=""
                style={{
                  filter: "drop-shadow(0 0px 5px rgba(0, 0, 0, 0.30))"
                }}
              />
              <h1 className="text-dark text-center mb-10 font-montserrat font-semibold text-xl">
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
        </div>
      </div>
    </div>
  );
};

export default OurService;
