import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

/**
 * 
 * @param props id ? Any
 * @returns 
 */
const About = (props: any) => {
  const { id } = props;
  return (
    <div
      className="min-h-screen flex justify-center"
      id={id}>
      <div className="md:p-20 p-10">
        <h1 className="text-dark text-center md:my-1 font-alex-brush font-semibold text-3xl drop-shadow">
          About Us
        </h1>
        <p className="text-dark md:px-20 font-montserrat text-center md:mb-32 mb-5 text-lg md:text-xl">
          Dalam aliran kelembutan dan keindahan yang mengalir seperti kain
          tulle, kami di Tulle Capture Wedding Agency, tidak hanya melihat
          pernikahan sebagai sebuah acara, tetapi sebagai perjalanan yang
          mempesona menuju sebuah momen yang abadi. Dengan penuh keanggunan dan
          keahlian yang mendalam, kami berkomitmen untuk tidak hanya
          menyelenggarakan pernikahan yang tak terlupakan, tetapi juga
          mengabadikan setiap momen berharga yang terjadi dalam perjalanan
          menuju hari yang paling istimewa dalam hidup Anda.
        </p>
        <Link to={"/about"} className="btn btn-primary text-light font-montserrat float-end">
          Read More <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default About;
