import { Link } from "react-router-dom";

const Footer = () => {
  const url = window.location.pathname;

  const linkFoot = ["home", "about", "portofolio", "package", "contact"];

  const iconSocial = [
    {
      img: "./assets/icons/social/instagram.svg",
      class: "w-8 h-8",
      link: "#"
    },
    {
      img: "./assets/icons/social/whatsapp.svg",
      class: "w-10 h-10",
      link: "#"
    },
    {
      img: "./assets/icons/social/youtube.svg",
      class: "w-11 h-12",
      link: "#"
    },
    {
      img: "./assets/icons/social/facebook.svg",
      class: "w-8 h-9",
      link: "#"
    },
    {
      img: "./assets/icons/social/twiter.svg",
      class: "w-8 h-9",
      link: "#"
    }
  ];
  return (
    <footer className="bg-primary shadow-[0_0_10px_0_rgba(0,0,0,0.2)] mt-10">
      <div className="flex flex-col gap-4">
        {/* title footer */}
        <div className="flex justify-center items-center py-4 border-b-white border-b-2 w-full gap-2">
          <h1 className="font-alex-brush text-3xl text-light text-center drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]">
            TulleCapture
          </h1>
          <img
            src="./assets/icons/logo-footer.png"
            draggable="false"
            className="w-8 h-9 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
          />
        </div>
        {/* link footer */}
        <div className="flex justify-between mx-10 font-medium font-montserrat text-sm text-light">
          <div className="flex flex-col uppercase gap-4 flex-wrap h-24">
            {linkFoot.map((item, index) => (
              <Link
                className="link link-hover mx-6"
                to={`${url}/#${item}`}
                key={index}>
                {item}
              </Link>
            ))}
          </div>
          {/* sign in or sign up to access */}
          <Link
            to={"/#"}
            className="link link-hover w-60 px-4">
            Sign up and get the chance to enliven your wedding
          </Link>
        </div>
        {/* social acount */}
        <div className="flex items-center gap-3 px-14">
          {iconSocial.map((item, index) => (
            <Link
              to={item.link}
              key={index}>
              <img
                src={item.img}
                draggable="false"
                className={`object-cover drop-shadow-[0px_1px_4px_rgba(0,0,0,0.4)] ${item.class}`}
              />
            </Link>
          ))}
        </div>
        {/* copyright and policy terms */}
        <div className="flex py-4 border-t-white border-t-2 w-full px-10 items-center justify-between">
          {/* copyright */}
          <div className="flex justify-center align items-center text-light gap-2">
            <span className="text-2xl font-semibold font-montserrat">
              &copy;
            </span>
            <span className="font-montserrat font text-xl">2024,</span>
            <Link to={"#"} className="link link-hover mt-1">
              <span className="font-alex-brush text-xl">TuleCapture</span>
            </Link>
          </div>
          {/* terms and policy */}
          <div className="flex font-montserrat text-md text-center gap-1 text-light">
            <span>
              <Link
                to={"#"}
                className="link link-hover">
                Terms Use
              </Link>
            </span>
            <span>৹</span>
            <span>
              <Link
                to={"#"}
                className="link link-hover">
                Privacy Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
