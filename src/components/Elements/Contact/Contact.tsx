import { useState, useEffect } from "react";
import "./Contact.scss";
import { BsHeadset, BsSendFill, BsX } from "react-icons/bs";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [formChat, setFormChat] = useState(false);

  const toggleVisibility = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollPosition > windowHeight * 0.75 && !formChat) {
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

  const chatForm = () => {
    setFormChat(!formChat);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [formChat]);

  return (
    <div>
      {!formChat && isVisible && (
        <button
          onClick={chatForm}
          className={`contact ${isAtBottom ? "at-bottom" : ""}`}>
          <BsHeadset size={20} />
        </button>
      )}
      {formChat && (
        <div className="chat-form">
          <div className="card-chat">
            <div className="card-chat-header">
              Chat
              <button
                onClick={chatForm}
                className="close-button">
                <BsX size={20} />
              </button>
            </div>
            {/* Formchat belum tersedia di figma */}
            <div className="card-chat-body flex-col">
              <p>Form Chat</p>
              <span className="text-sm">sayang nya belum tersedia di figma nya 🥲</span>
            </div>
            <div className="card-chat-footer">
              <form action="">
                <input
                  type="text"
                  className=""
                  placeholder="Message"
                />
                <button><BsSendFill size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
