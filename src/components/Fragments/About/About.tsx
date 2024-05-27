import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

/**
 *
 * @param props id ? Any
 * @returns
 */
const About = (props: any) => {
  const { id } = props;

  const [isReadMore, setIsReadMore] = useState(true);

  const teks_about =
    "Dalam aliran kelembutan dan keindahan yang mengalir seperti kain tulle, kami di Tulle Capture Wedding Agency, tidak hanya melihat pernikahan sebagai sebuah acara, tetapi sebagai perjalanan yang mempesona menuju sebuah momen yang abadi. Dengan penuh keanggunan dan keahlian yang mendalam, kami berkomitmen untuk tidak hanya menyelenggarakan pernikahan yang tak terlupakan, tetapi juga mengabadikan setiap momen berharga yang terjadi dalam perjalanan menuju hari yang paling istimewa dalam hidup Anda. Kami memahami bahwa setiap detail memiliki makna yang mendalam, setiap sorotan mata memiliki cerita yang unik, dan setiap senyuman adalah bagian dari sebuah kenangan yang abadi. Dengan demikian, kami mengambil tanggung jawab untuk menciptakan pengalaman yang mengalir seperti aliran angin musim semi, menangkap momen-momen penuh kebahagiaan, harapan, dan cinta yang memenuhi ruang hati dan jiwa.Melalui sentuhan kelembutan dan keahlian kami yang luar biasa, kami membentuk setiap detail menjadi karya seni yang tak terlupakan, membangun kenangan yang akan bertahan sepanjang masa. Dengan setiap langkah yang diambil dalam perjalanan ini, kami bersama Anda, membangun fondasi yang kuat bagi kisah cinta yang akan dikenang selamanya.";

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const shortDescription = teks_about.slice(0, 500);
  return (
    <div
      className="min-h-screen flex justify-center"
      id={id}>
      <div className="md:p-20 py-10 px-10">
        <h1 className="text-dark text-center md:my-1 font-alex-brush font-semibold text-3xl drop-shadow">
          About Us
        </h1>
        <p className="text-dark md:px-20 font-montserrat text-justify md:mb-32 mb-5 text-sm md:text-xl font-medium">
          {isReadMore ? shortDescription + "..." : teks_about}
          {isReadMore ? (
            <div className="h-2 w-full relative bottom-0 shadow-[0_-15px_10px_0_var(--light)]"></div>
          ) : null}
        </p>
        <button
          onClick={toggleReadMore}
          className="btn btn-primary text-light font-montserrat float-end">
          {isReadMore ? (
            <>
              Read More <BsArrowDown />
            </>
          ) : (
            <span>
              <BsArrowUp />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default About;
