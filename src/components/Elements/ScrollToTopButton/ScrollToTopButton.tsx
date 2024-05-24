import { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const toggleVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollPosition > windowHeight * 0.75) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (window.innerHeight + window.scrollY >= fullHeight - 100) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${isAtBottom ? "at-bottom " : ""}`}>
          <BsArrowUp size={15} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
