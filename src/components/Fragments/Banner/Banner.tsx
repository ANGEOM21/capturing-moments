/**
 *
 * @param props id
 * @returns
 */
const Banner = (props: any) => {
  const { id } = props;
  return (
    // bg parallax in tailwind config
    <div
      className="hero min-h-screen bg-parallax bg-fixed bg-cover"
      id={id}>
        {/* backdrop bg */}
      <div className="-z-1 hero-overlay backdrop-blur bg-dark bg-opacity-30"></div>
      {/* main banner bg image and logo capturing moments */}
      <div className="z-1 text-center text-dark">
        <div className="max-w py-10 h-32 shadow">
          <img
            draggable="false"
            src="/assets/img/banner.jpeg"
            alt=""
            className="w-[800px] h-[400px] absolute inset-x-1/2 -translate-y-[50%] inset-y-[55%] -translate-x-1/2 object-cover rounded-lg shadow-[0_3px_60px_-15px_rgba(255,255,255,0.3)]"
          />
          <div className="flex flex-col items-center gap-[5px] justify-center text-primary">
            <img
              className="z-20 w-[5rem]"
              src="/assets/icons/logo.png"
              alt=""
              style={{
                filter: "drop-shadow(0 0 10px var(--primary))"
              }}
            />
            <h1
              className="z-20 text-light font-alex-brush font-semibold text-5xl tracking-widest"
              style={{
                textShadow:
                  "0 0 10px var(--primary), 0 0 20px #000, 0 0 30px var(--primary), 0 0 40px var(--primary), 0 0 50px var(--primary), 0 0 60px var(--primary), 0 0 70px var(--primary)"
              }}>
              Capturing Moments
            </h1>
            <p
              className="z-20 text-light font-montserrat text-xl italic"
              style={{
                textShadow: "0 0 10px #000, 0 0 20px var(--primary)"
              }}>
              PLAN THE PERFECT WEDDING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
