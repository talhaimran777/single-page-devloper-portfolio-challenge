import React from "react";
import Footer from "components/Footer";

const ContactSection = () => {
  return (
    <div className="bg-[#242424] py-[60px] lg:py-[84px] px-4 md:px-[30px] min-[1139px]:px-0">
      <div className="lg:max-w-[1110px] lg:mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between pb-[92px] gap-y-[50px] lg:gap-y-0 sm:w-[445px] lg:w-auto sm:mx-auto">
          <div className="lg:w-[450px] text-center lg:text-left">
            <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold mb-5 md:mb-6 lg:mb-9">
              Contact
            </h1>
            <p className="text-base md:text-lg">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form className="w-full lg:w-auto">
            <div>
              <input
                className="focus:outline-none w-full lg:w-[445px] px-6 mb-8 pb-4 bg-transparent border-b-2 border-b-[#979797]"
                type="text"
                placeholder="NAME"
              />
            </div>
            <div>
              <input
                className="focus:outline-none w-full lg:w-[445px] px-6 mb-8 pb-4 bg-transparent border-b-2 border-b-[#979797]"
                type="text"
                placeholder="EMAIL"
              />
            </div>
            <div>
              <textarea
                className="focus:outline-none w-full lg:w-[445px] px-6 mb-4 bg-transparent border-b-2 border-b-[#979797]"
                rows={4}
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="focus:outline-none uppercase font-bold text-base tracking-wide py-2"
                style={{
                  borderBottomColor: "#4EE1A0",
                  borderBottomWidth: "2px",
                }}
              >
                send message
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactSection;