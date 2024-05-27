import Navbar from "@components/Fragments/Navbar/Navbar";
import Banner from "@components/Fragments/Banner/Banner";
import About from "@components/Fragments/About/About";
import OurService from "@components/Fragments/OurService/OurService";
import Collection from "@components/Fragments/Collection/Collection";
import Portofolio from "@components/Fragments/Portofolio/Portofolio";
import Package from "@components/Fragments/Package/Package";
import Footer from "@components/Fragments/Footer/Footer";

import ScrollSpy from "react-ui-scrollspy";
import ScrollToTopButton from "@components/Elements/ScrollToTopButton/ScrollToTopButton";

const HomeLanding = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <ScrollSpy scrollThrottle={100}>
        <Banner id="home" />
        <div className="container shadow-md bg-light">
          <About id="about" />
          <OurService id="services" />
          <Collection id="collection" />
          <Portofolio id="portofolio" />
          <Package id="package" />
        </div>
      </ScrollSpy>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default HomeLanding;
